---
title: 初始化我的 MacBook Pro
---
# 初始化我的 MacBook Pro 

## 触发角

## App Store
- iSaver
/System/Library/Screen Savers

## 百度云
- Spectacle+1.2
- Alfred youdao
- AirServer

[[3-software]]

```
ctrl + `

获取package control最新安装代码：
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

cmd+shift+p
package control: install package
cmd+shift+p
pretty json

Preferences —> Key Bindings：
[
   {"keys":["super+i"],"command":"copy_path"},
	  {"keys":["super+ctrl+j"],"command":"pretty_json"},      
   { "keys": ["super+d"], "command": "duplicate_line" }
 ]
```

#### Prety Json Manual Installation [https://packagecontrol.io/packages/Pretty JSON](https://packagecontrol.io/packages/Pretty%20JSON)

- `cd <Packages directory>` (MacOS: `~/Library/Application\ Support/Sublime\ Text/Packages`)
- `git clone https://github.com/dzhibas/SublimePrettyJson.git "Pretty JSON"`

### [maven](https://maven.apache.org/download.cgi)

### [gradle](https://gradle.org/releases/)

### [MySQL](https://dev.mysql.com/downloads/mysql/5.7.html)

```
mysql -u root -p
set PASSWORD =PASSWORD('root');
```

### git 初始化

ssh-keygen -t rsa -C "[w@tianbin.org](mailto:w@tianbin.org)"
git config --global user.name nibnait
git config --global user.email [w@tianbin.org](mailto:w@tianbin.org)

git config --global --edit

```
[user]
        name = nibnait
        email = w@tianbin.cc
[core]
        ignorecase = false
```

## 系统快捷键

系统偏好设置->键盘->快捷键->应用快捷键

```
mail
Format->Lists->Insert Bulleted List     cmd+shift+b
Format->Lists->Insert Numbered List     cmd_shift+n

note
Format->Bulleted List     cmd+shift+b
Format->Numbered List     cmd_shift+n
```

### Chrome插件

Web前端助手（FeHelper）- crx文件安装方法
安装方法

1. 下载当前最新版`*.crx` [https://github.com/zxlie/FeHelper/tree/master/apps/static/screenshot/crx](https://github.com/zxlie/FeHelper/tree/master/apps/static/screenshot/crx)
1. chrome浏览器地址栏输入：chrome://extensions/ 并打开
1. 右上角开启`开发者模式`
1. 拖拽crx到当前页面，完成安装

# 升级 MacOs Mojave 后的兼容问题解决

[https://zhuzhengyuan.xyz/2018/11/23/the-compatibility-issues-in-macos-mojave/](https://zhuzhengyuan.xyz/2018/11/23/the-compatibility-issues-in-macos-mojave/)

```
终端启动报错
问题描述
打开终端时，直接报错 manpath: error: unable to read SDK settings for '/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk'
解决方案
升级 xcode 和 commandline tools.
在应用商店里升级 xcode 后，运行 xcode-select --install. 再重启终端即可。
```

你实际使用的是安装Xcode命令行工具的命令 - `xcode-select --install`。

你需要更新Xcode的命令是`softwareupdate command [args ...]`。你可以使用`softwareupdate --list`查看可用的内容，然后`softwareupdate --install -a`安装所有更新或`softwareupdate --install <product name>`只安装Xcode更新。你可以从列表命令中获取名称。