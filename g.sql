CREATE TABLE conversations (
  id INT PRIMARY KEY,
  message TEXT,
  user VARCHAR(50)
);

CREATE TABLE users (
  id INT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(255)
);