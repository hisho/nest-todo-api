import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.todo.findMany();
  }

  async create(input: CreateTodoInput) {
    const { title, description } = input;

    return this.prisma.todo.create({
      data: {
        title,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async update(input: UpdateTodoInput) {
    const { uuid, title, description } = input;

    return this.prisma.todo.update({
      where: {
        uuid,
      },
      data: {
        title,
        description,
        updatedAt: new Date(),
      },
    });
  }

  async delete(uuid: string) {
    return this.prisma.todo.delete({
      where: {
        uuid,
      },
    });
  }
}
