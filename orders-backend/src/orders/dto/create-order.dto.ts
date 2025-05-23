import { Product } from "src/products/entities/product.entity";

export class CreateOrderDto {
 name: string;
 quantity: number;
 products: Product[];
}
