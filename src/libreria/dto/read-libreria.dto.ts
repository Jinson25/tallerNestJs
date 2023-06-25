import { PartialType } from '@nestjs/swagger';
import { Expose, Exclude } from "class-transformer"
import { BaseAuthorDto, BaseLibrosDto, } from './base-libreria.dto';


@Exclude()
export class ReadLibrosDto extends PartialType(BaseLibrosDto) {
    @Expose()
    readonly title;
    
    @Expose()
    readonly price;

    @Expose()
    readonly image;

    @Expose()
    readonly description;

    @Expose()
    readonly author;
}
@Exclude()
export class ReadAutoresDto extends PartialType(BaseAuthorDto) {
    @Expose()
    readonly nombre;
    
    @Expose()
    readonly apellido;

    @Expose()
    readonly ci;

    @Expose()
    readonly nacimiento;
}