import { InputType, PartialType, PickType } from '@nestjs/graphql';
import { CreateTodoInput } from './create-todo.input';

@InputType()
export class UpdateTodoInput extends PartialType(
  PickType(CreateTodoInput, ['title', 'description']),
) {}
