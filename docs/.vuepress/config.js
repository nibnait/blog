module.exports = {
    dest: ".site",
    base: "/",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "NibNait | tianbin",
            description: "沉淀 + 分享"
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
    ],
    themeConfig: {
        docsRepo: "nibnait/blog",
        // 编辑文档的所在目录
        docsDir: 'docs',
        docsBranch: 'master',
        logo: "/logo.png",
        editLinks: true,
        smoothScroll: true,
        sidebar: "auto",
        sidebarDepth: 0,
        locales:  {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: '导读',
                        link: '/md/guide.md'
                    },
                    {
                        text: '算法',
                        items: [
                            {
                                text: '剑指Offer',
                                link: '/md/algorithm/algorithm.md'
                            },
                            {
                                text: 'leetcode',
                                items: [
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
                                items: [
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
                        items: [
                            {
                                text: 'Java',
                                items: [
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
                                items: [
                                    {
                                        text: '入门',
                                        link: '/md/netty/netty.md'
                                    }
                                ]
                            },
                            {
                                text: 'Spring',
                                items: [
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
                        items: [
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
                                link: '/md/mbp/tutorial/tutorial.md'
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
                    "/md/netty/": nettyCatalog()
                }
            }
        }
    },
};

// 算法
function algorithmCatalog() {
    return [
        {
            title: "算法",
            collapsable: false,
            sidebarDepth: 1,
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
            title: "设计模式",
            collapsable: false,
            sidebarDepth: 1,
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
            title: "随笔",
            collapsable: false,
            sidebarDepth: 1,
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
            title: "Java 基础",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "basic/basic.md"
            ]
        },
        {
            title: "并发编程",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "concurrent/concurrent.md"
            ]
        },
        {
            title: "JVM 虚拟机",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "jvm/jvm.md"
            ]
        },
        {
            title: "Spring",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "spring/spring.md"
            ]
        }
    ]
}

// Linux
function linuxCatalog() {
    return [
        {
            title: "Linux",
            collapsable: false,
            sidebarDepth: 1,
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
            title: "我的mbp",
            collapsable: false,
            sidebarDepth: 2,
            children: [
                "my-mac.md",
                "mbp-code-rain.md",
                "mbp-common-cmd.md",
                "my-win.md"
            ]
        },
        {
            title: "一些规范",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "standard/common-git.md",
                "standard/git-standard.md",
                "standard/uml.md"
            ]
        },
        {
            title: "我的软件配置存档",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "software/01-terminal.md",
                "software/02-idea.md",
                "software/03-vscode.md"
            ]
        },
        {
            title: '好用的网站',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "website/1-web.md",
                "website/2-github-star.md"
            ]
        },
        {
            title: '各种教程',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "tutorial/01-vuepress.md",
                "tutorial/02-cloudreve.md",
                "tutorial/03-jar-to-maven.md",
                "tutorial/04-mysql-password.md"
            ]
        }
    ]
}

// Netty
function nettyCatalog() {
    return [
        {
            title: "基础入门篇",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "netty.md"
            ]
        }
    ]
}