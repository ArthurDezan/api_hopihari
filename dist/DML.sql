INSERT INTO users (first_name, last_name, email, password, birth_date, phone) VALUES
('Arthur', 'Dezan', 'apdeza78@gmail.com', '1234', '2008-09-10', '14996801009'),
('Marques', 'Batman', 'batman@gmail.com', 'abcd', '2010-03-25', '14991234567'),
('Carlos', 'Lima', 'carloslima@gmail.com', 'senha123', '2009-07-18', '14992345678');

INSERT INTO rides (nome, tempo_espera, status, area) VALUES
('Montanha Russa', 20, 'movimentado', 'A'),
('Roda Gigante', 15, 'pouco movimentado', 'B'),
('Carrossel', 10, 'muito movimentado', 'C');

INSERT INTO `lines` (users_id, atracoes_id) VALUES
(7, 8),
(7, 9),

(8, 10),
(8, 8),

(9, 9),
(9, 10);


SELECT 
    users.id AS usuario_id,
    CONCAT(users.first_name, ' ', users.last_name) AS nome_usuario,
    rides.id AS brinquedo_id,
    rides.nome AS nome_brinquedo
FROM hopi_hari_db.lines 
JOIN users ON `lines`.users_id = users.id
JOIN rides ON `lines`.atracoes_id = rides.id