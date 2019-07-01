SET NAMES UTF8;
DROP DATABASE IF EXISTS sina;
CREATE DATABASE sina CHARSET=UTF8;
USE sina;
CREATE TABLE news(
  nid INT,
  title VARCHAR(12),
  ctime VARCHAR(10),
  content VARCHAR(20),
  author VARCHAR(10),
  origin VARCHAR(15)
);
INSERT INTO news VALUES('1','海猫鸣泣之时','2011-1-1','六轩岛10月4日、5日无人生还','龙骑士07','轻小说文库'),
  ('2','寒蝉鸣泣之时','2007-1-1','雏见泽症候群','龙骑士08','轻小说文库'),
  ('3','海猫鸣泣之时解','2012-2-1','六轩岛10月4日、5日无人生还','龙骑士07','轻小说文库');
UPDATE news SET author = '龙骑士07' WHERE nid = '2';
DELETE FROM news WHERE nid = '3';
SELECT * FROM news;