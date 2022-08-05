// 导航栏
const headNavbar = {
    getNavbar() {
        return [
            {
                "text": "导读",
                "link": "/md/guide.html"
            },
            {
                "text": "算法",
                "children": [
                    {
                        "text": "体系学习班",
                        "link": "/md/algorithm/02-basic/class04.html"
                    },
                    {
                        "text": "大厂刷题班",
                        "link": "/md/algorithm/03-for-great-offer/class01.html"
                    }
                ]
            },
            {
                "text": "Java",
                "children": [
                    {
                        "text": "Java",
                        "children": [
                            {
                                "text": "Java 基础",
                                "link": "/md/java/basic/basic.html"
                            },
                            {
                                "text": "并发编程",
                                "link": "/md/java/concurrent/concurrent.html"
                            },
                            {
                                "text": "JVM 虚拟机",
                                "link": "/md/java/jvm/jvm.html"
                            }
                        ]
                    },
                    {
                        "text": "Netty",
                        "children": [
                            {
                                "text": "入门",
                                "link": "/md/netty/netty.html"
                            }
                        ]
                    },
                    {
                        "text": "手撸 Spring",
                        "children": [
                            {
                                "text": "Spring",
                                "link": "/md/java/spring/spring.html"
                            },
                            {
                                "text": "SpringBoot",
                                "link": "/md/java/spring/spring.html"
                            }
                        ]
                    },
                    {
                        "text": "手撸 Mybatis",
                        "children": [
                            {
                                "text": "Spring",
                                "link": "/md/java/spring/spring.html"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "Linux",
                "link": "/md/linux/linux.html"
            },
            {
                "text": "我的mbp",
                "children": [
                    {
                        "text": "我的 MacBook Pro",
                        "link": "/md/mbp/my-mac.html"
                    },
                    {
                        "text": "一些规范",
                        "link": "/md/mbp/standard/common-git.html"
                    },
                    {
                        "text": "一些推荐",
                        "link": "/md/mbp/recommend/1-web.html"
                    },
                    {
                        "text": "软件配置存档",
                        "link": "/md/mbp/backup/software/01-terminal.html"
                    },
                    {
                        "text": "各种教程",
                        "link": "/md/tutorial/tutorial.html"
                    }
                ]
            },
            {
                "text": "关于",
                "link": "/md/about.html"
            },
            {
                "text": "Github",
                "link": "https://github.com/nibnait"
            }
        ]
    }
};

module.exports = headNavbar;