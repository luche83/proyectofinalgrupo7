-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema raices_argentina
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema raices_argentina
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `raices_argentina` DEFAULT CHARACTER SET utf8mb4 ;
USE `raices_argentina` ;

-- -----------------------------------------------------
-- Table `raices_argentina`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`categories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`sections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`sections` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `price` INT(11) NOT NULL,
  `discount` INT(11) NULL DEFAULT 0,
  `description` TEXT NOT NULL,
  `amount` INT(11) NOT NULL,
  `amountmin` INT(11) NOT NULL,
  `categoryId` INT(11) NULL DEFAULT NULL,
  `sectionId` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deleteAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoryId` (`categoryId` ASC) VISIBLE,
  INDEX `sectionId` (`sectionId` ASC) VISIBLE,
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`categoryId`)
    REFERENCES `raices_argentina`.`categories` (`id`),
  CONSTRAINT `products_ibfk_2`
    FOREIGN KEY (`sectionId`)
    REFERENCES `raices_argentina`.`sections` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`images` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `file` VARCHAR(255) NULL DEFAULT NULL,
  `main` TINYINT(1) NULL DEFAULT NULL,
  `productId` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `deleteAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `productId` (`productId` ASC) VISIBLE,
  CONSTRAINT `images_ibfk_1`
    FOREIGN KEY (`productId`)
    REFERENCES `raices_argentina`.`products` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `surname` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `brithday` DATETIME NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `province` VARCHAR(255) NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `roleId` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `roleId` (`roleId` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`roleId`)
    REFERENCES `raices_argentina`.`roles` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`statuses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`statuses` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`orders` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `total` INT(11) NULL DEFAULT 0,
  `userId` INT(11) NULL DEFAULT NULL,
  `statusId` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `statusId` (`statusId` ASC) VISIBLE,
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `raices_argentina`.`users` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `orders_ibfk_2`
    FOREIGN KEY (`statusId`)
    REFERENCES `raices_argentina`.`statuses` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`items` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `quantity` INT(11) NULL DEFAULT 1,
  `orderId` INT(11) NULL DEFAULT NULL,
  `productId` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `orderId` (`orderId` ASC) VISIBLE,
  INDEX `productId` (`productId` ASC) VISIBLE,
  CONSTRAINT `items_ibfk_1`
    FOREIGN KEY (`orderId`)
    REFERENCES `raices_argentina`.`orders` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `items_ibfk_2`
    FOREIGN KEY (`productId`)
    REFERENCES `raices_argentina`.`products` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `raices_argentina`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`sequelizemeta` (
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
