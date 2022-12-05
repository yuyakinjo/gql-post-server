import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInput {
  @Field(() => String, { description: 'title' })
  title: string;

  @Field(() => Int, { description: 'views' })
  views: number;

  @Field(() => Int, { description: 'userId' })
  userId: number;
}
