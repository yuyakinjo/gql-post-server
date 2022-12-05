import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => String, { description: 'name' })
  title: string;

  @Field(() => Int)
  views: number;

  @Field(() => Int)
  userId: number;

  @Field(() => User, { nullable: true })
  user?: User;
}
