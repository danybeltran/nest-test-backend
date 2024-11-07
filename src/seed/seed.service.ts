import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SeedService {
  constructor(private prisma: PrismaService) {}

  async regenerateSeed() {
    await this.prisma.user.deleteMany({});
    await this.prisma.container.deleteMany({});
    await this.prisma.catalog.deleteMany({});
    await this.prisma.product.deleteMany({});

    await this.getSeed();
  }

  async getSeed() {
    await this.prisma.user.create({
      data: {
        name: 'dany',
        resources: {
          createMany: {
            data: [
              {
                name: 'Product 1',
                image_url: '/product-image.png',
                description: 'My product 1 description',
                price: 1.5,
              },
              {
                name: 'Product 2',
                image_url: '/product-image.png',
                description: 'My product 2 description',
                price: 2,
              },
              {
                name: 'Product 3',
                image_url: '/product-image.png',
                description: 'My product 3 description',
                price: 1.24,
              },
              {
                name: 'Product 4',
                image_url: '/product-image.png',
                description: 'My product 4 description',
                price: 1.32,
              },
              {
                name: 'Product 5',
                image_url: '/product-image.png',
                description: 'My product 5 description',
                price: 16,
              },
            ],
          },
        },
      },
    });

    return {
      seed: true,
    };
  }
}
