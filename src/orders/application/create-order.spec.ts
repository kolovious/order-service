import { CreateOrder } from './create-order';

describe('CreateOrder', () => {
  it('should create an order result from command input', () => {
    const useCase = new CreateOrder();

    const result = useCase.execute({
      customerId: 'customer_1',
      amount: 120,
    });

    expect(result).toEqual({
      id: 'order_1',
      customerId: 'customer_1',
      amount: 120,
      status: 'created',
    });
  });
});
