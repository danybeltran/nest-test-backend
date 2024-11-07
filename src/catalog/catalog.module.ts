import { Module } from '@nestjs/common';
import { CatalogResolver } from './catalog.resolver';
import { CatalogService } from './catalog.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CatalogService, CatalogResolver, PrismaService], // Provide both here
})
export class CatalogModule {}
