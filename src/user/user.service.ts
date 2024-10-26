import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor (private prismaService : PrismaService) {}

  async create(createUserDto: CreateUserDto){

    return await this.prismaService.user.create({

        data: createUserDto

    });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({
      where: {
        id 
      }
    });
  }

  async findByEMail (email: string) {

    return await this.prismaService.user.findUnique({
      where: {
        email 
      }
    });

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
