import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { readReplicas } from '@prisma/extension-read-replicas'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // Use any type to avoid TypeScript errors with the extended client
  private prismaReplicaClient: any

  async onModuleInit() {
    await this.$connect()

    // Initialize the read replica client
    this.initializeReplicaClient()

    this.$use(async (params, next) => {
        if (params.action == 'delete') {
          params.args['data'] = { deleted_at: new Date() }
        }
        if (params.action == 'deleteMany') {
          params.action = 'updateMany'
          if (params.args.data != undefined) {
            params.args.data['deleted_at'] = new Date()
          } else {
            params.args['data'] = { deleted_at: new Date() }
          }
        }
        if (params.action === 'findUnique' || params.action === 'findFirst') {
          params.action = 'findFirst'
          params.args.where['deleted_at'] = null
        }
        if (params.action === 'findFirstOrThrow' || params.action === 'findUniqueOrThrow') {
          if (params.args.where) {
            if (params.args.where.deleted_at == undefined) {
              params.args.where['deleted_at'] = null
            }
          } else {
            params.args['where'] = { deleted_at: null }
          }
        }
        if (params.action === 'findMany') {
          if (params.args.where) {
            if (params.args.where.deleted_at == undefined) {
              params.args.where['deleted_at'] = null
            }
          } else {
            params.args['where'] = { deleted_at: null }
          }
        }
      //}
      return next(params)
    })
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  private initializeReplicaClient() {
    try {
      const urls = []
      const readReplicasUrl = new URL(process.env.DATABASE_RO_URL)
      readReplicasUrl.searchParams.set('application_name', process.env.APP_NAME)
      urls.push(readReplicasUrl.toString())
      this.prismaReplicaClient = this.$extends(
        readReplicas({
          url: urls,
        }),
      )
  
      console.log('✅ Prisma Replica Client initialized successfully!')
    } catch (error) {
      console.error('❌ Failed to initialize Prisma Replica Client:', error)
    }
  }
  

  readReplicas() {
    if (!this.prismaReplicaClient) {
      this.initializeReplicaClient()
    }
    return this.prismaReplicaClient.$replica()
  }
}
