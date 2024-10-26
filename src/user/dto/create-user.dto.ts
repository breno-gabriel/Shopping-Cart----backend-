import { IsEmail, IsString } from "class-validator"
import { Roles } from "../enumerators/roles.enumerator"

export class CreateUserDto {

    @IsString()
    name: string  
    
    @IsEmail()
    email: string   
    
    @IsString()
    password: string 
    
    @IsString()
    role: string    
    

}
