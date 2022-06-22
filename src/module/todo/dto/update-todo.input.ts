import { InputType, PartialType, PickType } from '@nestjs/graphql';
import { TodoCreateInput } from '../../../@generated/prisma-nestjs-graphql/todo/todo-create.input';

@InputType()
export class UpdateTodoInput extends PartialType(
  PickType(TodoCreateInput, ['title', 'description']),
) {}
