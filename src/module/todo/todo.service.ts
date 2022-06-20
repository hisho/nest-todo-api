import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.todo.findMany();
  }

  async create(createTodoInput: CreateTodoInput) {
    return this.prisma.todo.create({
      data: {
        ...createTodoInput,
      },
    });
  }
}
