import { randomUUID } from 'node:crypto';
import { Order } from '../domain/order';
import { MoneyValueObject } from '../../shared/domain/value-objects/MoneyValueObject';
import { OrderId } from '../domain/value-objects/OrderId';
import { OrderRepository } from '../domain/order-repository';

export interface CreateOrderCommand {
  customerId: string;
  amount: number;
}

export interface CreateOrderResult {
  id: string;
  customerId: string;
  amount: number;
  status: string;
}

export class CreateOrder {
  constructor(private readonly orderRepository: OrderRepository) {}

  execute(command: CreateOrderCommand): CreateOrderResult {
    const order = Order.create({
      id: new OrderId(randomUUID()),
      customerId: command.customerId,
      amount: new MoneyValueObject(command.amount),
    });

    this.orderRepository.save(order);

    return {
      id: order.id.value,
      customerId: order.customerId,
      amount: order.amount.amount,
      status: order.status,
    };
  }
}
