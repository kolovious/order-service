import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateOrder } from './application/create-order';

@Injectable()
export class OrdersService {
  constructor(private readonly createOrder: CreateOrder) {}

  create(dto: CreateOrderDto) {
    return this.createOrder.execute({
      customerId: dto.customerId,
      amount: dto.amount,
    });
  }

  list() {
    return [];
  }
}
