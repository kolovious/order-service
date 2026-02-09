import { Order } from '../../domain/order';
import { OrderRepository } from '../../domain/order-repository';

export class InMemoryOrderRepository extends OrderRepository {
  private readonly orders: Order[] = [];

  save(order: Order): void {
    this.orders.push(order);
  }

  findAll(): Order[] {
    return [...this.orders];
  }
}
