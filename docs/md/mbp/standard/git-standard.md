---
title: git 操作规范
---
# git 操作规范

## 分支起名

需求分支（小写字母+下划线）           feature/abc_bcd
线上bugfix分支   fix/
超车分支（master_年月日）              master_20211122

## commit 规范

### 内容规范

参考  [https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

```markdown
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

`<type>` 和 `<summary>` 必填，`<scope>` 选填

### Type（必填）

以下之一

```markdown
# 主要type
feat:       增加新功能
fix:        修复bug
# 特殊type
docs:       只改动了文档相关的内容
style:      不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
build:      构造工具的或者外部依赖的改动，例如webpack，npm
refactor:   代码重构时使用
revert:     执行git revert打印的message
# 暂不使用type
test:       添加测试或者修改现有测试
perf:       提高性能的改动
ci:         与CI（持续集成服务）有关的改动
chore:      不修改src或者test的其余修改，例如构建过程或辅助工具的变动
```

### Scope（选填）

变更的范围（包名、文件名、方法名...）

### Summary（必填）

一句话总结

## 合并一样的commit

```markdown
git rebase -i HEAD~x

git rebase -i (commitId)
```

# 解决合master冲突

```markdown
git fetch origin

git rebase origin/master

git rebase --continue
```

分支的开发过程中，要经常与主干保持同步。

1. 别再通过 git merge master 的方式，解决本分支与master的冲突了。坏处：单测覆盖率，会统计本分支上的所有commit，master上有不是你的commit，也会被统计到单测覆盖率
1. 经常与主干保持一致，可以减少最后的冲突数量



