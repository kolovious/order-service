import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CreateOrder } from './application/create-order';
import { ListOrders } from './application/list-orders';
import { InMemoryOrderRepository } from './infrastructure/repositories/in-memory-order-repository';
import { OrderRepository } from './domain/order-repository';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    InMemoryOrderRepository,
    {
      provide: OrderRepository,
      useExisting: InMemoryOrderRepository,
    },
    {
      provide: CreateOrder,
      useFactory: (orderRepository: OrderRepository) =>
        new CreateOrder(orderRepository),
      inject: [OrderRepository],
    },
    {
      provide: ListOrders,
      useFactory: (orderRepository: OrderRepository) =>
        new ListOrders(orderRepository),
      inject: [OrderRepository],
    },
  ],
})
export class OrdersModule {}
