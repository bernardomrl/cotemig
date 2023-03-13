create database devweb_projeto_02;

use devweb_projeto_02;

create table operacoes (
    id int unsigned not null auto_increment,
    numero1 int,
    operacoes varchar(1),
    numero2 int,
    resultado float,
    primary key (id)
);