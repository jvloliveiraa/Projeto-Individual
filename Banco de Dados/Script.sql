create database ResidentEvil;
use ResidentEvil;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(90),
    apelido varchar(45),
    dtNasc date,
    email varchar(90) unique,
    senha varchar(45)
);

create table pontuacao(
	idPontuacao int auto_increment,
    qtdPontos int,
    fkUsuario int unique,
    primary key (idPontuacao, fkUsuario),
    foreign key (fkUsuario) references usuario(idUsuario)
);

insert into usuario (nome, apelido, dtNasc, email, senha) values
('João', 'Sapinho', '1998-05-28', 'jvl.oliveiraa@gmail.com', 'sapinho'),
('Mariana', 'Sapinha', '1999-04-13', 'mariana.pimentel.mpc@gmail.com', 'sapinha'),
('Maria', 'Mary', '1991-09-14', 'mary.hellen.mh@gmail.com', 'mary5628'),
('Lucas', 'Luqueta', '2000-05-16', 'lucas.bronze@gmail.com', 'jurupinga'),
('Jonas', 'Juneta', '1995-06-02', 'jonas.junior@gmail.com', 'whisky'),
('Davi', 'Davizinho', '1995-06-13', 'davizinho@gmail.com', 'vinho'),
('Juliana', 'Juhtop', '1998-07-26', 'juliana.luxsup@gmail.com', 'tequila'),
('Alysson', 'Mascote', '2000-10-04', 'alysson@gmail.com', 'mascote'),
('Dalva', 'Estrela', '1970-02-28', 'maria.dalva@gmail.com', 'estrela'),
('Arthur', 'Morgan', '1950-03-12', 'arthur@gmail.com', 'carpeada');

insert into pontuacao (qtdPontos, fkUsuario) values
(40, 1),
(30, 2),
(0, 3),
(5, 4),
(8, 5),
(20, 6),
(3, 7),
(23, 8),
(55, 9),
(16, 10);

select * from usuario;
select * from pontuacao;
select nome, qtdPontos from usuario join pontuacao on fkUsuario = idUsuario;