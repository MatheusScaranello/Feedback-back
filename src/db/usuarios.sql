CREATE DATABASE feedback;

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    local VARCHAR(255) NOT NULL,
    nota INT NOT NULL,
    observacao TEXT,
    data DATE NOT NULL
);

--Incert exemplo
INSERT INTO usuario (local, nota, observacao, data) VALUES ('São Paulo', 5, 'Muito bom', '2021-01-01');