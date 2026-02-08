import { OrderId } from './OrderId';

describe('OrderId', () => {
  it('should create a valid order id', () => {
    const orderId = new OrderId('550e8400-e29b-41d4-a716-446655440000');

    expect(orderId.value).toBe('550e8400-e29b-41d4-a716-446655440000');
  });

  it('should fail when value is not a UUID v4', () => {
    expect(() => new OrderId('order_1')).toThrow(
      'value must be a valid UUID v4',
    );
  });
});
