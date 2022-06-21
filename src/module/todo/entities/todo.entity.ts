import { ObjectType, PickType } from '@nestjs/graphql';
import { Todo as TodoModel } from '../../../@generated/prisma-nestjs-graphql/todo/todo.model';

@ObjectType()
export class Todo extends PickType(TodoModel, [
  'id',
  'uuid',
  'title',
  'description',
  'createdAt',
  'updatedAt',
]) {}
