import { CreateOrder } from './create-order';

describe('CreateOrder', () => {
  it('should create an order result from command input', () => {
    const useCase = new CreateOrder();

    const result = useCase.execute({
      customerId: 'customer_1',
      amount: 120,
    });

    expect(result).toEqual({
      id: '550e8400-e29b-41d4-a716-446655440000',
      customerId: 'customer_1',
      amount: 120,
      status: 'created',
    });
  });

  it('should fail when amount is invalid', () => {
    const useCase = new CreateOrder();

    expect(() =>
      useCase.execute({
        customerId: 'customer_1',
        amount: 0,
      }),
    ).toThrow('amount must be greater than zero');
  });
});
