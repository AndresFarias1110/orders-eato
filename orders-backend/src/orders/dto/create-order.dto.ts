import { IsArray, IsBoolean, IsInt, IsString } from "class-validator";

export class CreateOrderDto {

    @IsString()
    state: string;

    @IsArray()
    products: number[];

    @IsInt()
    userId: number;
}
