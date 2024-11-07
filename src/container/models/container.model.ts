import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/product/models/product.model';

@ObjectType()
export class Container {
  @Field((type) => String)
  id: string;
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  user_id: string;
  // Ids of related products

  @Field((type) => [Product])
  resources: Product[];
}
