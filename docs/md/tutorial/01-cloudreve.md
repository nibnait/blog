---
category: 各种教程
title: 使用 cloudreve 搭建个人网盘
tag: [tutorial, cloudreve]
---
# 使用 cloudreve 搭建个人网盘

## 先看下云服务器内核
> arch  

x86_64：代表 amd64  
aarch64：代表 arm64

下载地址: [https://github.com/cloudreve/Cloudreve/releases](https://github.com/cloudreve/Cloudreve/releases)

下载到本地后，先把 gz 压缩包解压了。然后把文件传到服务器上
> cd Downloads
> scp -P 123 -r cloudreve root@124.220.175.77:/www/wwwroot/cloudreve/cloudreve

## 安装
登录到云服务器
> cd /www/wwwroot
> chmod +x ./cloudreve 
> ./cloudreve

## 开放 5212 端口
用安装后 自动生成的账号密码 试用一下。

## 反向代理
网站 -> 先添加个站点 pan.tianbin.cc
再添加个反向代理 代理到 124.220.175.77:5212

## 将 cloudreve 变成图床
右上角 头像 -> 控制面板 -> 左边 存储策略 -> 右边 铅笔 图标 -> 专家模式编辑 -> 允许获取外链 -> 是。  
后面分享图片，允许预览。即可拿到图片链接

控制面板 -> 参数设置 -> 站点信息 -> 站点URL: https://pan.tianbin.cc

## 将 sqlite 替换成 mysql 
 - 软件商店 -> mysql 5.5.62, phpMyAdmin 5.0, php-7.4
 - 数据库 -> 添加数据库。
 - 文件 -> www/wwwroot/cloudreve
 - 修改 conf.ini 文件
```shell
[System]
Debug = false
Mode = master
Listen = :5212
SessionSecret = rDdhhvlGzi7YaNHDndS8PNuXbBwJ1Nn34lBKdqfMxl0yKKh8NOJpCNLQQ5ONPdDJ
HashIDSalt = CljwuxYHUA5ymw9gHKIdezHDu2YErHnqsItOcmdDHOgfcOTHVASFU6T3sXdBCsJs

[Database]
; 数据库类型, 目前支持 sqlite | mysql 
Type = mysql
; 用户名 
User = cloudreve
; 密码 
Password = [数据库里 可以看到 root 密码]
; 数据库地址 
Host = 127.0.0.1
; 数据库名称 
Name = cloudreve
; 数据表前缀 
TablePrefix = cd_

```

## 添加守护进程
防止 pan.tianbin.cc 长时间未访问，自动关闭
- 软件商店 -> Supervisor管理器

![image.png](https://tianbin.cc/img/mbp/tutorial/03-cloudreve-cloudreve-1.jpg)

。启动。启动失败，可查看日志。