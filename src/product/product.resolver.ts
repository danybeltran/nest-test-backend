import { Query, Resolver } from '@nestjs/graphql';
import { Product } from './models/product.model';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private product: ProductService) {}

  @Query(() => [Product])
  async products() {
    return await this.product.getProducts();
  }
}
