import { IsInt, IsNumber, IsString } from "class-validator"

export class CreateProductDto {

    @IsString()
    name: string 

    @IsString()
    description: string
    
    @IsNumber()
    price: number

    @IsInt()
    sellerId: number  
    

}
