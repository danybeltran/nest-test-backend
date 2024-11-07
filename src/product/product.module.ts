import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ProductService, ProductResolver, PrismaService], // Provide both here
})
export class ProductModule {}
