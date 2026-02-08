export interface OrderListItem {
  id: string;
  customerId: string;
  amount: number;
  status: string;
}

export class ListOrders {
  execute(): OrderListItem[] {
    return [];
  }
}
