// 各种教程
const tutorialSide = {
    getSidebar() {
        return [
            {
                text: "vuepress 相关教程",
                children: [
                    {text: "vuepress 博客的诞生记", link: "/md/tutorial/vuepress/01-hello-world.html"},
                    {text: "vuepress 从 1.x 升级到 2.0", link: "/md/tutorial/vuepress/02-upgrade-2.0.html"},
                    {text: "vuepress 博客站点优化", link: "/md/tutorial/vuepress/03-optimize.html"}
                ]
            },
            {
                text: "未分类 教程",
                children: [
                    {text: "使用 cloudreve 搭建个人网盘", link: "/md/tutorial/01-cloudreve.html"},
                    {text: "发布自己项目 JAR 到 MAVEN 中央仓库", link: "/md/tutorial/02-jar-to-maven.html"},
                    {text: "mysql 密码忘了", link: "/md/tutorial/03-mysql-password.html"}
                ]
            }

        ]
    }
};

module.exports = tutorialSide;
