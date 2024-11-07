import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private user: UserService) {}

  @Query(() => [User])
  async users() {
    return await this.user.getUsers();
  }
}
