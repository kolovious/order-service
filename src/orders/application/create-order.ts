import { Order } from '../domain/order';
import { MoneyValueObject } from '../../shared/domain/value-objects/MoneyValueObject';
import { OrderId } from '../domain/value-objects/OrderId';

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
  execute(command: CreateOrderCommand): CreateOrderResult {
    const order = Order.create({
      id: new OrderId('550e8400-e29b-41d4-a716-446655440000'),
      customerId: command.customerId,
      amount: new MoneyValueObject(command.amount),
    });

    return {
      id: order.id.value,
      customerId: order.customerId,
      amount: order.amount.amount,
      status: order.status,
    };
  }
}
