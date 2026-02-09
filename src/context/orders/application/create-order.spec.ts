import { CreateOrder } from './create-order';
import { OrderRepository } from '../domain/order-repository';

describe('CreateOrder', () => {
  let orderRepository: jest.Mocked<OrderRepository>;

  beforeEach(() => {
    orderRepository = {
      save: jest.fn(),
      findAll: jest.fn(),
    } as unknown as jest.Mocked<OrderRepository>;
  });

  it('should create an order result from command input', async () => {
    const useCase = new CreateOrder(orderRepository);

    const result = await useCase.execute({
      customerId: 'customer_1',
      amount: 120,
    });

    expect(result.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
    expect(result.customerId).toBe('customer_1');
    expect(result.amount).toBe(120);
    expect(result.status).toBe('created');
    expect(orderRepository.save).toHaveBeenCalledTimes(1);
  });

  it('should fail when amount is invalid', async () => {
    const useCase = new CreateOrder(orderRepository);

    await expect(() =>
      useCase.execute({
        customerId: 'customer_1',
        amount: 0,
      }),
    ).rejects.toThrow('amount must be greater than zero');
    expect(orderRepository.save).not.toHaveBeenCalled();
  });
});
