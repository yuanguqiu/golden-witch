SET NAMES UTF8;
DROP DATABASE IF EXISTS zy;
CREATE DATABASE zy CHARSET=UTF8;
USE zy;
CREATE TABLE laptop_family (
  fid INT PRIMARY KEY,
  fname VARCHAR(10),
  laptopCount SMALLINT
);
CREATE TABLE laptop(
  lid INT,
  title VARCHAR(15),
  price DECIMAL(8,2),
  spec VARCHAR(10),
  detail VARCHAR(20),
  shelfTime DATE,
  isOnline BOOL,
  familyId TINYINT
);
INSERT INTO laptop_family VALUES('20','戴尔','3');
INSERT INTO laptop_family VALUES('30','小米','2');
INSERT INTO laptop_family VALUES('10','联想','2');
INSERT INTO laptop VALUES('264','暗影精灵','4999',NULL,NULL,'2019-4-1',1,'7');
UPDATE laptop_family SET laptopCount = 1 WHERE fid = 30;