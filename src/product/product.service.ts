import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts() {
    return this.prisma.product.findMany({
      include: {
        Container: true,
      },
    });
  }

  async getProductsByUser(userId: string) {
    return await this.prisma.product.findMany({
      where: {
        userId,
      },
    });
  }
}
