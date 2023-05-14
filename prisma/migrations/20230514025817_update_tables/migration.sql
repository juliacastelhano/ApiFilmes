/*
  Warnings:

  - You are about to drop the `favoritosfilme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `favoritosfilme` DROP FOREIGN KEY `FavoritosFilme_id_favoritos_fkey`;

-- DropForeignKey
ALTER TABLE `favoritosfilme` DROP FOREIGN KEY `FavoritosFilme_id_filmes_fkey`;

-- AlterTable
ALTER TABLE `favoritos` ADD COLUMN `filmesId` INTEGER NULL;

-- DropTable
DROP TABLE `favoritosfilme`;

-- AddForeignKey
ALTER TABLE `Favoritos` ADD CONSTRAINT `Favoritos_filmesId_fkey` FOREIGN KEY (`filmesId`) REFERENCES `Filmes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
