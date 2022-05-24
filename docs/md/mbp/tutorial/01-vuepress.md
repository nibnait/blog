---
layout: post
category: 各种教程
title: vuepress 博客的诞生记
tag: [tutorial, vuepress]
---
# vuepress 博客的诞生记

[toc]

参考资料：
 - [https://vuepress.vuejs.org/zh/config/](https://vuepress.vuejs.org/zh/config/)
 - [emoji 简写](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## 先装个 宝塔linux 面板
![image.png](https://tianbin.cc/img/mbp/tutorial/02-vuepress-01-重装系统.jpg)
![image.png](https://tianbin.cc/img/mbp/tutorial/02-vuepress-02-宝塔linux.jpg)

安装完成后，先在网页登录一下服务器
> bt default

然后 会自动生成宝塔的访问地址，用户名、密码  
直接进去。按提示注册宝塔、关联腾讯云

## 本地和github 一起建一个空的 blog 的 仓库
直接在终端安装下 vuepress 
> yarn install  
> yarn global add vuepress  
> yarn init -y  

### 修改 package.json
参考 [github.com/nibnait/blog/package.json](https://github.com/nibnait/blog/blob/master/package.json)

> mkdir docs  
> cd docs

### .vuepress
 
> mkdir .vuepress  
> cd .vuepress
> touch config.js

参考 [github.com/nibnait/blog/docs/.vuepress/config.js](https://github.com/nibnait/blog/blob/master/docs/.vuepress/config.js)

### public
> mkdir public
给你的博客，找个 favicon.ico（16x16） 和 logo.png（64x64），放到 public 文件夹下面

博客的图片 也可以放到这个目录下面。

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

然后 把 .site 下面的文件传到 /www/wwwroot/blog.tianbin.cc 目录下。  
博客 就算搭建完了

最后把本地目录和服务器目录做下映射
![image.png](https://tianbin.cc/img/mbp/tutorial/02-vuepress-03-ftp映射.jpg)

## 图床
直接在 blog.tianbin.cc 下面 再建一个叫 img 的文件夹。  
把本地的图片 直接上传到这里  
md 直接引用即可