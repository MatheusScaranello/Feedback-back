CREATE DATABASE FEEDBACK;

CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    local VARCHAR(255),
    nota INT,
    observacao TEXT,
    data DATE
);
