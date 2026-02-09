import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { CreateOrder } from '../../context/orders/application/create-order';
import { ListOrders } from '../../context/orders/application/list-orders';
import { CreateOrderDto } from './dto/create-order.dto';

describe('OrdersService', () => {
  let service: OrdersService;
  let createOrder: jest.Mocked<CreateOrder>;
  let listOrders: jest.Mocked<ListOrders>;

  beforeEach(async () => {
    createOrder = {
      execute: jest.fn(),
    } as unknown as jest.Mocked<CreateOrder>;

    listOrders = {
      execute: jest.fn(),
    } as unknown as jest.Mocked<ListOrders>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        { provide: CreateOrder, useValue: createOrder },
        { provide: ListOrders, useValue: listOrders },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should delegate create to CreateOrder', async () => {
    const dto: CreateOrderDto = { customerId: 'customer_1', amount: 120 };
    const expected = {
      id: 'order_1',
      customerId: 'customer_1',
      amount: 120,
      status: 'created',
    };
    createOrder.execute.mockResolvedValue(expected);

    const result = await service.create(dto);

    expect(createOrder.execute).toHaveBeenCalledWith(dto);
    expect(result).toEqual(expected);
  });

  it('should delegate list to ListOrders', async () => {
    const expected = [
      {
        id: 'order_1',
        customerId: 'customer_1',
        amount: 120,
        status: 'created',
      },
    ];
    listOrders.execute.mockResolvedValue(expected);

    const result = await service.list();

    expect(listOrders.execute).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });
});
