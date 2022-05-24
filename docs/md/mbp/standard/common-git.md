---
layout: post
category: 规范
title: 常用 git 操作
tag: [git]
---
# 常用 git 操作

## cherry-pick

http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html

`git cherry-pick` 命令的作用，就是将其他分支指定的提交（commit）应用于本分支。

```
git cherry-pick <commitHash>
```

## git rebase

```
git rebase -i HEAD~2
git rebase master
```

移除某个commit

```
1.git log获取commit信息 
2.git rebase -i (commit-id) 
commit-id 为要删除的commit的下一个commit号 
3.编辑文件，将要删除的commit之前的单词改为drop 
4.保存文件退出大功告成 
5.git log查看
```

## git reset

http://jartto.wang/2018/12/11/git-rebase/ 回滚到远程分支的最新版本：

```
git reset --head origin/master
```

回滚到某次commit（并保留当前暂存区的所有修改）

```
git reset 7bfab4e
```

回滚到上一次commit状态，并放弃当前暂存区的所有修改

```
git reset --hard HEAD
```

## git remote

[Git - 远程仓库的使用](https://git-scm.com/book/zh/v2/Git-基础-远程仓库的使用)

```
git remote -v
git remote remove origin
git remote add origin git@github.com:nibnait/algorithms.git
```

## git tag

[Git 基础 - 打标签](https://git-scm.com/book/zh/v2/Git-基础-打标签)

```
git tag v1.2.84
git push origin v1.2.84
```

## 统计代码行数

> git log --author="$(git config --get user.name)" --pretty=tformat: --numstat | awk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "Added lines: %s Removed lines : %s Total lines: %s\n",add,subs,loc }' -

更多统计：

> brew install gawk

```
#!/bin/sh
#
# 统计提交行数
# 统计范围: src

if [[ ! -d '.git' ]]; then
    echo 'Not a git repository'
    exit
fi

echo 'name       '$(git config --get user.name)
echo 'email      '$(git config --get user.email)
echo 'remote url '$(git config --get remote.origin.url)
echo 'branch     '$(git symbolic-ref --short -q HEAD)
echo '\033[2m┌──────────┬─────────────┬───────────────┬─────────────┐\033[0m'
echo '\033[2m|\033[0m Time     \033[2m|\033[0m Added lines \033[2m|\033[0m Removed lines \033[2m|\033[0m Total lines \033[2m|\033[0m'
git log --author="$(git config --get user.name)" --since=1.day --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "\033[2m|\033[0m 1 day    \033[2m|\033[0m \033[32m%11s\033[0m \033[2m|\033[0m \033[31m%13s\033[0m \033[2m|\033[0m \033[34m%11s\033[0m \033[2m|\033[0m\n", add, subs, loc }' -
git log --author="$(git config --get user.name)" --since=3.day --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "\033[2m|\033[0m 3 days   \033[2m|\033[0m \033[32m%11s\033[0m \033[2m|\033[0m \033[31m%13s\033[0m \033[2m|\033[0m \033[34m%11s\033[0m \033[2m|\033[0m\n", add, subs, loc }' -
git log --author="$(git config --get user.name)" --since=1.week --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "\033[2m|\033[0m 1 week   \033[2m|\033[0m \033[32m%11s\033[0m \033[2m|\033[0m \033[31m%13s\033[0m \033[2m|\033[0m \033[34m%11s\033[0m \033[2m|\033[0m\n", add, subs, loc }' -
git log --author="$(git config --get user.name)" --since=1.month --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "\033[2m|\033[0m 1 month  \033[2m|\033[0m \033[32m%11s\033[0m \033[2m|\033[0m \033[31m%13s\033[0m \033[2m|\033[0m \033[34m%11s\033[0m \033[2m|\033[0m\n", add, subs, loc }' -
git log --author="$(git config --get user.name)" --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "\033[2m|\033[0m total    \033[2m|\033[0m \033[32m%11s\033[0m \033[2m|\033[0m \033[31m%13s\033[0m \033[2m|\033[0m \033[34m%11s\033[0m \033[2m|\033[0m\n", add, subs, loc }' -
echo '\033[2m└──────────┴─────────────┴───────────────┴─────────────┘\033[0m'


```