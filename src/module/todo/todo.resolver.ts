import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly postsService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  async findAll() {
    return this.postsService.findAll();
  }

  @Mutation(() => Todo)
  async createTodo(@Args('input') input: CreateTodoInput) {
    return this.postsService.create(input);
  }

  @Mutation(() => Todo)
  async updateTodo(@Args('input') input: UpdateTodoInput) {
    return this.postsService.update(input);
  }
}
