import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor (private userService: UserService) {}

  async login(email: string, password: string) {

    const user = this.userService.findByEMail(password);

    if (!user) {
      throw new NotFoundException("User not found"); 
    }

    

    return 'This action adds a new auth';
  }

}
