#设置客户端连接服务器端的编码为utf8
SET NAMES UTF8;
DROP DATABASE IF EXISTS xz;
CREATE DATABASE xz CHARSET=UTF8;
USE xz;
CREATE TABLE user(
  uid INT,
  uname VARCHAR(12),
  upwd INT,
  email VARCHAR(24),
  phone INT,
  sex VARCHAR(1),
  userName VARCHAR(12),
  regTime VARCHAR(8),
  isOnline VARCHAR(1)
);
INSERT INTO user VALUES('1','doomfist','5','Talon@qq.com','321123','M','tiequan','20180101','Y');
INSERT INTO user VALUES('2','genji','4','ShimadaClan@163.com','123456','M','yuanshi','20180101','N');
INSERT INTO user VALUES('3','mccree','3','Ash@qq.com','999999','M','makelei','20180101','N');
INSERT INTO user VALUES('4','dva','2','dva@outlook.com','233333','F','DVA','20180101','Y');
INSERT INTO user VALUES('5','widowmaker','1','syr@qq.com','961014','F','wolaopo','19961014','Y');
SELECT * FROM user;
