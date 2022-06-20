import { PrismaClient, Todo } from '@prisma/client';
import { v4 } from 'uuid';
const prisma = new PrismaClient();

/**
 * モデル投入用のデータ定義
 * @see https://www.prisma.io/docs/guides/database/seed-database
 */
const todoData: Todo[] = [
  {
    id: 1,
    uid: v4(),
    title: '初めてのTODO',
    description: '初めてのTODOを作成する',
    createdAt: new Date('2022-01-01T00:00:00+09:00'),
    updatedAt: new Date('2022-01-01T00:00:00+09:00'),
  },
];

const doSeed = async () => {
  const todos = [];
  for (const data of todoData) {
    const createPosts = prisma.todo.create({
      data,
    });
    todos.push(createPosts);
  }
  return await prisma.$transaction(todos);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await doSeed();

  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
