import { OrderRepository } from '../domain/order-repository';

export interface OrderListItem {
  id: string;
  customerId: string;
  amount: number;
  status: string;
}

export class ListOrders {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(): Promise<OrderListItem[]> {
    const orders = await this.orderRepository.findAll();

    return orders.map((order) => ({
      id: order.id.value,
      customerId: order.customerId,
      amount: order.amount.amount,
      status: order.status,
    }));
  }
}
