#丢弃指定的数据库abc，若存在的话
DROP DATABASE IF EXISTS abc;
#创建新的数据库abc
CREATE DATABASE abc;
#进入数据库abc
USE abc;
#创建保存学生数据的表student,包含学号，姓名，性别，分数
CREATE TABLE student(
  sid INT,#存储内容一般为数字整型
  name VARCHAR(8),#variable character可变字符，且必须手动指定大小
  sex VARCHAR(1),#M表示男 F表示女
  score INT#明天才讲
);
#插入数据，上面有几列，括号内就有几个值
INSERT INTO student VALUES ('1','TOM','M','87');
INSERT INTO student 
  VALUES ('2','JERRY','F','92'),
         ('3','mike','M','88');
UPDATE student SET sex = 'F' WHERE score = '87';
DELETE FROM student WHERE sid = '3';
#查询数据（*表示所有列）
SELECT * FROM student;
