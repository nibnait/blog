// 一些备份
const backUpSide = {
    getSidebar() {
        return [
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
                text: "一些配置备份",
                children: [
                    {text: "常用命令", link: "/md/mbp/mbp-backup/mbp-common-cmd.html"},
                    {text: "屏保代码备份", link: "https://github.com/nibnait/algorithms/blob/master/src/main/java/cc/tianbin/backup/html/README.md"}
                ]
            }
        ]
    }
};

module.exports = backUpSide;
