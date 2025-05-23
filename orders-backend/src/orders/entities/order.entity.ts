import { Product } from "src/products/entities/product.entity";

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: string;

  @ManyToMany(() => Product, (product) => product.orders, {
    cascade: true,
  })
  @JoinTable()
  products: Product[];
}
