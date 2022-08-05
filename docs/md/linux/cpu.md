---
category: Linux
title: CPU 飙升 / 被打满
tag: [Linux, cpu]
---
# CPU 飙升 / 被打满

```shell

# top命令，查看 java进程的 pid
# 电商这边 pid 一般都是 34。以下命令里 34 就代表 java进程的 pid 了
top
# 查看占用 cpu资源 最多的线程
top -H -p 34
# 计算线程的tid的十六进制
printf "%x\n" 1392
 
得到是: 570
 
cd /usr/local/jdk1.8.0/bin/
# 查看线程的堆栈信息（前后50行）
./jstack 34 | grep -A 50 570 --color
 
然后搜 bilibili，可以看到是哪里的代码这么耗cpu
 
./jstack -l 34 >> stack.txt
容器下载文件工具：http://relay.bilibili.co/#/file/download
# 可以把堆栈信息 下载下来 分析下，到底是什么接口/方法 在耗cpu
 
# 查看java进程 的堆信息
./jmap -heap ${PID}
# 查看内存占用top50的对象
./jmap -histo ${PID} | head -n 50

```