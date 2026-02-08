import { MoneyValueObject } from '../../shared/domain/value-objects/MoneyValueObject';
import { OrderId } from './value-objects/OrderId';

export type OrderStatus = 'created';

export interface CreateOrderEntityParams {
  id: OrderId;
  customerId: string;
  amount: MoneyValueObject;
}

export class Order {
  private constructor(
    private readonly _id: OrderId,
    private readonly _customerId: string,
    private readonly _amount: MoneyValueObject,
    private readonly _status: OrderStatus,
  ) {}

  static create(params: CreateOrderEntityParams): Order {
    const customerId = params.customerId.trim();
    if (customerId.length === 0) {
      throw new Error('customerId is required');
    }

    return new Order(params.id, customerId, params.amount, 'created');
  }

  get id(): OrderId {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get amount(): MoneyValueObject {
    return this._amount;
  }

  get status(): OrderStatus {
    return this._status;
  }
}
