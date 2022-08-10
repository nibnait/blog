// 一些备份
const backUpSide = {
    getSidebar() {
        return [
            {
                text: "我的软件配置存档",
                children: [
                    {text: "01 - 终端", link: "/md/mbp/backup/software/01-terminal.html"},
                    {text: "02 - idea", link: "/md/mbp/backup/software/02-idea.html"},
                    {text: "03 - vscode", link: "/md/mbp/backup/software/03-vscode.html"},
                    {text: "03 - Obsidian", link: "/md/mbp/backup/software/04-obsidian.html"}
                ]
            },
            {
                text: "一些配置备份",
                children: [
                    {text: "常用命令", link: "/md/mbp/backup/mbp-common-cmd.html"},
                    {text: "屏保备份", link: "/md/mbp/backup/screen-saver.html"}
                ]
            }
        ]
    }
};

module.exports = backUpSide;
