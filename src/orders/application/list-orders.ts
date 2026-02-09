import { OrderRepository } from '../domain/order-repository';

export interface OrderListItem {
  id: string;
  customerId: string;
  amount: number;
  status: string;
}

export class ListOrders {
  constructor(private readonly orderRepository: OrderRepository) {}

  execute(): OrderListItem[] {
    return this.orderRepository.findAll().map((order) => ({
      id: order.id.value,
      customerId: order.customerId,
      amount: order.amount.amount,
      status: order.status,
    }));
  }
}
