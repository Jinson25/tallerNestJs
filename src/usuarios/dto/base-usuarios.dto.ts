import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IsNotEmpty, IsNumber } from "class-validator/types/decorator/decorators";


export class BaseUsuariosDto{
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly role: BaseRolesDto;

}
export class BaseRolesDto{
    @IsString()
    @IsNotEmpty()
    readonly name:string

}

