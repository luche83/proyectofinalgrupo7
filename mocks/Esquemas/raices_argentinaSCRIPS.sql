-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema raices_argentina
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema raices_argentina
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `raices_argentina` DEFAULT CHARACTER SET utf8 ;
USE `raices_argentina` ;

-- -----------------------------------------------------
-- Table `raices_argentina`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `image` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `raices_argentina`.`regions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`regions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NOT NULL,
  `image` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `raices_argentina`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `discount` INT NULL DEFAULT 0,
  `description` VARCHAR(500) NOT NULL,
  `amount` INT NOT NULL,
  `amountmin` INT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `categories_id` INT NOT NULL,
  `regions_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_categories_idx` (`categories_id` ASC) ,
  INDEX `fk_products_regions_idx` (`regions_id` ASC) ,
  CONSTRAINT `fk_products_categories`
    FOREIGN KEY (`categories_id`)
    REFERENCES `raices_argentina`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_regions`
    FOREIGN KEY (`regions_id`)
    REFERENCES `raices_argentina`.`regions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `raices_argentina`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(200) NULL,
  `product_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_images_products_idx` (`product_id` ASC) ,
  CONSTRAINT `fk_images_products`
    FOREIGN KEY (`product_id`)
    REFERENCES `raices_argentina`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `raices_argentina`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `raices_argentina`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `surname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `birthday` DATE NULL,
  `address` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `province` VARCHAR(255) NULL,
  `image` VARCHAR(45) NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_roles_idx` (`role_id` ASC) ,
  CONSTRAINT `fk_users_roles`
    FOREIGN KEY (`role_id`)
    REFERENCES `raices_argentina`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `raices_argentina`.`statusses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`statusses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `raices_argentina`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `total` INT NOT NULL,
  `status_id` INT NULL,
  `users_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_orders_statusses_idx` (`status_id` ASC),
  INDEX `fk_orders_users_idx` (`users_id` ASC),
  CONSTRAINT `fk_orders_statusses`
    FOREIGN KEY (`status_id`)
    REFERENCES `raices_argentina`.`statusses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `raices_argentina`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `raices_argentina`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raices_argentina`.`items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL DEFAULT 1,
  `product_id` INT NOT NULL,
  `order_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_items_products_idx` (`product_id` ASC),
  INDEX `fk_items_orders_idx` (`order_id` ASC),
  CONSTRAINT `fk_items_products`
    FOREIGN KEY (`product_id`)
    REFERENCES `raices_argentina`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_items_orders`
    FOREIGN KEY (`order_id`)
    REFERENCES `raices_argentina`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
