import { PartialType } from '@nestjs/mapped-types';

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateRolesDto, CreateUsuariosDto } from './create-usuarios.dto';
import { BaseRolesDto } from './base-usuarios.dto';

export class UpdateProductDto extends PartialType(CreateUsuariosDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  role: BaseRolesDto;

}

export class UpdateRolesDto extends PartialType(CreateRolesDto) {
    @ApiProperty()
    @IsOptional()
    @IsString()
    name: string;
  }
