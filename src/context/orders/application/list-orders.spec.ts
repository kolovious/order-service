import { ListOrders } from './list-orders';
import { OrderRepository } from '../domain/order-repository';
import { Order } from '../domain/order';
import { OrderId } from '../domain/value-objects/OrderId';
import { MoneyValueObject } from '../../../shared/domain/value-objects/MoneyValueObject';

describe('ListOrders', () => {
  it('should map domain orders from repository', () => {
    const orderRepository = {
      save: jest.fn(),
      findAll: jest.fn(),
    } as unknown as jest.Mocked<OrderRepository>;

    orderRepository.findAll.mockReturnValue([
      Order.create({
        id: new OrderId('550e8400-e29b-41d4-a716-446655440000'),
        customerId: 'customer_1',
        amount: new MoneyValueObject(120),
      }),
    ]);

    const useCase = new ListOrders(orderRepository);
    const result = useCase.execute();

    expect(orderRepository.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual([
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        customerId: 'customer_1',
        amount: 120,
        status: 'created',
      },
    ]);
  });
});
