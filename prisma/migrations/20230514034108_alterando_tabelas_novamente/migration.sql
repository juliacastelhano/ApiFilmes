/*
  Warnings:

  - You are about to drop the column `favoritosId` on the `filmes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `filmes` DROP FOREIGN KEY `Filmes_favoritosId_fkey`;

-- AlterTable
ALTER TABLE `favoritos` ADD COLUMN `filmesId` INTEGER NULL;

-- AlterTable
ALTER TABLE `filmes` DROP COLUMN `favoritosId`;

-- AddForeignKey
ALTER TABLE `Favoritos` ADD CONSTRAINT `Favoritos_filmesId_fkey` FOREIGN KEY (`filmesId`) REFERENCES `Filmes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
