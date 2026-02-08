export type OrderStatus = 'created';

export interface CreateOrderEntityParams {
  id: string;
  customerId: string;
  amount: number;
}

export class Order {
  private constructor(
    private readonly _id: string,
    private readonly _customerId: string,
    private readonly _amount: number,
    private readonly _status: OrderStatus,
  ) {}

  static create(params: CreateOrderEntityParams): Order {
    const customerId = params.customerId.trim();
    if (customerId.length === 0) {
      throw new Error('customerId is required');
    }

    if (params.amount <= 0) {
      throw new Error('amount must be greater than zero');
    }

    return new Order(params.id, customerId, params.amount, 'created');
  }

  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get amount(): number {
    return this._amount;
  }

  get status(): OrderStatus {
    return this._status;
  }
}
