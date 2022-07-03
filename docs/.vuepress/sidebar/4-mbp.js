// mbp
const mbpSide = {
    getSidebar() {
        return [
            {
                text: "我的mbp",
                children: [
                    {text: "我的 MacBook Pro", link: "/md/mbp/my-mac.md"},
                    {text: "代码雨", link: "/md/mbp/mbp-code-rain.md"},
                    {text: "常用命令", link: "/md/mbp/mbp-common-cmd.md"},
                    {text: "我的 Windows OS", link: "/md/mbp/my-win.md"}
                ]
            },
            {
                text: "一些规范",
                children: [
                    {text: "常用 git 操作", link: "/md/mbp/standard/common-git.md"},
                    {text: "git commit 规范", link: "/md/mbp/standard/git-standard.md"},
                    {text: "统一建模语言（Unified Modeling Language）", link: "/md/mbp/standard/uml.md"}
                ]
            },
            {
                text: "我的软件配置存档",
                children: [
                    {text: "01 - 终端", link: "/md/mbp/software/01-terminal.md"},
                    {text: "02 - idea", link: "/md/mbp/software/02-idea.md"},
                    {text: "03 - vscode", link: "/md/mbp/software/03-vscode.md"}
                ]
            },
            {
                text: '好用的网站',
                children: [
                    {text: "一些宝藏网站", link: "/md/mbp/website/1-web.md"},
                    {text: "我的 github star", link: "/md/mbp/website/2-github-star.md"}
                ]
            },
            {
                text: '各种教程',
                children: [
                    {text: "vuepress",
                        children: [
                            {text: "vuepress 博客的诞生记", link: "/md/tutorial/vuepress/01-hello-world.md"},
                            {text: "vuepress 从 1.x 升级到 2.0", link: "/md/tutorial/vuepress/02-upgrade-2.0.md"},
                            {text: "vuepress 博客站点优化", link: "/md/tutorial/vuepress/03-optimize.md"}
                        ]
                    },
                    {text: "使用 cloudreve 搭建个人网盘", link: "/md/tutorial/01-cloudreve.md"},
                    {text: "发布自己项目 JAR 到 MAVEN 中央仓库", link: "/md/tutorial/02-jar-to-maven.md"},
                    {text: "mysql 密码忘了", link: "/md/tutorial/03-mysql-password.md"}
                ]
            }
        ]
    }
};

module.exports = mbpSide;
