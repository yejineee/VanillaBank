LOAD DATA LOCAL INFILE '/Users/yang-yejin/bcMembership/javascript-w5-accountbook/server/model/csv/method.csv'
INTO TABLE Method
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'  
LINES TERMINATED BY '\n'
IGNORE 1 LINES 
(title, UserId);
