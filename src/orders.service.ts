import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  getOrdersMessage(): string {
    return 'hola Orders';
  }
}
