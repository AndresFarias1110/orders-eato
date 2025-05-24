import { Order } from "src/orders/entities/order.entity";

import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stock: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  
}
