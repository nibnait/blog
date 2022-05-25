---
category: 各种教程
title: mysql 密码忘了
tag: [tutorial, mysql]
---
# mysql 密码忘了

```shell
vim /etc/my.cnf
skip-grant-tables

/etc/init.d/mysqld restart

mysql -u root

use mysql;
update user set password = password('root') where user = 'root';
flush privileges;
exit

/etc/init.d/mysqld restart

vim /etc/my.cnf
删掉 skip-grant-tables

```

远程登录 云服务器 上的 mysql

```shell

use mysql;
update host='本地ip',password='copy 下 localhost 用户的密码' where host='vm-centos-xxx' and user='root';

```