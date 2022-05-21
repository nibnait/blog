---
title: vuepress 博客的诞生记
---
# vuepress 博客的诞生记

## 先装个 堡塔linux 面板
![](/Users/nibnait/blog_compress_img/220521-01-重装系统.jpg)
![](/Users/nibnait/blog_compress_img/220521-02-堡塔linux.jpg)

安装完成后，先在网页登录一下服务器
> bt default

然后 会自动生成堡塔的访问地址，用户名、密码  
直接进去。按提示注册宝塔、关联腾讯云

## 本地和github 一起建一个空的 blog 的 仓库
直接在终端安装下 vuepress 
> yarn install  
> yarn global add vuepress  
> yarn init -y  

### 修改 package.json
参考 [github.com/nibnait/blog]()

> mkdir docs  
> cd docs

### .vuepress
 
> mkdir .vuepress  
> cd .vuepress
> touch config.js

参考 [github.com/nibnait/blog/]()

### public
> mkdir public
给你的博客，找个 favicon.ico（16x16） 和 logo.png（64x64），放到 public 文件夹下面

### README.md
在 docs 下面，创建一个 README.md

### 开始写博客吧
在 docs 下面，创建一个叫 md 的文件夹。  
下面 想写啥就写啥咯

## 先本地运行下
> vuepress dev docs

## 再在 .site 目录下生成 html 静态文件
> vuepress build docs

## 去宝塔面板上传 .site 中的静态文件
 - 软件商店，安装: Nginx, Pure-Ftpd, 
 - 网站，添加站点
   - 创建ftp
   - 提交。（若本地ftp连不上，请检查 被动端口 39000 - 40000 是否放行）

然后 把 .site 下面的文件传到 /www/wwwroot/blog.tianbin.cc  目录下。  
博客 就算搭建完了

## 使用 github webhook 功能，自动上传 .site 文件
1. 服务器 安装下 git
> yum -y install git
2. 软件商店，安装: PHP-7.4  
php 管理
 - 把配置文件，disable_functions 中的 exec, shell_exec，删掉
3. 开启 www
> vim /etc/passwd  
> 最后一行 www:/sbin/nologin --> bin/bash
4. 生成公钥
> ssh-keygen -t rsa -C "w@tianbin.cc"  
> cat ~/.ssh/id_rsa.pub   
 
把公钥放到 github ssh key 里
5. 

