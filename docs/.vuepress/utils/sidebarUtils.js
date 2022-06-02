const fs = require("fs");
// 排除检查的文件
var excludes = ['.DS_Store']

// const blogFiles = require.context('@/docs/md/', true, /\.md$/);

var dirTextMap = {
    "/md/algorithm/": "算法",
    "/md/design-pattern/": "设计模式",
    "/md/java/": "Java",
    "/md/java/basic/": "Java 基础",
    "/md/java/concurrent/": "并发编程",
    "/md/java/jvm/": "JVM 虚拟机",
    "/md/java/spring/": "Spring",
    "/md/linux/": "Linux",
    "/md/mbp/": "我的mbp",
    "/md/mbp/website/": "好用的网站",
    "/md/mbp/software/": "我的软件配置存档",
    "/md/netty/": "Netty",
    "/md/tutorial/": "各种教程",
    "/md/tutorial/vuepress": "vuepress 系列"
}

const sidebarUtils = {
    genSidebar(root, path) {
        return [{
                    text: dirTextMap[path],
                    children: this.getChildren(root, path)
                }]
    },

    getChildren(root, path) {
        let children = [];
        let rootPath = root + path;
        let files = fs.readdirSync(rootPath);
        for (var i = 0, len = files.length; i < len; i++) {
            let file = files[i];
            if (excludes.includes(file)) {
                continue;
            }

            let fullPath = rootPath + "/" + file
            let fileInfo = fs.statSync(fullPath)
            if (fileInfo.isFile()) {
                // let split = blogFiles[fullPath].split(/---+\r?\n/g);
                // let fileTitle = split[1].split(/---+\r?\n/g)[0];
                let title = "basic"
                children.push({'text': title, 'link': fullPath});
            } else {
                children.push({text: dirTextMap[path + "/" + file], children: this.getChildren(fullPath)})
            }
        }

        return children;
    }
};

module.exports = sidebarUtils;