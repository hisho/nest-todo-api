import { InputType, PickType } from '@nestjs/graphql';
import { TodoCreateInput } from '../../../@generated/prisma-nestjs-graphql/todo/todo-create.input';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTodoInput extends PickType(TodoCreateInput, [
  'title',
  'description',
]) {
  @IsNotEmpty()
  title!: string;

  description?: string;
}
