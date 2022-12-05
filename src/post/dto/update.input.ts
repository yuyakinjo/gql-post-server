import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreatePostInput } from './create.input';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => Int, { description: 'id' })
  id: number;
}
