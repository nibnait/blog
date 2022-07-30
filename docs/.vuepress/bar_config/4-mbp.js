// mbp
const rootPath = "/Users/nibnait/blog/docs/.vuepress"
const tutorialSide = require(rootPath + '/bar_config/6-tutorial.js');

const mbpSide = {
    getSidebar() {
        return this.getMbpSidebar().concat(tutorialSide.getSidebar());
    },
    getMbpSidebar() {
        return [
            {
                text: "我的mbp",
                children: [
                    {text: "我的 MacBook Pro", link: "/md/mbp/my-mac.html"},
                    {text: "代码雨", link: "/md/mbp/mbp-code-rain.html"},
                    {text: "常用命令", link: "/md/mbp/mbp-common-cmd.html"},
                    {text: "我的 Windows OS", link: "/md/mbp/my-win.html"}
                ]
            },
            {
                text: "一些规范",
                children: [
                    {text: "常用 git 操作", link: "/md/mbp/standard/common-git.html"},
                    {text: "git commit 规范", link: "/md/mbp/standard/git-standard.html"},
                    {text: "统一建模语言（Unified Modeling Language）", link: "/md/mbp/standard/uml.html"},
                    {text: "常用颜色搭配", link: "/md/mbp/standard/color.html"}
                ]
            },
            {
                text: "我的软件配置存档",
                children: [
                    {text: "01 - 终端", link: "/md/mbp/software/01-terminal.html"},
                    {text: "02 - idea", link: "/md/mbp/software/02-idea.html"},
                    {text: "03 - vscode", link: "/md/mbp/software/03-vscode.html"},
                    {text: "03 - Obsidian", link: "/md/mbp/software/04-obsidian.html"}
                ]
            },
            {
                text: '好用的网站',
                children: [
                    {text: "一些宝藏网站", link: "/md/mbp/website/1-web.html"},
                    {text: "我的 github star", link: "/md/mbp/website/2-github-star.html"}
                ]
            },
        ]
    }
};

module.exports = mbpSide;
