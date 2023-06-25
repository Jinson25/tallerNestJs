import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './ventas/products.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LibreriaModule } from './libreria/libreria.module';



@Module({
  imports: [ProductsModule, UsuariosModule, LibreriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
