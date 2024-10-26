import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private jwtService : JwtService) {}

  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>  {

    const req = context.switchToHttp().getRequest();

    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {

      throw new UnauthorizedException("Invalid credentials");

    }

    try {
      const payload = await this.jwtService.verifyAsync(token);

      req['user'] = payload;
  
      return true;
    }catch (err) {

      throw new UnauthorizedException("Invalid credentials");

    }

  }
}
