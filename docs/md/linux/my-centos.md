---
category: Linux
title: 我的 Centos
tag: [Linux, Centos]
---
# 我的 Centos

## 更改 ssh 端口

> vim /etc/ssh/sshd_config

```shell
# 远程 ssh 登录的端口号
Port 123
# 每隔30秒向客户端发一个心跳数据
ClientAliveInterval 30
# 2880 次没有相应，服务器自动断掉连接
ClientAliveCountMax 2880
```
> systemctl restart sshd

打开防火墙 对应的端口号  
然后 就可以登录了  
ssh root@124.220.175.77 -p 123

## 装个Java
```
yum install -y java-1.8.0-openjdk
```