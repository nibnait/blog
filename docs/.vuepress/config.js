const {defaultTheme} = require('vuepress')
const rootpath = "/Users/nibnait/blog/docs/.vuepress"
const algorithmSide = require(rootpath + '/sidebar/1-algorithm.js');
const designPatternSide = require(rootpath + '/sidebar/2-design-pattern.js');
const javaSide = require(rootpath + '/sidebar/3-java.js');

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
                text: '关于',
                link: '/md/about.md'
            },
            {
                text: 'Github',
                link: 'https://github.com/nibnait'
            }
        ],
        sidebar: {
            "/md/algorithm/": algorithmSide.getSidebar(),
            "/md/design-pattern/": designPatternSide.getSidebar(),
            "/md/java/": javaSide.getSidebar(),
            "/md/linux/": linuxCatalog(),
            "/md/mbp/": mbpCatalog(),
            "/md/netty/": nettyCatalog()
        }
    })
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