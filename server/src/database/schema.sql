CREATE TABLE user 
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(100),
  password VARCHAR(255),
  is_admin TINYINT DEFAULT 0
);

CREATE TABLE rick_character 
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  image VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL,
  gender VARCHAR(20) NOT NULL
);

INSERT INTO rick_character (name, image, status, gender) VALUES
("Morty Smith", "https://rickandmortyapi.com/api/character/avatar/2.jpeg", "Alive", "Male"),
("Rick Sanchez", "https://rickandmortyapi.com/api/character/avatar/1.jpeg", "Alive", "Male");