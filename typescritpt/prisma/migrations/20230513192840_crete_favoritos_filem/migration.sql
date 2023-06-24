-- CreateTable
CREATE TABLE `Favoritos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Favoritos_titulo_key`(`titulo`),
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
