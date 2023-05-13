/*
  Warnings:

  - You are about to drop the `favoritosfilme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `filmes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `favoritosfilme` DROP FOREIGN KEY `FavoritosFilme_id_favoritos_fkey`;

-- DropForeignKey
ALTER TABLE `favoritosfilme` DROP FOREIGN KEY `FavoritosFilme_id_filmes_fkey`;

-- DropTable
DROP TABLE `favoritosfilme`;

-- DropTable
DROP TABLE `filmes`;

-- CreateTable
CREATE TABLE `filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,

    UNIQUE INDEX `filme_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `filmes_favoritos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_filmes` INTEGER NOT NULL,
    `id_favoritos` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `filmes_favoritos` ADD CONSTRAINT `filmes_favoritos_id_filmes_fkey` FOREIGN KEY (`id_filmes`) REFERENCES `filme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `filmes_favoritos` ADD CONSTRAINT `filmes_favoritos_id_favoritos_fkey` FOREIGN KEY (`id_favoritos`) REFERENCES `favoritos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `favoritos` RENAME INDEX `Favoritos_titulo_key` TO `favoritos_titulo_key`;
