import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => String, { description: 'name' })
  title: string;

  @Field(() => Int, { description: 'views' })
  views: number;

  @Field(() => Int, { description: 'userId' })
  userId: number;
}
