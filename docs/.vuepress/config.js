const {defaultTheme} = require('@vuepress/theme-default')

const rootPath = "/Users/nibnait/blog/docs/.vuepress"
const headNavBar = require(rootPath + '/side-bar-config/headNavbar.js');
const algorithmSide = require(rootPath + '/side-bar-config/1-algorithm.js');
const javaSide = require(rootPath + '/side-bar-config/2-java.js');
const linuxSide = require(rootPath + '/side-bar-config/3-linux.js');
const mbpSide = require(rootPath + '/side-bar-config/4-0-mbp.js');
const backUpSide = require(rootPath + '/side-bar-config/4-1-backUp.js');
const nettySide = require(rootPath + '/side-bar-config/5-netty.js');
const tutorialSide = require(rootPath + '/side-bar-config/6-tutorial.js');

module.exports = {
    title: "NibNait | tianbin",
    description: "沉淀 + 分享",

    theme: defaultTheme({
        // 默认主题配置项
        navbar: headNavBar.getNavbar(),
        sidebar: {
            "/md/algorithm/": algorithmSide.getSidebar(),
            "/md/java/": javaSide.getSidebar(),
            "/md/linux/": linuxSide.getSidebar(),
            "/md/mbp/": mbpSide.getSidebar(),
            "/md/mbp/backup/": backUpSide.getSidebar(),
            "/md/netty/": nettySide.getSidebar(),
            "/md/tutorial/": tutorialSide.getSidebar()
        }
    })
}
