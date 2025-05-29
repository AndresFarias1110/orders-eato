import { Controller } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Controller()
export class AppController {
  constructor(
    @InjectMetric('http_requests_total') private readonly counter: Counter<string>,
  ) {}

}
