export interface Product {
    id: number;
    name: string;
    stock: number;
    price: string;
    createdAt: string;
}

export interface ProductStateModel {
    productList: Product[];
}