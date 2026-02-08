import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CreateOrder } from './application/create-order';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, CreateOrder],
})
export class OrdersModule {}
