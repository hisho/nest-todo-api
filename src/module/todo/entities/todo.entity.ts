import { ObjectType, PickType } from '@nestjs/graphql';
import { Todo as Todos } from '../../../@generated/prisma-nestjs-graphql/todo/todo.model';

@ObjectType()
export class Todo extends PickType(Todos, [
  'id',
  'uid',
  'title',
  'description',
  'createdAt',
  'updatedAt',
]) {}
