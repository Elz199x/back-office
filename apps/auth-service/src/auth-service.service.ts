import { hashPassword } from './../../../lib/common/utils/bcrypt/bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthServiceDto } from './dto/create-auth-service.dto';
import { UpdateAuthServiceDto } from './dto/update-auth-service.dto';
import { PrismaService } from 'lib/common/prisma/prisma.service';


@Injectable()
export class AuthServiceService {
  constructor(
    // private jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) { }
  async healthCheck() {
    return 'OK'
  }

  async createEmployee(createAuthServiceDto: CreateAuthServiceDto) {
    const employee = await this.prisma.readReplicas().employee.findFirst(
      {
        where: {
          OR: [{ username: createAuthServiceDto.username }, { email: createAuthServiceDto.email }]
        }
      }
    )
    if (employee) throw new BadRequestException('username or email')
    const hashedPassword = await hashPassword(createAuthServiceDto.password);

    console.log('Username:', createAuthServiceDto.username);  // ตรวจสอบว่า username ส่งมาถูกต้องหรือไม่

    return await this.prisma.employee.create({
      data: {
        username: createAuthServiceDto.username,
        password: hashedPassword,
        email: createAuthServiceDto.email,
        firstName: createAuthServiceDto.firstName,
        lastName: createAuthServiceDto.lastName,
        phone: createAuthServiceDto.phone,
        role: createAuthServiceDto.role,
        status: createAuthServiceDto.status,
      },

    })
  }

  async login(createAuthServiceDto: CreateAuthServiceDto) {

    return createAuthServiceDto;
  }

  async resetPassword(updateAuthServiceDto: UpdateAuthServiceDto) {
    return updateAuthServiceDto;
  }
}
