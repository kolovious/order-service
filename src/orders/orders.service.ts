import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  create(dto: CreateOrderDto) {
    return {
      id: 'order_1',
      customerId: dto.customerId,
      amount: dto.amount,
      status: 'created',
    };
  }

  list() {
    return [];
  }
}
