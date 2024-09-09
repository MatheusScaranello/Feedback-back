CREATE DATABASE FEEDBACK;

CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    nota INT NOT NULL,
    observacao TEXT,
    data DATE NOT NULL
);

--Incert exemplo
INSERT INTO Usuario (nome, local, nota, observacao, data) VALUES ('Fulano', 'São Paulo', 5, 'Muito bom', '2021-01-01');