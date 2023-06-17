---
category: 规范
title: 常用 git 操作
tag: [git]
---
# 常用 git 操作

## git 初始化

> `ssh-keygen -t rsa -C "w@xx.xx"`
> git config --global user.name nibnait
> git config --global user.email w@xx.xx

> git config --global --edit

```
[user]
        name = nibnait
        email = w@tianbin.cc
[core]
        ignorecase = false
```

## cherry-pick

[http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html](http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

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

## git pull --rebase

背景：本地 commit，然后 git push 时 发下 远程仓库最新的代码，已经被别人 commit push 过了。
此时，如果直接 git pull，默认会将本地代码与远程代码 进行 merge 操作，产生一个 新的 没有必要存在的 commit。
原理：先将远程的所有 commit 拉下来，然后再讲你本地最新的 commit 放到最后。

## git reset

[http://jartto.wang/2018/12/11/git-rebase/](http://jartto.wang/2018/12/11/git-rebase/)

回滚到远程分支的最新版本：

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

## git revert
移除某些 commit
> git revert —no-commit <commit1>..<commit2>

注意：
- 不包含 commit1
- 包含 commit2
- commit1 != commit2
- reverte完，rebase一下 这几个 revert 的 commit。防止（b checkout a, a 里的那几个 commit 永久的消失了）<https://zhuanlan.zhihu.com/p/407980237?utm_id=0>




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
