// 设计模式
const designPatternSide = {
    getSidebar() {
        return [
            {
                'text': 'Java 基础',
                "children": [
                    {
                        "text": "数据结构",
                        "link": "/md/java/basic.md"
                    }
                ]
            },
            {
                "text": "并发编程",
                "children": [
                    {
                        "text": "多线程",
                        "link": "/md/java/concurrent.md"
                    }
                ]
            },
            {
                "text": "JVM 虚拟机",
                "children": [
                    {
                        "text": "JVM 内存模型",
                        "link": "/md/java/jvm.md"
                    }
                ]
            },
            {
                "text": "Spring",
                "children": [
                    {
                        "text": "动态代理",
                        "link": "/md/java/spring.md"
                    }
                ]
            }
        ]
    }
};

module.exports = designPatternSide;
