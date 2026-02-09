import { Order } from '../../domain/order';
import { OrderRepository } from '../../domain/order-repository';

export class InMemoryOrderRepository extends OrderRepository {
  private readonly orders: Order[] = [];

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async findAll(): Promise<Order[]> {
    return [...this.orders];
  }
}
