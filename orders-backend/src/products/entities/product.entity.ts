import { Order } from "src/orders/entities/order.entity";

import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stock: number;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
