import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ProductsModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
