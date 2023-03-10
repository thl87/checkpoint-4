-- MySQL Script generated by MySQL Workbench

-- Wed Feb  1 12:04:07 2023

-- Model: New Model    Version: 1.0

-- MySQL Workbench Forward Engineering

-- -----------------------------------------------------

-- Schema checkpoint4

-- -----------------------------------------------------

DROP SCHEMA IF EXISTS `checkpoint4` ;

-- -----------------------------------------------------

-- Schema checkpoint4

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `checkpoint4` DEFAULT CHARACTER SET utf8;

USE `checkpoint4` ;

-- -----------------------------------------------------

-- Table `checkpoint4`.`zoo`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `checkpoint4`.`zoo` ;

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`zoo` (
        `idZoo` INT NOT NULL AUTO_INCREMENT,
        `nomZoo` VARCHAR(45) NOT NULL,
        `nbAnimaux` INT DEFAULT 0,
        PRIMARY KEY (`idZoo`)
    ) ENGINE = InnoDB;

INSERT INTO `zoo` (nomZoo) VALUES ('Zoo 1'), ('Zoo 2'), ('ZooZ');

-- -----------------------------------------------------

-- Table `checkpoint4`.`veterinaire`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `checkpoint4`.`veterinaire` ;

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`veterinaire` (
        `idVeterinaire` INT NOT NULL AUTO_INCREMENT,
        `nbAnimaux` INT NULL,
        PRIMARY KEY (`idVeterinaire`)
    ) ENGINE = InnoDB;

insert into veterinaire (nbAnimaux) values (0);

-- -----------------------------------------------------

-- Table `checkpoint4`.`Animal`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `checkpoint4`.`Animal` ;

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`Animal` (
        `idAnimaux` INT NOT NULL AUTO_INCREMENT,
        `nomAnimal` VARCHAR(45) NOT NULL,
        `typeAnimal` VARCHAR(45) NOT NULL,
        `ageAnimal` INT NOT NULL,
        `zoo_idZoo` INT NOT NULL,
        `veterinaire_idVeterinaire` INT NULL,
        PRIMARY KEY (`idAnimaux`),
        INDEX `fk_Animal_zoo_idx` (`zoo_idZoo` ASC) VISIBLE,
        INDEX `fk_Animal_veterinaire1_idx` (
            `veterinaire_idVeterinaire` ASC
        ) VISIBLE,
        CONSTRAINT `fk_Animal_zoo` FOREIGN KEY (`zoo_idZoo`) REFERENCES `checkpoint4`.`zoo` (`idZoo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Animal_veterinaire1` FOREIGN KEY (`veterinaire_idVeterinaire`) REFERENCES `checkpoint4`.`veterinaire` (`idVeterinaire`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

insert into
    animal (
        nomAnimal,
        typeAnimal,
        ageAnimal,
        zoo_idZoo
    )
values (
        'Jean-pascal',
        'Porc-??pic',
        10,
        1
    ), ('Patrick', 'Otarie', 12, 2), ('John', 'Singe', 7, 1), ('Pascaline', 'Singe', 5, 2), ('Odette', 'Tapir', 2, 1), ('Jeannot', 'Otarie', 12, 2), ('Antonin', 'Licorne', 120, 2);