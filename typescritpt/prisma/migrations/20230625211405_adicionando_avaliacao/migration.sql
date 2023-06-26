-- CreateTable
CREATE TABLE `Filmes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `estrelas` INTEGER NOT NULL,

    UNIQUE INDEX `Filmes_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Favoritos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `filmesId` INTEGER NULL,

    UNIQUE INDEX `Favoritos_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Favoritos` ADD CONSTRAINT `Favoritos_filmesId_fkey` FOREIGN KEY (`filmesId`) REFERENCES `Filmes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
