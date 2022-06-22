import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly postsService: TodoService) {}

  @Query(() => [Todo], { description: 'todo一覧取得' })
  async todos() {
    return this.postsService.findAll();
  }

  @Query(() => Todo, { description: 'todo取得' })
  async todo(@Args('uuid') uuid: string) {
    return this.postsService.findOne(uuid);
  }

  @Mutation(() => Todo, { description: 'todo作成' })
  async createTodo(@Args('input') input: CreateTodoInput) {
    return this.postsService.create(input);
  }

  @Mutation(() => Todo, { description: 'todo更新' })
  async updateTodo(
    @Args('uuid') uuid: string,
    @Args('input') input: UpdateTodoInput,
  ) {
    return this.postsService.update(uuid, input);
  }

  @Mutation(() => Todo, { description: 'todo削除' })
  async deleteTodo(@Args('uuid') uuid: string) {
    return this.postsService.delete(uuid);
  }
}
