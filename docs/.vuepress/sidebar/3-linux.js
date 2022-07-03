// linux
const linuxSide = {
    getSidebar() {
        return [
            {
                text: "Linux",
                children: [
                    {text: "Linux 学习", link: "/md/linux/linux.md"},
                    {text: "我的 Centos", link: "/md/linux/my-centos.md"},
                    {text: "CPU 飙升 / 被打满", link: "/md/linux/cpu.md"},
                    {text: "内存 飙升 / 频繁GC", link: "/md/linux/memory.md"}
                ]
            }
        ]
    }
};

module.exports = linuxSide;
