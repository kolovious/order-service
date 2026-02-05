import { Module } from '@nestjs/common';
import { HealthModule } from './health.module';
import { OrdersModule } from './orders.module';

@Module({
  imports: [HealthModule, OrdersModule],
})
export class AppModule {}
