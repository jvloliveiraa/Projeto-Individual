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
    fkUsuario int,
    primary key (idPontuacao, fkUsuario),
    foreign key (fkUsuario) references usuario(idUsuario)
);

select * from usuario;