CREATE DATABASE BIBLIOTECA;

USE BIBLIOTECA;

CREATE TABLE socio(
    id INT NOT NULL PRIMARY KEY,
    apellido VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE socio_telefono (
  id INT NOT NULL AUTO_INCREMENT,
  telefono VARCHAR(50) NOT NULL, 
  id_socio INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_socio) REFERENCES socio(id)
);

INSERT INTO socio (id, apellido, nombre, direccion) VALUES (01, 'Gonzalez', 'Juan', 'Av. Siempreviva 742');

SELECT * FROM socio;

INSERT INTO socio VALUES 
(DEFAULT, 'Perez', 'Maria', 'Av. Siempreviva 742'),
(DEFAULT, 'Gomez', 'Pedro', 'Av. Siempreviva 742'),
(DEFAULT, 'Rodriguez', 'Jose', 'Av. Siempreviva 742');



UPDATE socio 
SET direccion = 'Av. Siempreviva 742, Springfield'
WHERE id = 1;

