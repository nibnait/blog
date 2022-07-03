// 算法
const algorithmSide = {
    getSidebar() {
        return [
            {
                text: "体系学习班",
                children: [
                    {text: "01 时间复杂度、空间复杂度、对数器和二分法", link: "/md/algorithm/02-basic/class01.md"},
                    {text: "02 异或运算、进一步认识对数器的重要性", link: "/md/algorithm/02-basic/class02.md"},
                    {text: "03 单双链表、栈和队列、递归和Master公式、哈希表和有序表的使用和性能", link: "/md/algorithm/02-basic/class03.md"},
                    {text: "04 归并排序及其常见面试题", link: "/md/algorithm/02-basic/class04.md"},
                    {text: "05 归并排序面试题(续)、快速排序", link: "/md/algorithm/02-basic/class05.md"},
                    {text: "06 比较器、堆结构、堆排序", link: "/md/algorithm/02-basic/class06.md"},
                    {text: "07 和堆有关的面试题、加强堆结构", link: "/md/algorithm/02-basic/class07.md"},
                    {text: "09 排序算法大总结、链表及其相关面试题", link: "/md/algorithm/02-basic/class08.md"}
                ]
            },
            {
                text: "大厂刷题班",
                children: [
                    {text: "01 大厂高频算法和数据结构面试题1", link: "/md/algorithm/03-for-great-offer/class01.md"}
                ]
            }
        ]
    }
};

module.exports = algorithmSide;
