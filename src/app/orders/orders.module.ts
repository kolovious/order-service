import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CreateOrder } from '../../context/orders/application/create-order';
import { ListOrders } from '../../context/orders/application/list-orders';
import { InMemoryOrderRepository } from '../../context/orders/infrastructure/repositories/in-memory-order-repository';
import { PrismaOrderRepository } from '../../context/orders/infrastructure/repositories/prisma-order-repository';
import { OrderRepository } from '../../context/orders/domain/order-repository';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    InMemoryOrderRepository,
    {
      provide: OrderRepository,
      useFactory: (
        inMemoryOrderRepository: InMemoryOrderRepository,
      ): OrderRepository => {
        const driver = process.env.ORDER_REPOSITORY_DRIVER ?? 'in-memory';
        if (driver === 'prisma') {
          return new PrismaOrderRepository();
        }

        return inMemoryOrderRepository;
      },
      inject: [InMemoryOrderRepository],
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
