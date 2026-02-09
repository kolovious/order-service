import { Order } from '../../domain/order';
import { OrderRepository } from '../../domain/order-repository';
import { OrderId } from '../../domain/value-objects/OrderId';
import { MoneyValueObject } from '../../../../shared/domain/value-objects/MoneyValueObject';

interface OrderRow {
  id: string;
  customerId: string;
  amount: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PrismaOrderModel {
  create(args: { data: OrderRow }): Promise<OrderRow>;
  findMany(args?: { orderBy?: { createdAt: 'asc' | 'desc' } }): Promise<OrderRow[]>;
}

interface PrismaClientLike {
  order: PrismaOrderModel;
}

function createPrismaClient(): PrismaClientLike {
  // Lazy runtime dependency. This keeps tests green even if Prisma packages
  // are not installed in this environment yet.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { PrismaClient } = require('@prisma/client');
  return new PrismaClient();
}

export class PrismaOrderRepository extends OrderRepository {
  constructor(private readonly prisma: PrismaClientLike = createPrismaClient()) {
    super();
  }

  async save(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: {
        id: order.id.value,
        customerId: order.customerId,
        amount: order.amount.amount,
        status: order.status,
      },
    });
  }

  async findAll(): Promise<Order[]> {
    const rows = await this.prisma.order.findMany({
      orderBy: { createdAt: 'asc' },
    });

    return rows.map((row) =>
      Order.create({
        id: new OrderId(row.id),
        customerId: row.customerId,
        amount: new MoneyValueObject(row.amount),
      }),
    );
  }
}
