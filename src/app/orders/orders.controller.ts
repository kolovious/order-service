import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderResponseDto } from './dto/order-response.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async list() {
    const items = await this.ordersService.list();
    return {
      items: items,
      total: items.length,
    };
  }

  @Post()
  async create(@Body() dto: CreateOrderDto): Promise<OrderResponseDto> {
    return this.ordersService.create(dto);
  }
}
