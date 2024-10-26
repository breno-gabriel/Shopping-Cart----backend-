import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserService],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
