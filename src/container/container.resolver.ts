import { Args, Query, Resolver } from '@nestjs/graphql';
import { Container } from './models/container.model';
import { ContainerService } from './container.service';
import { ProductService } from 'src/product/product.service';
import { Product } from 'src/product/models/product.model';
import { Catalog } from 'src/catalog/models/catalog.model';

@Resolver(() => Container)
export class ContainerResolver {
  constructor(
    private container: ContainerService,
    private product: ProductService,
  ) {}

  @Query(() => [Container])
  async containers() {
    return await this.container.getContainers();
  }

  @Query(() => Container)
  async personalization(
    @Args({ name: 'userId', type: () => String }) userId: string,
  ) {
    const userProducts = await this.product.getProductsByUser(userId);

    const newContainer = await this.container.createWithProducts({
      userId,
      productList: userProducts,
    });

    return newContainer;
  }
}
