---
title: 常用命令
---
# 常用命令

## 解压.rar、.7z文件

> unrar x 1.rar
> 7z e 1.7z

## before:

> brew install unrar

> brew search 7z
> brew install p7zip


## 坑

`Updating Homebrew...`

- 法1：

替换brew.git:
cd "$(brew --repo)"
git remote set-url origin [https://mirrors.ustc.edu.cn/brew.git](https://mirrors.ustc.edu.cn/brew.git)

替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin [https://mirrors.ustc.edu.cn/homebrew-core.git](https://mirrors.ustc.edu.cn/homebrew-core.git)

- 法2:

重置brew.git:
cd "$(brew --repo)"
git remote set-url origin [https://github.com/Homebrew/brew.git](https://github.com/Homebrew/brew.git)

重置homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin [https://github.com/Homebrew/homebrew-core.git](https://github.com/Homebrew/homebrew-core.git)

## 一些快捷键

显示隐藏文件：`command + shift + .`
彻底删除：`command + delete`

## 复制网页
document.body.contentEditable=true

