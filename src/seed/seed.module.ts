import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { PrismaService } from 'src/prisma.service';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService, PrismaService],
})
export class SeedModule {}
