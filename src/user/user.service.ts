import { Injectable, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Injectable()
export class UserService {

  constructor (private prismaService : PrismaService) {}

  async create(createUserDto: CreateUserDto) : Promise<User>{

    return await this.prismaService.user.create({

        data: {...createUserDto}

    });
  }

  @UseGuards(AuthGuard)
  async findAll() : Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  @UseGuards(AuthGuard)
  async findOne(id: number) : Promise<User> {
    return await this.prismaService.user.findUnique({
      where: {
        id 
      }
    });
  }

  @UseGuards(AuthGuard)
  async findByEMail (email: string): Promise<User> {

    return await this.prismaService.user.findUnique({
      where: {
        email 
      }
    });

  }

  @UseGuards(AuthGuard)
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {

    const date = new Date()

    return await this.prismaService.user.update({
      where: {
        id
      }, 
      data: {...updateUserDto, updatedAt: date.toISOString()}
    });
  }

  @UseGuards(AuthGuard)
  async remove(id: number): Promise<User> {
    return await this.prismaService.user.delete({
      where: {
        id
      }
    })
  }
}
