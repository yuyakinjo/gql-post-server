import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'; // prettier-ignore
import { User } from 'src/user/entities/user.entity';
import { CreatePostInput } from './dto/create.input';
import { UpdatePostInput } from './dto/update.input';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createInput: CreatePostInput) {
    return this.postService.create(createInput);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updateInput: UpdatePostInput) {
    return this.postService.update(updateInput.id, updateInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }

  @ResolveField(() => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.userId };
  }
}
