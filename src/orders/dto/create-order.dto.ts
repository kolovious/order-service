// src/orders/dto/createOrder.dto.ts
import { IsString, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  customerId: string;

  @IsNumber()
  @Min(1)
  amount: number;
}
