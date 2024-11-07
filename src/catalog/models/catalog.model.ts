import { Field, ObjectType } from '@nestjs/graphql';
import { Container } from 'src/container/models/container.model';

@ObjectType()
export class Catalog {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => [Container])
  containers: Container[];
}
