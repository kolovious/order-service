import { Order } from './order';

export abstract class OrderRepository {
  abstract save(order: Order): void;
  abstract findAll(): Order[];
}
