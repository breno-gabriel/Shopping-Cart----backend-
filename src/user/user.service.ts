import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor (private prismaService : PrismaService) {}

  async create(createUserDto: CreateUserDto) : Promise<User>{

    return await this.prismaService.user.create({

        data: {...createUserDto}

    });
  }

  async findAll() : Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: number) : Promise<User> {
    return await this.prismaService.user.findUnique({
      where: {
        id 
      }
    });
  }

  async findByEMail (email: string): Promise<User> {

    return await this.prismaService.user.findUnique({
      where: {
        email 
      }
    });

  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {

    const date = new Date()

    return await this.prismaService.user.update({
      where: {
        id
      }, 
      data: {...updateUserDto, updatedAt: date.toISOString()}
    });
  }

  async remove(id: number): Promise<User> {
    return await this.prismaService.user.delete({
      where: {
        id
      }
    })
  }
}
