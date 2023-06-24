/*
  Warnings:

  - You are about to drop the column `filmesId` on the `favoritos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `favoritos` DROP FOREIGN KEY `Favoritos_filmesId_fkey`;

-- AlterTable
ALTER TABLE `favoritos` DROP COLUMN `filmesId`;

-- AlterTable
ALTER TABLE `filmes` ADD COLUMN `favoritosId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Filmes` ADD CONSTRAINT `Filmes_favoritosId_fkey` FOREIGN KEY (`favoritosId`) REFERENCES `Favoritos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
