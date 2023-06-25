import { PartialType } from '@nestjs/swagger';
import { Expose, Exclude } from "class-transformer"
import { BaseCategoryDto, BaseProductDto } from './base-ventas.dto';


@Exclude()
export class ReadProductDto extends PartialType(BaseProductDto) {
    @Expose()
    readonly title;
    
    @Expose()
    readonly price;

    @Expose()
    readonly image;

    @Expose()
    readonly description;
}
@Exclude()
export class ReadCategoryDto extends PartialType(BaseCategoryDto) {
    @Expose()
    readonly title;
    
    @Expose()
    readonly price;

    @Expose()
    readonly image;

    @Expose()
    readonly description;
}