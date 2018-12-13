#Project 
members management system 

#Mysql Databse:
CREATE DATABASE `mms` DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
CREATE USER 'mms'@'localhost' IDENTIFIED BY 'mms@123';
GRANT ALL PRIVILEGES ON *.* TO 'mms'@'localhost' WITH GRANT OPTION;
flush privileges;