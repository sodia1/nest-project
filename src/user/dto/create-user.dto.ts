import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsEmail()
    userName: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    name?: string;
}