export interface CreateOrderCommand {
  customerId: string;
  amount: number;
}

export interface CreateOrderResult {
  id: string;
  customerId: string;
  amount: number;
  status: string;
}

export class CreateOrder {
  execute(command: CreateOrderCommand): CreateOrderResult {
    return {
      id: 'order_1',
      customerId: command.customerId,
      amount: command.amount,
      status: 'created',
    };
  }
}
