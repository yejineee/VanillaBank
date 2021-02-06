LOAD DATA LOCAL INFILE '/Users/yang-yejin/bcMembership/javascript-w5-accountbook/server/model/csv/category.csv'
INTO TABLE Category
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'  
LINES TERMINATED BY '\n'
IGNORE 1 LINES 
(title, is_deposit);
