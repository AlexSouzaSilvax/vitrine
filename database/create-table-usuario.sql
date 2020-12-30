-- create database vitrine;
use vitrine;

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(1000) NOT NULL,
  `documento` varchar(100) NOT NULL,
  `imagem` varchar(9999) NOT NULL,
  `data_cadastro` date NOT NULL,
  `token` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
);

insert into usuario
(nome, email, senha, documento, imagem, data_cadastro, token) 
values
("Alex", "alexsouzasilvax@gmail.com", "123", "15325071785", "", "2020-12-29", "")
;

select * from usuario;
