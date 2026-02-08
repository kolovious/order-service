import { Order } from '../domain/order';

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
      id: 'order_1',
      customerId: command.customerId,
      amount: command.amount,
    });

    return {
      id: order.id,
      customerId: order.customerId,
      amount: order.amount,
      status: order.status,
    };
  }
}
