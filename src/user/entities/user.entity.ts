import { IsEmail, IsInt, IsString } from "class-validator"
import { Roles } from "../enumerators/roles.enumerator"

export class User {

    @IsInt()
    id: number
    
    @IsString()
    name: string 
    
    @IsEmail()
    email: string 
    
    @IsString()
    password: string  

    @IsString()
    role: string      

}
