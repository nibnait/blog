const {defaultTheme} = require('vuepress')

module.exports = {
    title: "NibNait | tianbin",
    description: "沉淀 + 分享",

    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '导读',
                link: '/md/guide.md'
            },
            {
                text: '算法',
                children: [
                    {
                        text: '剑指Offer',
                        link: '/md/algorithm/algorithm.md'
                    },
                    {
                        text: 'leetcode',
                        children: [
                            {
                                text: '动态规划',
                                link: '/md/algorithm/algorithm.md'
                            },
                            {
                                text: 'xx',
                                link: '/md/algorithm/algorithm.md'
                            }
                        ]
                    },
                    {
                        text: '左程云',
                        children: [
                            {
                                text: '1',
                                link: '/md/algorithm/algorithm.md'
                            }
                        ]
                    }
                ]
            },
            {
                text: '设计模式',
                link: '/md/design-pattern/design-pattern.md'
            },
            {
                text: 'Java',
                children: [
                    {
                        text: 'Java',
                        children: [
                            {
                                text: 'Java 基础',
                                link: '/md/java/basic/basic.md'
                            },
                            {
                                text: '并发编程',
                                link: '/md/java/concurrent/concurrent.md'
                            },
                            {
                                text: 'JVM 虚拟机',
                                link: '/md/java/jvm/jvm.md'
                            }
                        ]
                    },
                    {
                        text: 'Netty',
                        children: [
                            {
                                text: '入门',
                                link: '/md/netty/netty.md'
                            }
                        ]
                    },
                    {
                        text: 'Spring',
                        children: [
                            {
                                text: 'Spring',
                                link: '/md/java/spring/spring.md'
                            },
                            {
                                text: 'SpringBoot',
                                link: '/md/java/spring/spring.md'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Linux',
                link: '/md/linux/linux.md'
            },
            {
                text: '我的mbp',
                children: [
                    {
                        text: '我的 MacBook Pro',
                        link: '/md/mbp/my-mac.md'
                    },
                    {
                        text: '好用的网站',
                        link: '/md/mbp/website/1-web.md'
                    },
                    {
                        text: '值得 star 的 github 仓库',
                        link: '/md/mbp/website/2-github-star.md'
                    },
                    {
                        text: '各种教程',
                        link: '/md/tutorial/tutorial.md'
                    }
                ]
            },
            {
                text: '随笔',
                link: '/md/essay/2205.md'
            },
            {
                text: '关于',
                link: '/md/about.md'
            },
            {
                text: 'Github',
                link: 'https://github.com/nibnait/blog'
            }
        ],
        sidebar: {
            "/md/algorithm/": algorithmCatalog(),
            "/md/design-pattern/": designPatternCatalog(),
            "/md/essay/": essayCatalog(),
            "/md/java/": javaCatalog(),
            "/md/linux/": linuxCatalog(),
            "/md/mbp/": mbpCatalog(),
            "/md/netty/": nettyCatalog(),
            "/md/tutorial/": tutorialCatalog()
        }
    })
}

// 算法
function algorithmCatalog() {
    return [
        {
            text: "算法",
            children: [
                "algorithm.md"
            ]
        }
    ]
}

// 设计模式
function designPatternCatalog() {
    return [
        {
            text: "设计模式",
            children: [
                "design-pattern.md"
            ]
        }
    ]
}

// 随笔
function essayCatalog() {
    return [
        {
            text: "随笔",
            children: [
                "2205.md"
            ]
        }
    ]
}

// Java
function javaCatalog() {
    return [
        {
            text: "Java 基础",
            children: [
                {
                    text: '数据结构',
                    link: '/basic.md'
                }
            ]
        },
        {
            text: "并发编程",
            children: [
                {
                    text: '多线程',
                    link: '/concurrent.md'
                }
            ]
        },
        {
            text: "JVM 虚拟机",
            children: [
                {
                    text: 'JVM 内存模型',
                    link: '/jvm.md'
                }
            ]
        },
        {
            text: "Spring",
            children: [
                {
                    text: '动态代理',
                    link: '/spring.md'
                }
            ]
        }
    ]
}

// Linux
function linuxCatalog() {
    return [
        {
            text: "Linux",
            children: [
                "linux.md",
                "my-centos.md"
            ]
        }
    ]
}

// mbp
function mbpCatalog() {
    return [
        {
            text: "我的mbp",
            children: [
                "my-mac.md",
                "mbp-code-rain.md",
                "mbp-common-cmd.md",
                "my-win.md"
            ]
        },
        {
            text: "一些规范",
            children: [
                "standard/common-git.md",
                "standard/git-standard.md",
                "standard/uml.md"
            ]
        },
        {
            text: "我的软件配置存档",
            children: [
                "software/01-terminal.md",
                "software/02-idea.md",
                "software/03-vscode.md"
            ]
        },
        {
            text: '好用的网站',
            children: [
                "website/1-web.md",
                "website/2-github-star.md"
            ]
        },
    ]
}

// Netty
function nettyCatalog() {
    return [
        {
            text: "基础入门篇",
            children: [
                "netty.md"
            ]
        }
    ]
}

// 各种教程
function tutorialCatalog() {
    return [
        {
            text: "各种教程",
            children: [
                {text: '使用 cloudreve 搭建个人网盘', link: '/md/tutorial/01-cloudreve.md'},
                {text: '发布自己项目 JAR 到 MAVEN 中央仓库', link: '/md/tutorial/02-jar-to-maven.md'},
                {text: 'mysql 密码忘了', link: '/md/tutorial/03-mysql-password.md'},
                {
                    text: 'vuepress 系列',
                    children: [
                        {text: 'vuepress 博客的诞生记', link: '/md/tutorial/vuepress/01-hello-world.md'},
                        {text: 'vuepress 从 1.x 升级到 2.0', link: '/md/tutorial/vuepress/02-upgrade-2.0.md'},
                        {text: 'vuepress 博客站点优化', link: '/md/tutorial/vuepress/03-optimize.md'}
                    ]
                }
            ]
        }
    ]
}
