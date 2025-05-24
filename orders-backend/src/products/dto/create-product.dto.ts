import { IsDecimal, IsInt, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;
    @IsInt()
    stock: number;
    @IsDecimal()
    price: number;
}
