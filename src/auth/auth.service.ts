import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {

  constructor (
    private userService: UserService, 
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string) : Promise<Auth> {

    const user = await this.userService.findByEMail(email);

    if (!user) {
      throw new NotFoundException("User not found"); 
    }

    const payload = {id: user.id, email: user.email, name: user.name, role: user.role}

    return {
      acess_token: await this.jwtService.signAsync(payload), 
      user: user
    };
  }

}
