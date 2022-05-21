module.exports = {
    dest: ".site",
    base: "/",
    markdown: {
        lineNumbers: false,
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
        nav: [
            {text: '我的mbp', link: '/md/mbp'},
            {text: '算法', link: '/md/algorithm'},
            {text: '设计模式', link: '/md/design-parttern'},
            {text: 'Netty', link: '/md/netty'},
            {text: 'Github', link: 'https://github.com/nibnait'},
        ],
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
                        text: '设计模式',
                        link: '/md/design-pattern/despar.md'
                    },
                    {
                        text: '算法',
                        items: [
                            {
                                text: '剑指Offer',
                                link: '/md/algorithm/alg.md'
                            },
                            {
                                text: 'leetcode',
                                items: [
                                    {
                                        text: '动态规划',
                                        link: '/md/algorithm/alg.md'
                                    },
                                    {
                                        text: 'xx',
                                        link: '/md/algorithm/alg.md'
                                    }
                                ]
                            },
                            {
                                text: '左程云',
                                items: [
                                    {
                                        text: '1',
                                        link: '/md/algorithm/alg.md'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: '我的mbp',
                        items: [
                            {
                                text: '好用的软件',
                                link: '/md/mbp/mbp.md'
                            },
                            {
                                text: '好用的网站',
                                link: '/md/mbp/website/web.md'
                            },
                            {
                                text: '值得 star 的 github 仓库',
                                link: '/md/mbp/website/web.md'
                            },
                            {
                                text: '各种教程',
                                link: '/md/mbp/tutorial/tuto.md'
                            }
                        ]
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
                    "/md/algorithm/": sidebarAlgorithm(),
                    "/md/design-pattern/": sideBarDesignPattern(),
                    "/md/mbp/": sideBarMbp(),
                    "/md/netty/": sideBarNetty()
                }
            }
        }
    },
};

// 算法
function sidebarAlgorithm() {
    return [
        {
            title: "算法",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "alg.md"
            ]
        }
    ]
}

// 设计模式
function sideBarDesignPattern() {
    return [
        {
            title: "设计模式",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "despar.md"
            ]
        }
    ]
}

// mbp
function sideBarMbp() {
    return [
        {
            title: "我的mbp",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "mbp.md"
            ]
        },
        {
            title: "好用的软件",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "software/01终端.md"
            ]
        },
        {
            title: '好用的网站',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "website/web.md"
            ]
        },
        {
            title: '值得 star 的 github 仓库',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "website/web.md"
            ]
        },
        {
            title: '各种教程',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "tutorial/tuto.md",
                "tutorial/220521-vuepress.md",
                "tutorial/220521-ssh-port.md"
            ]
        }
    ]
}

// netty
function sideBarNetty() {
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