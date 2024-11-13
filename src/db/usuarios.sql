-- CREATE DATABASE feedback;

-- CREATE TABLE usuario (
--     id SERIAL PRIMARY KEY,
--     local VARCHAR(255) NOT NULL,
--     nota INT NOT NULL,
--     observacao TEXT,
--     data DATE NOT NULL
-- );

-- --Incert exemplo
-- INSERT INTO usuario (local, nota, observacao, data) VALUES ('Sao Paulo', 5, 'Muito bom', '2021-01-01');

-- CREATE OR REPLACE FUNCTION gerar_usuarios_aleatorios(num_usuarios INT) RETURNS VOID AS $$
-- DECLARE
--     i INT;
--     locais TEXT[] := ARRAY['Sao Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];
--     observacoes TEXT[] := ARRAY['Excelente servico!', 'A melhorar', 'Muito bom', 'Satisfeito', 'otima experiencia'];
-- BEGIN
--     FOR i IN 1..num_usuarios LOOP
--         INSERT INTO usuario (local, nota, observacao, data)
--         VALUES (
--             locais[ceil(random() * array_length(locais, 1))], -- Seleciona um local aleatório
--             (random() * 10)::INT, -- Gera uma nota aleatória entre 0 e 10
--             observacoes[ceil(random() * array_length(observacoes, 1))], -- Seleciona uma observação aleatória
--             CURRENT_DATE - (random() * 365)::INT -- Gera uma data aleatória dentro do último ano
--         );
--     END LOOP;
-- END;
-- $$ LANGUAGE plpgsql;

-- SELECT gerar_usuarios_aleatorios(100);

CREATE TABLE video (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    idVideo VARCHAR(255) NOT NULL
);

--adicione esse video https://youtu.be/xjtNp-RStOs?si=t3e4rohtXZIlDSCP
INSERT INTO video (url, idVideo) VALUES ('https://youtu.be/xjtNp-RStOs?si=t3e4rohtXZIlDSCP', 'xjtNp-RStOs');