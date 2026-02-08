import { Order } from './order';

describe('Order', () => {
  it('should create a valid order entity', () => {
    const order = Order.create({
      id: 'order_1',
      customerId: 'customer_1',
      amount: 120,
    });

    expect(order.id).toBe('order_1');
    expect(order.customerId).toBe('customer_1');
    expect(order.amount).toBe(120);
    expect(order.status).toBe('created');
  });

  it('should trim customerId during creation', () => {
    const order = Order.create({
      id: 'order_1',
      customerId: ' customer_1 ',
      amount: 120,
    });

    expect(order.customerId).toBe('customer_1');
  });

  it('should fail when customerId is empty', () => {
    expect(() =>
      Order.create({
        id: 'order_1',
        customerId: '   ',
        amount: 120,
      }),
    ).toThrow('customerId is required');
  });

  it('should fail when amount is less than or equal to zero', () => {
    expect(() =>
      Order.create({
        id: 'order_1',
        customerId: 'customer_1',
        amount: 0,
      }),
    ).toThrow('amount must be greater than zero');
  });
});
