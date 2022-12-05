import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../post/entities/post.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => Int)
  @Directive('@external')
  id: number;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
