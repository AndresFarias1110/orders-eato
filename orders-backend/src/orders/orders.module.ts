import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { ProductModule } from 'src/products/products.module';
import { UserModule } from 'src/users/users.module';
import { RabbitService } from 'src/rabbitmq/rabbitmq.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, User]),
    ProductModule,
    UserModule,
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://myuser:mypassword@localhost:5672'],
          queue: 'eato_orders',
          queueOptions: {
            durable: true,
          },
        },
      }
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, RabbitService],
})
export class OrdersModule { }
