import { Query, Resolver } from '@nestjs/graphql';
import { Catalog } from './models/catalog.model';
import { CatalogService } from './catalog.service';

@Resolver(() => Catalog)
export class CatalogResolver {
  constructor(private catalog: CatalogService) {}

  @Query(() => [Catalog])
  async catalogs() {
    return await this.catalog.getCatalogs();
  }
}
