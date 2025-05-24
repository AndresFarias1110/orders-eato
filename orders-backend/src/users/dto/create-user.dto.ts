import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    firstLastName: string;

    @IsString()
    secondLastName: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;

}