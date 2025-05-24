import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ProductModule } from './products/products.module';
import { UserModule } from './users/users.module';
import { makeCounterProvider, PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'eato',
      password: '12345',
      database: 'orders',
      autoLoadEntities: true,
      synchronize: true,
      //logging: true,
    }),
    PrometheusModule.register({
      defaultMetrics: {
        enabled: true,
      },
    }),
    OrdersModule,
    ProductModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    makeCounterProvider({
      name: 'http_requests_total',
      help: 'Total number of HTTP request',
    }),
  ],
})
export class AppModule {}
