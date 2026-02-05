import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly appService: HealthService) {}

  @Get("/health")
  getHealth(): { status: string } {
    // Entendiendo que esto es infraestructura, aqui deberiamos poder llamar a un command/query bus y no directamente a un servicio. Entiendo que
    // Esta es la estructura de nest, como si fuera laravel accediendo a eloquent desde el controller.
    return this.appService.getHealth();
  }
}
