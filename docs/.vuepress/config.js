const {defaultTheme} = require('vuepress')
const rootpath = "/Users/nibnait/blog/docs/.vuepress"

const algorithmSide = require(rootpath + '/sidebar/1-algorithm.js');
const javaSide = require(rootpath + '/sidebar/2-java.js');
const linuxSide = require(rootpath + '/sidebar/3-linux.js');
const mbpSide = require(rootpath + '/sidebar/4-mbp.js');
const nettySide = require(rootpath + '/sidebar/5-netty.js');

module.exports = {
    title: "NibNait | tianbin",
    description: "沉淀 + 分享",

    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '导读',
                link: '/md/guide.html'
            },
            {
                text: '算法',
                children: [
                    {
                        text: '体系学习班',
                        link: '/md/algorithm/02-basic/class04.html'
                    },
                    {
                        text: '大厂刷题班',
                        link: '/md/algorithm/03-for-great-offer/class01.html'
                    }
                ]
            },
            {
                text: 'Java',
                children: [
                    {
                        text: 'Java',
                        children: [
                            {
                                text: 'Java 基础',
                                link: '/md/java/basic/basic.html'
                            },
                            {
                                text: '并发编程',
                                link: '/md/java/concurrent/concurrent.html'
                            },
                            {
                                text: 'JVM 虚拟机',
                                link: '/md/java/jvm/jvm.html'
                            }
                        ]
                    },
                    {
                        text: 'Netty',
                        children: [
                            {
                                text: '入门',
                                link: '/md/netty/netty.html'
                            }
                        ]
                    },
                    {
                        text: '手撸 Spring',
                        children: [
                            {
                                text: 'Spring',
                                link: '/md/java/spring/spring.html'
                            },
                            {
                                text: 'SpringBoot',
                                link: '/md/java/spring/spring.html'
                            }
                        ]
                    },
                    {
                        text: '手撸 Mybatis',
                        children: [
                            {
                                text: 'Spring',
                                link: '/md/java/spring/spring.html'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Linux',
                link: '/md/linux/linux.html'
            },
            {
                text: '我的mbp',
                children: [
                    {
                        text: '我的 MacBook Pro',
                        link: '/md/mbp/my-mac.html'
                    },
                    {
                        text: '好用的网站',
                        link: '/md/mbp/website/1-web.html'
                    },
                    {
                        text: '值得 star 的 github 仓库',
                        link: '/md/mbp/website/2-github-star.html'
                    },
                    {
                        text: '各种教程',
                        link: '/md/tutorial/tutorial.html'
                    }
                ]
            },
            {
                text: '关于',
                link: '/md/about.html'
            },
            {
                text: 'Github',
                children: [
                    {text: "《剑指Offer》", link: "https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/SwordOffer/README.md"},
                    {text: "「左神的算法班」", link: "https://github.com/nibnait/algorithms/tree/master/src/main/java/algorithm_practice/algorithmzuo"},
                    {text: "设计模式", link: "https://github.com/nibnait/design-pattern-demo"}
                ]
            }
        ],
        sidebar: {
            "/md/algorithm/": algorithmSide.getSidebar(),
            "/md/java/": javaSide.getSidebar(),
            "/md/linux/": linuxSide.getSidebar(),
            "/md/mbp/": mbpSide.getSidebar(),
            "/md/netty/": nettySide.getSidebar()
        }
    })
}
