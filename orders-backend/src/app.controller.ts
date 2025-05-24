import { Controller, Get } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';
import { Public } from './auth/public.decorator';

@Controller()
export class AppController {
  constructor(
    @InjectMetric('http_requests_total') private readonly counter: Counter<string>,
  ) {}

  @Public()
  @Get('metrics')
  getHello(): string {
    this.counter.inc();
    return 'Metrics endpoint hit!';
  }
}
