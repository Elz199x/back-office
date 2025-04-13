import { ApiProperty } from '@nestjs/swagger';  
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';
import { employee_role, employee_status } from '@prisma/client';

export class CreateAuthServiceDto {
    @ApiProperty({
        description: 'Username of the employee',
        example: 'superadmin',
        maxLength: 100,
    })
    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    username: string;

    @ApiProperty({
        description: 'Password of the employee (at least 10 characters long and contain both letters and numbers)',
        example: 'superadmin123',
    })
    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{10,}$/, {
        message: 'Password must be at least 8 characters long and contain both letters and numbers',
    })
    password: string;
    

    @ApiProperty({
        description: 'Email address of the employee',
        example: 'superadmin@example.com',
        maxLength: 255,
    })
    @IsEmail()
    @Length(1, 255)
    email: string;

    @ApiProperty({
        description: 'First name of the employee',
        example: 'Jane',
        maxLength: 100,
    })
    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    firstName: string;

    @ApiProperty({
        description: 'Last name of the employee',
        example: 'Doe',
        maxLength: 100,
    })
    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    lastName: string;

    @ApiProperty({
        description: 'Phone number of the employee (optional)',
        example: '0823456789',
        required: false,
    })
    @IsOptional()
    @Matches(/^[0-9]{10}$/)
    phone?: string;

    @ApiProperty({
        description: 'Role of the employee',
        enum: employee_role,
        example: 'STAFF',
    })
    @IsEnum(employee_role)
    role: employee_role;

    @ApiProperty({
        description: 'Status of the employee (optional)',
        enum: employee_status,
        example: 'ACTIVE',
        required: false,
    })
    @IsOptional()
    @IsEnum(employee_status)
    status?: employee_status;

    @ApiProperty({
        description: 'Last IP address of the employee (optional)',
        example: '192.168.1.100',
        required: false,
    })
    @IsOptional()
    @IsString()
    last_ip?: string;
}

