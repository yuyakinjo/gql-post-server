import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateInput } from './create.input';

@InputType()
export class UpdateInput extends PartialType(CreateInput) {
  @Field(() => Int, { description: 'id' })
  id: number;
}
