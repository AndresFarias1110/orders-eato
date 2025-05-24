import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
      private readonly orderRepository: Repository<Order>,
    @InjectRepository(Product)
      private readonly productRepository: Repository<Product>,
    @InjectRepository(User)
     private readonly userRepository: Repository<User>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
  
    const products = await Promise.all(createOrderDto.products.map(product => this.selectProducts(product)));
    const user = await this.userRepository.findOne({ where: { id: createOrderDto.userId } });
    
    if (user) {
      const product = this.orderRepository.create(
        {
          ...createOrderDto,
          products,
          user
        }
      );

      await this.orderRepository.save(product);

      return product;
    }
    
    return new NotFoundException("No existe el usuario");
  }

  findAll() {
    return this.orderRepository.find({
      relations: ['products'],
    });
  }

  findOne(id: number) {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['products'],
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  async selectProducts(id: number) {
    const productEntity = await this.productRepository.findOneBy({ id });
    if (productEntity) {
      return productEntity;
    }
    return new NotFoundException("No existen los productos");
  }
}
