---
title: 发布自己项目 JAR 到 MAVEN 中央仓库
---
# 发布自己项目 JAR 到 MAVEN 中央仓库

我的 issues: 
[https://issues.sonatype.org/browse/OSSRH-79805?filter=-2](https://issues.sonatype.org/browse/OSSRH-79805?filter=-2)

---

# 1. 注册 sonatype 的 Jira 帐号

Sonatype通过JIRA来管理OSSRH仓库。JIRA是一个项目管理服务，类似于国内的Teambition。
注册地址: [https://issues.sonatype.org/secure/Signup!default.jspa](https://issues.sonatype.org/secure/Signup!default.jspa)

### 项目的发布申请

![image.png](https://tianbin.cc/img/mbp/tutorial/04-00.jpg)
![image.png](https://tianbin.cc/img/mbp/tutorial/04-01.jpg)

### （按提示来就好了）

[https://issues.sonatype.org/projects/OSSRH/issues/OSSRH-79805?filter=allissues](https://issues.sonatype.org/projects/OSSRH/issues/OSSRH-79805?filter=allissues)
![image.png](https://tianbin.cc/img/mbp/tutorial/04-02.jpg)

[https://central.sonatype.org/publish/publish-guide/#deployment](https://central.sonatype.org/publish/publish-guide/#deployment)
[https://central.sonatype.org/publish/release/](https://central.sonatype.org/publish/release/)

# 2. 下载并安装GPG

下载并安装GPG Suite  [https://gpgtools.org/](https://gpgtools.org/)  
![image.png](https://tianbin.cc/img/mbp/tutorial/04-03.png)

# 3. 修改 setting.xml 和 pom.xml

### setting.xml

一定要修改 ~/.m2/setting.xml，其他路径、其他文件名 都不行  
![image.png](https://tianbin.cc/img/mbp/tutorial/04-04.jpg)  
新增一个 server

```sql
      <server>
        <id>sonatype-nexus-snapshots</id>
        <username>nibnait</username>
        <password>xxx</password>
      </server>

username 和 password 是上面 注册 sonatype 时 填的账号密码
```

### pom.xml

```xml
// 第一次上传 一定要 是 release 版本
<version>1.0-RELEASE</version>

<name>common-enhance</name>
<url>https://github.com/nibnait/common-enhance</url>
<description>
  java common util collection
</description>

```

下面 这一堆 直接丢到 </dependencies> 下面 就好了

```xml
    <licenses>
        <license>
            <name>BSD 3-Clause</name>
            <url>https://spdx.org/licenses/BSD-3-Clause.html</url>
        </license>
    </licenses>
    <scm>
        <connection>https://github.com/nibnait/common-enhance.git</connection>
        <url>https://github.com/nibnait/common-enhance</url>
    </scm>
    <developers>
        <developer>
            <name>nibnait</name>
            <email>nibnait@icloud.com</email>
            <roles>
                <role>Developer</role>
            </roles>
            <timezone>+8</timezone>
        </developer>
    </developers>

    <profiles>
        <profile>
            <id>release</id>
            <build>
                <resources>
                    <resource>
                        <directory>src/main/java</directory>
                        <includes>
                            <include>**/*.properties</include>
                            <include>**/*.sample</include>
                        </includes>
                    </resource>
                </resources>
                <plugins>
                    <!-- Source -->
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-source-plugin</artifactId>
                        <version>2.2.1</version>
                        <executions>
                            <execution>
                                <phase>package</phase>
                                <goals>
                                    <goal>jar-no-fork</goal>
                                </goals>
                            </execution>
                        </executions>
                    </plugin>
                    <!-- Javadoc -->
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-javadoc-plugin</artifactId>
                        <version>2.9.1</version>
                        <configuration>
                            <show>private</show>
                            <nohelp>true</nohelp>
                            <charset>UTF-8</charset>
                            <encoding>UTF-8</encoding>
                            <docencoding>UTF-8</docencoding>
                            <additionalparam>-Xdoclint:none</additionalparam>
                            <!--                            <javadocExecutable>/Library/Java/JavaVirtualMachines/1.8.0_231.jdk/Contents/Home/bin/javadoc</javadocExecutable>-->
                            <!-- TODO 临时解决不规范的javadoc生成报错,后面要规范化后把这行去掉 -->
                        </configuration>
                        <executions>
                            <execution>
                                <phase>package</phase>
                                <goals>
                                    <goal>jar</goal>
                                </goals>
                            </execution>
                        </executions>
                    </plugin>
                    <!-- GPG -->
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-gpg-plugin</artifactId>
                        <version>1.6</version>
                        <executions>
                            <execution>
                                <phase>verify</phase>
                                <goals>
                                    <goal>sign</goal>
                                </goals>
                            </execution>
                        </executions>
                    </plugin>
                    <!--Compiler -->
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-compiler-plugin</artifactId>
                        <version>3.0</version>
                        <configuration>
                            <source>1.8</source>
                            <target>1.8</target>
                            <fork>true</fork>
                            <verbose>true</verbose>
                            <encoding>UTF-8</encoding>
                            <showWarnings>false</showWarnings>
                        </configuration>
                    </plugin>
                    <!--Release -->
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-release-plugin</artifactId>
                        <version>2.5.3</version>
                    </plugin>

                    <plugin>
                        <groupId>org.sonatype.plugins</groupId>
                        <artifactId>nexus-staging-maven-plugin</artifactId>
                        <version>1.6.7</version>
                        <extensions>true</extensions>
                        <configuration>
                            <serverId>sonatype-nexus-snapshots</serverId>
                            <nexusUrl>https://s01.oss.sonatype.org/</nexusUrl>
                            <autoReleaseAfterClose>true</autoReleaseAfterClose>
                        </configuration>
                    </plugin>

                </plugins>
            </build>
            <distributionManagement>
                <snapshotRepository>
                    <id>sonatype-nexus-snapshots</id>
                    <name>Sonatype Nexus Snapshots</name>
                    <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>
                </snapshotRepository>
                <repository>
                    <id>sonatype-nexus-snapshots</id>
                    <name>Nexus Release Repository</name>
                    <url>https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/</url>
                </repository>
            </distributionManagement>
        </profile>
    </profiles>

```

这里遇到的坑：
[https://developer.aliyun.com/article/844214](https://developer.aliyun.com/article/844214)
[https://blogtech.top/2019/12/30/发布自己的项目 JAR 到 MAVEN 中央仓库](https://blogtech.top/2019/12/30/%E5%8F%91%E5%B8%83%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A1%B9%E7%9B%AEJAR%E5%88%B0MAVEN%E4%B8%AD%E5%A4%AE%E4%BB%93%E5%BA%93/)
参考了两篇文章，（但是 可能是因为文章有点老），上面的 distributionManagement -> repository 配置的 都是 https://oss.sonatype.org。我这边照着配置了之后，一直报401 Unauthorized。  

后来 仔细读了 [issues](https://issues.sonatype.org/projects/OSSRH/issues/OSSRH-79805?filter=allissues) 里的 英格力是 才发现，21年2后以后，repository 地址改到 https://s01.oss.sonatype.org 了👇  。。然后又通篇读了遍教程，改了改其他配置，才成功上传
[https://central.sonatype.org/publish/publish-guide/#deployment](https://central.sonatype.org/publish/publish-guide/#deployment)
![image.png](https://tianbin.cc/img/mbp/tutorial/04-05.jpg)

# 4.  打包 上传

`mvn clean deploy -P release`

这个 release 是这里的 id   
![image.png](https://tianbin.cc/img/mbp/tutorial/04-06.jpg)
