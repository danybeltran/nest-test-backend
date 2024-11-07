import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/product/models/product.model';

@ObjectType()
export class User {
  @Field((type) => String)
  id: string;
  @Field((type) => String)
  name: string;
  @Field((type) => [Product])
  resources: Product[];
}
