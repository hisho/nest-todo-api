import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field(() => Int)
  id: number;
}
