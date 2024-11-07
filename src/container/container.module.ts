import { Module } from '@nestjs/common';
import { ContainerResolver } from './container.resolver';
import { ContainerService } from './container.service';
import { PrismaService } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';

@Module({
  providers: [
    ContainerService,
    ContainerResolver,
    PrismaService,
    ProductService,
  ], // Provide both here
})
export class ContainerModule {}
