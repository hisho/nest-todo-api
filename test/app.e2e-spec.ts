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

  it('/graphql (Todos)', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
{
  todo(uuid: "b87c9dee-9d61-40d3-9591-f99fc4f7ec56") {
    createdAt
    description
    id
    title
    updatedAt
    uuid
  }
}
`,
        variables: {
          uuid: 'b87c9dee-9d61-40d3-9591-f99fc4f7ec56',
        },
      });
    expect(response.ok).toBeTruthy();
    expect(response.body.data.errors).toBeUndefined();
    expect(response.body.data.todo).toHaveProperty('uuid');
    expect(response.body.data.todo).toHaveProperty('id');
    expect(response.body.data.todo).toHaveProperty('title');
    expect(response.body.data.todo).toHaveProperty('description');
    expect(response.body.data.todo).toHaveProperty('createdAt');
    expect(response.body.data.todo).toHaveProperty('updatedAt');
  });
});
