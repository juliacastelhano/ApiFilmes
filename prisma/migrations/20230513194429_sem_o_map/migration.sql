/*
  Warnings:

  - You are about to drop the `filme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `filmes_favoritos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `filmes_favoritos` DROP FOREIGN KEY `filmes_favoritos_id_favoritos_fkey`;

-- DropForeignKey
ALTER TABLE `filmes_favoritos` DROP FOREIGN KEY `filmes_favoritos_id_filmes_fkey`;

-- DropTable
DROP TABLE `filme`;

-- DropTable
DROP TABLE `filmes_favoritos`;

-- CreateTable
CREATE TABLE `Filmes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,

    UNIQUE INDEX `Filmes_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FavoritosFilme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_filmes` INTEGER NOT NULL,
    `id_favoritos` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FavoritosFilme` ADD CONSTRAINT `FavoritosFilme_id_filmes_fkey` FOREIGN KEY (`id_filmes`) REFERENCES `Filmes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FavoritosFilme` ADD CONSTRAINT `FavoritosFilme_id_favoritos_fkey` FOREIGN KEY (`id_favoritos`) REFERENCES `Favoritos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `favoritos` RENAME INDEX `favoritos_titulo_key` TO `Favoritos_titulo_key`;
