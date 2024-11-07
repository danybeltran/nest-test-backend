import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CatalogService {
  constructor(private readonly prisma: PrismaService) {}

  async getCatalogs() {
    return this.prisma.catalog.findMany({
      include: {
        containers: true,
      },
    });
  }
}
