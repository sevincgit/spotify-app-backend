-- DROP DATABASE IF EXISTS spotifyapp;
 -- --create database
-- CREATE DATABASE spotifyapp;
\c spotifyapp;


DROP TABLE IF EXISTS playlists;

-- Create table

CREATE TABLE playlists(id VARCHAR PRIMARY KEY NOT NULL,
                                              mintempo NUMERIC NOT NULL,
                                                               maxtempo NUMERIC NOT NULL,
                                                                                minpopularity NUMERIC NOT NULL,
                                                                                                      maxpopularity NUMERIC NOT NULL,
                                                                                                                            minenergy NUMERIC NOT NULL,
                                                                                                                                              maxenergy NUMERIC NOT NULL,
                                                                                                                                                                mindanceability NUMERIC NOT NULL,
                                                                                                                                                                                        maxdanceability NUMERIC NOT NULL,
                                                                                                                                                                                                                seed_genres VARCHAR (50) NOT NULL,
                                                                                                                                                                                                                                         userid VARCHAR NOT NULL,
                                                                                                                                                                                                                                                        CONSTRAINT fk_user
                       FOREIGN KEY(userid) REFERENCES users(id));


SELECT *
FROM playlists;