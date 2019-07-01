SET NAMES UTF8;
DROP DATABASE IF EXISTS xz;
CREATE DATABASE xz CHARSET=UTF8;
USE xz;
CREATE TABLE laptop(
  lid INT PRIMARY KEY,
  title VARCHAR(100),
  price DECIMAL(7,2),
  stockCount SMALLINT,
  shelfTime DATE,
  isIndex BOOL
);
INSERT INTO laptop VALUES ('0065489','海猫鸣泣之时','333.24','21','2018-01-1',0),
('0012548','奇异人生','50.2','500','2002-04-1',1),
('005468','茕茕孑立','30','40','2019-5-1',0)
;
