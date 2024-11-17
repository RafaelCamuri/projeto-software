CREATE DATABASE projeto_software;

USE projeto_software;

# Primeira Funcionalidade
CREATE TABLE funcionarios (
    nome VARCHAR(100),
    cargo VARCHAR(100),
    salario DECIMAL(10, 2)
);

SELECT * FROM funcionarios;

# Segunda Funcionalidade
CREATE TABLE departamentos (
    nome VARCHAR(100)
);

SELECT * FROM departamentos;

# Terceira Funcionalidade
CREATE TABLE projetos (
    nome VARCHAR(100),
    descricao TEXT
);

SELECT * FROM projetos;

# Quarta Funcionalidade - a desenvolver
CREATE TABLE equipes (
    nome VARCHAR(100)
);
