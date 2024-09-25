-- drop the database if it exists
DROP DATABASE IF EXISTS crudnodejsmysql;
-- creating the database
CREATE DATABASE crudnodejsmysql;

-- using the database
USE crudnodejsmysql;

-- creating a table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- to show all tables
SHOW TABLES;

-- to describe the table
DESCRIBE customer;