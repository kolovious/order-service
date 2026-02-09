import { PrismaOrderRepository } from './prisma-order-repository';
import { Order } from '../../domain/order';
import { OrderId } from '../../domain/value-objects/OrderId';
import { MoneyValueObject } from '../../../../shared/domain/value-objects/MoneyValueObject';

describe('PrismaOrderRepository', () => {
  it('should persist and rehydrate orders through prisma model', async () => {
    const create = jest.fn().mockResolvedValue(undefined);
    const findMany = jest.fn().mockResolvedValue([
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        customerId: 'customer_1',
        amount: 120,
        status: 'created',
      },
    ]);

    const repository = new PrismaOrderRepository({
      order: {
        create,
        findMany,
      },
    });

    await repository.save(
      Order.create({
        id: new OrderId('550e8400-e29b-41d4-a716-446655440000'),
        customerId: 'customer_1',
        amount: new MoneyValueObject(120),
      }),
    );

    const result = await repository.findAll();

    expect(create).toHaveBeenCalledTimes(1);
    expect(findMany).toHaveBeenCalledWith({ orderBy: { createdAt: 'asc' } });
    expect(result).toHaveLength(1);
    expect(result[0].id.value).toBe('550e8400-e29b-41d4-a716-446655440000');
  });
});
