import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateOneTodoArgs } from '../../@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { UpdateOneTodoArgs } from '../../@generated/prisma-nestjs-graphql/todo/update-one-todo.args';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly postsService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.postsService.findAll();
  }

  @Mutation(() => Todo)
  async createTodo(@Args() args: CreateOneTodoArgs) {
    return this.postsService.create(args);
  }

  @Mutation(() => Todo)
  async updateTodo(@Args() args: UpdateOneTodoArgs) {
    return this.postsService.update(args);
  }
}
