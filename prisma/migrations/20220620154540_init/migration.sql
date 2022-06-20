/*
  Warnings:

  - You are about to drop the column `uid` on the `todos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uuid]` on the table `todos` will be added. If there are existing duplicate values, this will fail.
  - The required column `uuid` was added to the `todos` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX `todos_uid_key` ON `todos`;

-- AlterTable
ALTER TABLE `todos` DROP COLUMN `uid`,
    ADD COLUMN `uuid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `todos_uuid_key` ON `todos`(`uuid`);
