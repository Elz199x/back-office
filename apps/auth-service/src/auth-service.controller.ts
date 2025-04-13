import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { CreateAuthServiceDto } from './dto/create-auth-service.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth-service')
@ApiTags('AUTH')
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @Get('health')
  async healthCheck() {
    return await this.authServiceService.healthCheck()
  }

  @Post('login')
  @ApiOperation({ summary: 'login for back-office system' })
  async login (@Body() createAuthServiceDto: CreateAuthServiceDto){
    return await this.authServiceService.login(createAuthServiceDto)
  }

  @Post('register')
  @ApiOperation({ summary: 'Create Employee' })
  async createEmployee (@Body() createAuthServiceDto: CreateAuthServiceDto){
    return await this.authServiceService.createEmployee(createAuthServiceDto)
  }

  @Patch('reset-password')
  @ApiOperation({ summary: 'reset password for employee' })
  async resetPassword (@Body() createAuthServiceDto: CreateAuthServiceDto){
    return await this.authServiceService.resetPassword(createAuthServiceDto)
  }

}
