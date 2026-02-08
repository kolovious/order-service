import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateOrder } from './application/create-order';
import { ListOrders } from './application/list-orders';

@Injectable()
export class OrdersService {
  constructor(
    private readonly createOrder: CreateOrder,
    private readonly listOrders: ListOrders,
  ) {}

  create(dto: CreateOrderDto) {
    return this.createOrder.execute({
      customerId: dto.customerId,
      amount: dto.amount,
    });
  }

  list() {
    return this.listOrders.execute();
  }
}
