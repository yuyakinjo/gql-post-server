import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { PostService } from 'src/post/post.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] {
    return this.postService.findFromUserId(user.id);
  }
}
