import { Order } from './order';
import { MoneyValueObject } from '../../../shared/domain/value-objects/MoneyValueObject';
import { OrderId } from './value-objects/OrderId';

const VALID_ORDER_ID = '550e8400-e29b-41d4-a716-446655440000';

describe('Order', () => {
  it('should create a valid order entity', () => {
    const order = Order.create({
      id: new OrderId(VALID_ORDER_ID),
      customerId: 'customer_1',
      amount: new MoneyValueObject(120),
    });

    expect(order.id.value).toBe(VALID_ORDER_ID);
    expect(order.customerId).toBe('customer_1');
    expect(order.amount.amount).toBe(120);
    expect(order.status).toBe('created');
  });

  it('should trim customerId during creation', () => {
    const order = Order.create({
      id: new OrderId(VALID_ORDER_ID),
      customerId: ' customer_1 ',
      amount: new MoneyValueObject(120),
    });

    expect(order.customerId).toBe('customer_1');
  });

  it('should fail when customerId is empty', () => {
    expect(() =>
      Order.create({
        id: new OrderId(VALID_ORDER_ID),
        customerId: '   ',
        amount: new MoneyValueObject(120),
      }),
    ).toThrow('customerId is required');
  });
});
