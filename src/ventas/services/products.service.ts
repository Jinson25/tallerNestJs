import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-ventas.dto';
import { UpdateProductDto } from '../dto/update-ventas.dto';
import { ProductEntity } from '../entities/product.entity';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class ProductsService {
  private products: ProductEntity[] = [];

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const newProduct: ProductEntity = {
      id: Date.now().toString(),
      ...createProductDto,
      createAt: new Date(),
      updateAt: new Date(),
      delete: undefined,
      title: '',
      image: '',
      category: new CategoryEntity,
      getTitle: function (): void {
        throw new Error('Function not implemented.');
      },
      categoria: new CategoryEntity
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): ProductEntity[] {
    return this.products;
  }

  findOne(id: string): ProductEntity {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto): ProductEntity {
    const product = this.findOne(id);
    const updatedProduct = { ...product, ...updateProductDto, updateAt: new Date() };
    this.products = this.products.map((p) => (p.id === id ? updatedProduct : p));
    return updatedProduct;
  }

  remove(id: string): void {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products.splice(productIndex, 1);
  }
}
