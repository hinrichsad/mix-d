DROP DATABASE IF EXISTS drink_list;

CREATE DATABASE drink_list;
USE drink_list;

-- Create the table drinks.
CREATE TABLE drinks (
  id int AUTO_INCREMENT,
  drink_name varchar(30) NOT NULL,
  drink_type varchar(30) NOT NULL,
  instruction varchar(120) NOT NULL,
  ingredients varchar(240) NOT NULL,

  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO drinks (drink_name, drink_type, instruction, ingredients) VALUES (drinkres[0],drinkres[1],drinkres[2],drinkres[3]);