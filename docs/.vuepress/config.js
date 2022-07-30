const {defaultTheme} = require('vuepress')
const rootPath = "/Users/nibnait/blog/docs/.vuepress"
const extend = require(rootPath + '/theme/index.js')

const headNavBar = require(rootPath + '/headNavbar.js');

const algorithmSide = require(rootPath + '/sidebar/1-algorithm.js');
const javaSide = require(rootPath + '/sidebar/2-java.js');
const linuxSide = require(rootPath + '/sidebar/3-linux.js');
const mbpSide = require(rootPath + '/sidebar/4-mbp.js');
const nettySide = require(rootPath + '/sidebar/5-netty.js');

module.exports = {
    title: "NibNait | tianbin",
    description: "沉淀 + 分享",

    theme: defaultTheme({
        // 默认主题配置
        navbar: headNavBar.getNavbar(),
        sidebar: {
            "/md/algorithm/": algorithmSide.getSidebar(),
            "/md/java/": javaSide.getSidebar(),
            "/md/linux/": linuxSide.getSidebar(),
            "/md/mbp/": mbpSide.getSidebar(),
            "/md/netty/": nettySide.getSidebar()
        }
    })
}
