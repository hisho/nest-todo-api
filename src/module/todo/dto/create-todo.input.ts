import { InputType, PickType } from '@nestjs/graphql';
import { TodoCreateInput } from '../../../@generated/prisma-nestjs-graphql/todo/todo-create.input';

@InputType()
export class CreateTodoInput extends PickType(TodoCreateInput, [
  'title',
  'description',
]) {}
