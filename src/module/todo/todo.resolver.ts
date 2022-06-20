import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly postsService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.postsService.findAll();
  }

  @Mutation(() => Todo)
  async create(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.postsService.create(createTodoInput);
  }
}
