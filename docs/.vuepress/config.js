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
                                text: '我的 MacBook Pro',
                                link: '/md/mbp/mbp.md'
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
                    "/md/algorithm/": algorithmCatalog(),
                    "/md/design-pattern/": designPatternCatalog(),
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
                "alg.md"
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
                "despar.md"
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
                "mbp.md",
                "mbp-code-rain.md",
                "mbp-common-cmd.md",
                "uml.md",
                "win.md"
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
                "tutorial/01-ssh-port.md",
                "tutorial/02-vuepress.md",
                "tutorial/03-cloudreve.md",
                "tutorial/04-jar-to-maven.md"
            ]
        }
    ]
}

// netty
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