import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ObjectType()
export class Product {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => Float) price: number;

  @Field((type) => String)
  description: string;

  @Field((type) => String)
  image_url: String;

  @Field((type) => String)
  container_id: String;
}
