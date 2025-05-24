import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  folio: string;

  @Column()
  state: string;

  @ManyToMany(() => Product, (product) => product.orders, {
    cascade: true,
  })
  @JoinTable()
  products: Product[];

  @ManyToOne(() => User, user => user.orders)
  user: User;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
