import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor (private prismaService: PrismaService) {}

  
  async create(createProductDto: CreateProductDto): Promise<Product> {

    return await this.prismaService.product.create({
      data: createProductDto
    });
  }

  async findAll(): Promise<Product[]> {
    return await this.prismaService.product.findMany();
  }

  async findOne(id: number): Promise<Product> {
    return await this.prismaService.product.findUnique(
      {
        where: {
          id 
        }
      }
    );
  }

  async update(id: number, updateProductDto: UpdateProductDto) : Promise<Product> {
    return await this.prismaService.product.update({
      where: {
        id
      }, 
      data: updateProductDto
    });
  }

  async remove(id: number): Promise<Product>{
    return await this.prismaService.product.delete({
      where: {
        id 
      }
    });
  }
}
