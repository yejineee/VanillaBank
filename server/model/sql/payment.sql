LOAD DATA LOCAL INFILE '/Users/yang-yejin/VanillaBank/server/model/csv/payment.csv'
INTO TABLE Payment
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'  
LINES TERMINATED BY '\n'
IGNORE 1 LINES 
(date,content,price,UserId,CategoryId,MethodId);
