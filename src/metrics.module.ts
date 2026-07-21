import { Module } from '@nestjs/common';
import { MetricController } from './metrics.controller';
import { collectDefaultMetrics } from 'prom-client';

@Module({
  controllers: [MetricController],
})
export class MetricsModule {
  constructor() {
    collectDefaultMetrics();
  }
}
