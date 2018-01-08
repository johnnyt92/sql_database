CREATE DATABASE products;

USE products;

CREATE TABLE productlist (
ID INTEGER NOT NULL,
 product_name VARCHAR(100), 
 product_category VARCHAR(100),
 stock_quantity INTEGER(5),
 unit_price DECIMAL(10, 2),
 PRIMARY KEY (ID)
)
SELECT * FROM productlist;

UPDATE productlist
SET ID = 1
WHERE ID = 0
