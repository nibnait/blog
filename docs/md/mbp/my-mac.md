---
title: 我的 MacBook Pro
---
# 我的 MacBook Pro

## 触发角

## App Store

- 万年历
- Manico
- iSaver

/System/Library/Screen Savers

## 百度云

- [Spectacle+1.2](https://www.spectacleapp.com/)
- Alfred youdao
- [typora](https://www.typora.io/#download)
- [Snipaste](https://zh.snipaste.com/)
- [Kap](https://getkap.co/)
- AirServer

## 去官网下载最新版

| 简介                     | 官网地址                                                                                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 搜狗输入法               | [https://pinyin.sogou.com/mac/](https://pinyin.sogou.com/mac/)                                                                                                               |
| 百度网盘                 | https://pan.baidu.com/                                                                                                                                                       |
| Surge                    | [http://nssurge.com/](http://nssurge.com/8)                                                                                                                                  |
| 磁盘管理                 | [https://daisydiskapp.com/#](https://daisydiskapp.com/#)                                                                                                                     |
| clean my mac             | [http://www.mycleanmymac.com/xiazai.html](http://www.mycleanmymac.com/xiazai.html)                                                                                           |
| Paragon NTFS for Mac     | https://my.paragon-software.com/                                                                                                                                             |
| 电池管理                 | [https://apphousekitchen.com/](https://apphousekitchen.com/)                                                                                                                 |
| FileZilla（FTP）         | [https://filezilla-project.org/download.php](https://filezilla-project.org/download.php)                                                                                     |
| uTools                   | [https://u.tools/](https://u.tools/)                                                                                                                                         |
| Logitech Options         | [https://www.logitech.com.cn/zh-cn/product/options](https://www.logitech.com.cn/zh-cn/product/options)                                                                       |
| ezip                     | [https://ezip.awehunt.com/](https://ezip.awehunt.com/)                                                                                                                       |
| Karabiner，键盘 key 映射 | [https://karabiner-elements.pqrs.org/](https://karabiner-elements.pqrs.org/)<br />[https://github.com/nibnait/karabiner-config](https://github.com/nibnait/karabiner-config) |
| XCode                    | [https://developer.apple.com/download/more/?=xcode](https://developer.apple.com/download/more/?=xcode)                                                                       |
| Sublime Text             | [https://www.sublimetext.com](https://www.sublimetext.com) <br/>[https://packagecontrol.io/installation](https://packagecontrol.io/installation)                             |
| Obsidian                 | <https://obsidian.md/>                                                                                                                                                       |
| Macs Fan Control Pro     | <https://crystalidea.com/macs-fan-control>                                                                                                                                   |
| foobar2000     | <https://www.foobar2000.org/download>                                                                                                                                   |

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