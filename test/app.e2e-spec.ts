import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { useContainer } from 'class-validator';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    useContainer(app.select(AppModule), { fallbackOnErrors: true });
    await app.init();
  });

  it('/graphql (createTodo -> Todo)', async () => {
    let todo;
    await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
mutation {
  createTodo(
    input: { title: "新しいTODO", description: "新しいTODOの説明です" }
  ) {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}
        `,
      })
      .expect((res) => {
        todo = res.body.data.createTodo;
      })
      .then(() =>
        request(app.getHttpServer())
          .post('/graphql')
          .send({
            query: `
{
  todo(uuid: "${todo.uuid}") {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}
            `,
          })
          .expect((res) => {
            expect(res.body.data.todo).toEqual({
              createdAt: todo.createdAt,
              description: todo.description,
              id: todo.id,
              title: todo.title,
              updatedAt: todo.updatedAt,
              uuid: todo.uuid,
            });
          }),
      );
  });
});
