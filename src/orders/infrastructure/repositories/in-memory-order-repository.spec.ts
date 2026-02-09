import { InMemoryOrderRepository } from './in-memory-order-repository';
import { Order } from '../../domain/order';
import { OrderId } from '../../domain/value-objects/OrderId';
import { MoneyValueObject } from '../../../shared/domain/value-objects/MoneyValueObject';

describe('InMemoryOrderRepository', () => {
  it('should save and list orders', () => {
    const repository = new InMemoryOrderRepository();
    const order = Order.create({
      id: new OrderId('550e8400-e29b-41d4-a716-446655440000'),
      customerId: 'customer_1',
      amount: new MoneyValueObject(120),
    });

    repository.save(order);

    expect(repository.findAll()).toEqual([order]);
  });
});
