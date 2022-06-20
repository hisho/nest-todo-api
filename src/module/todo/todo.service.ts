import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.todo.findMany();
  }

  async create(args: { data: Prisma.TodoCreateInput }) {
    const { data } = args;

    return this.prisma.todo.create({
      data,
    });
  }
}