import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateOrder } from '../../context/orders/application/create-order';
import { ListOrders } from '../../context/orders/application/list-orders';

@Injectable()
export class OrdersService {
  constructor(
    private readonly createOrder: CreateOrder,
    private readonly listOrders: ListOrders,
  ) {}

  async create(dto: CreateOrderDto) {
    return this.createOrder.execute({
      customerId: dto.customerId,
      amount: dto.amount,
    });
  }

  async list() {
    return this.listOrders.execute();
  }
}
