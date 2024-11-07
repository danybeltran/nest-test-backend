import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PrismaService } from './prisma.service';
import { CatalogModule } from './catalog/catalog.module';
import { ContainerModule } from './container/container.module';
import { join } from 'path';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';

@Module({
  providers: [PrismaService], // Remove CatalogService from here
  imports: [
    SeedModule, // Just for seed
    CatalogModule,
    ContainerModule,
    ProductModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [ProductModule, CatalogModule, ContainerModule, UserModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
