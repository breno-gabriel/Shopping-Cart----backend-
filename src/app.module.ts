import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './auth/roles/roles.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, AuthModule, RolesModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
