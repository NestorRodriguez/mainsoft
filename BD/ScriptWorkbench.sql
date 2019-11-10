CREATE DATABASE mainsoft;
USE mainsoft;

-- -----------------------------------------------------
-- Table `mainsoft`.`registro_oferta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mainsoft`.`registro_oferta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_oferta` VARCHAR(40) NOT NULL,
  `descripcion_oferta` VARCHAR(800) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mainsoft`.`aplicar_oferta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mainsoft`.`aplicar_oferta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `registro_oferta_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aplicar_oferta_registro_oferta1_idx` (`registro_oferta_id` ASC),
  CONSTRAINT `fk_aplicar_oferta_registro_oferta1`
    FOREIGN KEY (`registro_oferta_id`)
    REFERENCES `mainsoft`.`registro_oferta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mainsoft`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mainsoft`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `documento` INT NOT NULL,
  `correo` VARCHAR(50) NOT NULL,
  `telefono` INT NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(600) NOT NULL,
  `carga_hv` VARCHAR(50) NOT NULL,
  `aplicar_oferta_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuarios_aplicar_oferta1_idx` (`aplicar_oferta_id` ASC),
  CONSTRAINT `fk_usuarios_aplicar_oferta1`
    FOREIGN KEY (`aplicar_oferta_id`)
    REFERENCES `mainsoft`.`aplicar_oferta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mainsoft`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mainsoft`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `codigo_rol` VARCHAR(45) NOT NULL,
  `nombre_rol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mainsoft`.`rol_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mainsoft`.`rol_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuarios_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_rol_usuario_usuarios1_idx` (`usuarios_id` ASC),
  INDEX `fk_rol_usuario_roles1_idx` (`roles_id` ASC),
  CONSTRAINT `fk_rol_usuario_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `mainsoft`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rol_usuario_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `mainsoft`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO `mainsoft`.`roles` (`codigo_rol`, `nombre_rol`) VALUES ('1', 'Administrador');
INSERT INTO `mainsoft`.`roles` (`codigo_rol`, `nombre_rol`) VALUES ('2', 'Usuario');

INSERT INTO `mainsoft`.`registro_oferta` (`nombre_oferta`, `descripcion_oferta`) VALUES ('Desarrollo senior Java', 'asdasdalsdalskdnalskdnalksndalskndalksdnalksndalskdnalskndasd');
INSERT INTO `mainsoft`.`registro_oferta` (`nombre_oferta`, `descripcion_oferta`) VALUES ('Desarrollo Junior en .Net', 'asdasdlaknsdlaksnbdlaksndlaksndalksd');

INSERT INTO `mainsoft`.`aplicar_oferta` (`registro_oferta_id`) VALUES ('2');

INSERT INTO `mainsoft`.`usuarios` (`nombre`, `documento`, `correo`, `telefono`, `contrasena`, `descripcion`, `carga_hv`, `aplicar_oferta_id`) VALUES ('Adela ', '12312312', 'asdas@gmail.com', '12312312', '123123sdas', 'asdlknakdjnaskdjnaksdjnaksjdnbaksdjbnaksjdbaskjdb', 'asdasdasdasd', '1');






