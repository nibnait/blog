const {defaultTheme} = require('vuepress')
const rootpath = "/Users/nibnait/blog/docs/.vuepress"
const docs = "/Users/nibnait/blog/docs";
const sidebarUtils = require(rootpath + '/utils/sidebarUtils.js');

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
            "/md/algorithm/": sidebarUtils.genSidebar(docs, "/md/algorithm"),
            "/md/design-pattern/": sidebarUtils.genSidebar(docs, "/md/design-pattern"),
            "/md/java/": sidebarUtils.genSidebar(docs, "/md/java"),
            "/md/linux/": sidebarUtils.genSidebar(docs, "/md/linux"),
            "/md/mbp/": sidebarUtils.genSidebar(docs, "/md/mbp"),
            "/md/netty/": sidebarUtils.genSidebar(docs, "/md/netty"),
            "/md/tutorial/": sidebarUtils.genSidebar(docs, "/md/tutorial")
        }
    })
}
