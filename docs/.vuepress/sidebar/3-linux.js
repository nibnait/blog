// linux
const linuxSide = {
    getSidebar() {
        return [
            {
                text: "Linux",
                children: [
                    {text: "Linux 学习", link: "/md/linux/linux.html"},
                    {text: "我的 Centos", link: "/md/linux/my-centos.html"},
                    {text: "CPU 飙升 / 被打满", link: "/md/linux/cpu.html"},
                    {text: "内存 飙升 / 频繁GC", link: "/md/linux/memory.html"}
                ]
            }
        ]
    }
};

module.exports = linuxSide;
