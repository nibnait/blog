---
category: 各种教程
title: vuepress 从 1.x 升级到 2.0
tag: [tutorial, vuepress]
---
# vuepress 从 1.x 升级到 2.0

参考文档: 
 - <https://v2.vuepress.vuejs.org/zh/guide/migration.html>

## 先卸载 vuepress 1.x
> npm uninstall vuepress -g
> cd /usr/local/bin  
> rm -f vuepress

## 再安装 2.0
修改 package.json
```javascript
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "dependencies": {
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "vuepress": "^2.0.0-beta.45"
  }
```

> yarn add -D vuepress@next

## 好了。重新本地编译吧
> vuepress dev docs

## v2.0 的一些配置修改
navbar: <https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar>  
sidebar: <https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar>