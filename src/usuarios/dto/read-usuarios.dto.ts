import { PartialType } from '@nestjs/swagger';
import { Expose, Exclude } from "class-transformer"
import { BaseRolesDto, BaseUsuariosDto } from './base-usuarios.dto';



@Exclude()
export class ReadUsuariosDto extends PartialType(BaseUsuariosDto) {
    @Expose()
    readonly username;

    @Expose()
    readonly lastName;

    @Expose()
    readonly firstName;
    
    @Expose()
    readonly age;
    
    @Expose()
    readonly password;

    @Expose()
    readonly email;

}
@Exclude()
export class ReadRolesDto extends PartialType(BaseRolesDto) {
    @Expose()
    readonly name;

}