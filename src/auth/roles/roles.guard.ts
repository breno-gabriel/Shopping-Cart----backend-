import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/role.decorator';
import { Role } from '../enumerators/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
    private reflector: Reflector
  ) {}


  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {


    const requiredRole = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const req = context.switchToHttp().getRequest(); 

    console.log(req.user.role)

    console.log (requiredRole)

    if (!requiredRole) {
      return true;
    }

    return req.user.role == requiredRole;
  }
}