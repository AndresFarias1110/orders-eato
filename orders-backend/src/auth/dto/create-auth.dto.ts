import { IsEmail, IsString } from "class-validator";

export class CreateAuthDto {

    userId?: number;

    @IsString()
    @IsEmail()
    username: string;

    @IsString()
    password: string;
}