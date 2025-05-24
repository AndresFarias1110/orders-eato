import type { Product } from "./product.model";

export interface OrderModel {
    id?: number;
    folio?: string;
    state: string;
    products: Product[];
    createdAt?: string;
    userId?: number;
}

export interface OrderStateModel {
    orderList: OrderModel[];
}