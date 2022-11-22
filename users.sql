-- DROP DATABASE IF EXISTS spotifyapp;

-- --create database
-- CREATE DATABASE spotifyapp;
\c spotifyapp;

DROP TABLE IF EXISTS users;
-- Create table

CREATE TABLE users(
    id VARCHAR PRIMARY KEY NOT NULL, 
    username VARCHAR NOT NULL
    );


SELECT * FROM users;
