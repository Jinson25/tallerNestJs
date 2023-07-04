//import {DataSourceEnum, RepositoryEnum } from '@shared/enums';
import { DataSource } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CategoryEntity } from './entities/category.entity';


export const ventasProviders = [
    {
        provide:RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory: (dataSource:DataSource) =>
        dataSource.getRepository(ProductEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide:RepositoryEnum.CATEGORY_REPOSITORY,
        useFactory: (dataSource:DataSource) =>
        dataSource.getRepository(CategoryEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE],
    },

];