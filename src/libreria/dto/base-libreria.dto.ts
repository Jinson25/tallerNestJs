import { IsString } from "class-validator";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator/types/decorator/decorators";



export class BaseLibrosDto{
    @IsString()
    @IsNotEmpty()
    readonly title:string

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly price:number

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly description:string

    @IsString()
    @IsNotEmpty()
    readonly image:string 

    @IsString()
    @IsNotEmpty()
    readonly author:string 
}
export class BaseAuthorDto{
    @IsString()
    @IsNotEmpty()
    readonly nombre:string

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly apellido:string

    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    readonly ci:number

    @IsDate()
    @IsOptional()
    @IsNotEmpty()
    readonly nacimiento:Date
}

