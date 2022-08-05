---
category: Linux
title: 内存 飙升 / 频繁GC
tag: [Linux, memory]
---
# 内存 飙升 / 频繁GC

## 查看堆内存，找出业务对象
```shell
# top命令，查看 java进程的 pid
top
# 查看内存占用top10的线程
ps -mp ${PID} -o THREAD,tid,time|sort -nr -k 2|head -n 10
# 计算线程的tid的十六进制
printf "%x\n" ${TID}

cd /usr/local/jdk1.8.0/bin/
# 查看线程的堆栈信息（前后30行）
./jstack ${PID} | grep {16进制TID} -A 30
# 查看java进程 的堆信息
./jmap -heap ${PID}
# 查看内存占用top50的对象
./jmap -histo ${PID} | head -n 50
```


## dump堆内存文件和gc日志
 - Out Of Memory之后自动生成dump文件，通常保存在/data/log/tomcat/dump目录下
 - gc日志 一般存在 /data/log/tomcat/gc 目录下

```shell
ps -ef | grep java

# 堆内存
# 进入 jdk 的 bin 目录
cd /usr/local/jdk1.8.0/bin/
# 将内存 dump 到 /tmp
./jmap -dump:format=b,file=/tmp/1.hprof ${PID}

# 查看gc日志
cd /data/log/tomcat/gc/
# 然后 cat
```

## 分析堆内存和gc日志

使用Java自带的jvisualvm

```shell
# 本地打开visualvm
cd ${JAVA_HOME} && ./jvisualvm
# 导入 xx.hprof
# 分析吧。。查看占用内存最大那个类的来源
```
