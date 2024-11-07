import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private seed: SeedService) {}

  @Get()
  async getSeed() {
    return this.seed.getSeed();
  }

  @Get('regenerate')
  async regenerateSeed() {
    await this.seed.regenerateSeed();
    return {};
  }
}
