import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContainerService {
  constructor(private readonly prisma: PrismaService) {}

  async getContainers() {
    return this.prisma.container.findMany({
      include: {
        Catalog: true,
        resources: true,
      },
    });
  }

  async createWithProducts({
    userId,
    productList,
  }: {
    userId: string;
    productList: Product[];
  }) {
    const existingPersonalizationContainer =
      await this.prisma.container.findFirst({
        where: {
          user_id: userId,
        },
        include: {
          resources: true,
        },
      });

    if (existingPersonalizationContainer)
      return existingPersonalizationContainer;

    return await this.prisma.container.create({
      data: {
        user_id: userId,
        name: 'Unnamed container',
        resources: {
          connect: productList.map((p) => ({ id: p.id })),
        },
      },
    });
  }
}
