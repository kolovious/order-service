import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CreateOrder } from './application/create-order';
import { ListOrders } from './application/list-orders';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, CreateOrder, ListOrders],
})
export class OrdersModule {}
