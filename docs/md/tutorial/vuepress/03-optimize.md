---
category: 各种教程
title: vuepress 博客站点优化
tag: [tutorial, vuepress]
---
# vuepress 博客站点优化

参考文档：
 - [https://github.com/mqyqingfeng/Blog#博客搭建](https://github.com/mqyqingfeng/Blog#%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA)

## 开启 Gzip
<https://github.com/mqyqingfeng/Blog/issues/248>


## 添加数据统计功能
<https://github.com/mqyqingfeng/Blog/issues/245>

## Algolia 全文搜索
<https://github.com/mqyqingfeng/Blog/issues/267>

## SEO
《百度搜索引擎优化指南2.0》<https://ziyuan.baidu.com/college/courseinfo?id=193&page=3>  
Google 搜索中心《搜索引擎优化 (SEO) 新手指南 》<https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=zh-cn>

具体可以参考：
 - [VuePress 博客之 SEO 优化（一）sitemap 与搜索引擎收录](https://github.com/mqyqingfeng/Blog/issues/272)
 - [VuePress 博客之 SEO 优化（二）之重定向](https://github.com/mqyqingfeng/Blog/issues/273)

## 一些好玩的插件
<https://github.com/mqyqingfeng/Blog/issues/261>

## 评论
自己写个 Java 服务吧。存到 mysql。

## 修改样式
网站样式总有一些不满足你期望的地方，有的时候，就需要自己修改代码。
如果你要修改主题色，VuePress 定义一些变量供以后使用，你可以创建一个 `.vuepress/styles/palette.styl` 文件：
```javascript
// 颜色
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// 响应式变化点
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px

```

如果你要自定义样式，你可以创建一个 `.vuepress/styles/index.styl` 文件。这是一个 Stylus文件，但你也可以使用正常的 CSS 语法。
更多的颜色修改参考 VuePress 的 [palette.styl](https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)

## 手写插件
 - VuePress 插件：[《从零实现一个 VuePress 插件》](https://github.com/mqyqingfeng/Blog/issues/250)
 - Markdown-it 插件：[《VuePress 博客优化之拓展 Markdown 语法》](https://github.com/mqyqingfeng/Blog/issues/251)

