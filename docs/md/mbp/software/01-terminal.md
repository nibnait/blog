---
layout: post
category: 软件配置
title: 01 - 终端
tag: [software, terminal]
---
# 01 - 终端

warp

下载地址 [https://www.warp.dev/](https://www.warp.dev/)

使用文档 [https://docs.warp.dev/getting-started/getting-started-with-warp](https://docs.warp.dev/getting-started/getting-started-with-warp)

# [https://iterm2.com/](https://iterm2.com/)

#### 安装HomeBrew

```
 xcode-select --install
 ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### 安装Oh My Zsh

```
brew install git
brew install Zsh
brew install wget
brew install unrar
brew search 7z
brew install p7zip

sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-Zsh/master/tools/install.sh -O -)"

添加alias:
vim ~/.zshrc
G 
o

alias study="cd /Users/nibnait/Library/Mobile\ Documents/com~apple~CloudDocs/Study_Note"
alias redis="/Users/nibnait/redis-6.0.9/src/redis-server /Users/nibnait/redis-6.0.9/redis.conf"
alias rcli="/Users/nibnait/redis-6.0.9/src/redis-cli"
alias gcu="git checkout master_uat"
alias gcr="git checkout release"
alias gct="git checkout tianbin"
alias nrm="sudo npm run mall-dev"
alias nrd="npm run dev"
alias rime="cd /Users/nibnait/Library/Rime"
# alias mvp="mvn clean package -DskipTests"
# alias mvd="mvn clean deploy -DskipTests"
alias mvp="mvn clean package -Dmaven.test.skip=true"
alias mvd="mvn clean deploy -Dmaven.test.skip=true"
alias mvdr="mvn clean deploy -P release"
alias mvc="mvn clean"
alias mvi="mvn clean install"
alias gt="git tag"
alias mybatis="cd /Users/nibnait/bilibili/mybatis-generator-gui && java -jar mybatis-generator-gui.jar"
alias sshcentos1="sshpass -p \' ssh -p 22 nibnait@10.211.55.12 -t 'cd /home/nibnait/Desktop/redis-1.x/redis-1.3.6; bash --login'"
alias vd='vuepress dev docs'
alias vb='vuepress build docs'

export GO_HOME=/usr/loacl/go
export MAVEN_HOME=/Users/nibnait/apache-maven-3.6.3
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home
export NVM_DIR="$HOME/.nvm"
export PATH=$PATH:$MAVEN_HOME/bin:/usr/local/mysql/bin:$JAVA_HOME/bin:$GO_HOME/bin
export GOPROXY=https://goproxy.io,direct
export GO111MODULE=on

source ~/.zshrc
```

# Linux系统配置

## zsh

```shell
# centos
sudo yum -y install zsh
# ubuntu debian
sudo apt -y install zsh
```

## Oh My Zsh

```shell
sudo yum install git

#国外服务器用这个安装
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

#国内服务器如果用上边的命令安装不了，可以用gitee同步的仓库来安装
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

```shell
# 如果有报错
# Error: git clone of oh-my-zsh repo failed
yum update -y nss curl libcurl
```

```shell
echo $SHELL 
# 即可检测你当前是什么shell，正常的话应该输出：/bin/zsh
# 如果不是zsh，或者你退出再进再检测，发现不是zsh，那就执行一次
chsh -s /bin/zsh
# 命令切换到zsh就行。
```

# sshpass

```shell
wget http://sourceforge.net/projects/sshpass/files/sshpass/1.05/sshpass-1.05.tar.gz
tar xvzf sshpass-1.05.tar.gz
cd sshpass-1.05
./configure
make  
sudo make install
```

```shell
sshpass -p [passwd] ssh -p [port] root@192.168.X.X

sshpass -p \' ssh -p 22 nibnait@10.211.55.12 -t 'cd /home/nibnait/Desktop/redis-1.x/redis-1.3.6; bash --login'
```