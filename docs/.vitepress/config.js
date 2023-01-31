module.exports = {
    title: '编程纪元',
    description: '杂谈笔记~',
    themeConfig: {
        logo: "/logo.svg",

        // 导航栏
        nav: [
            {text: "tools", link: '/articles/Tools/VitePress搭建文档网站'},
            {text: "about", link: '/about/about'},
            {text: "home", link: 'https://www.chaizz.com'},
        ],

        // 侧边栏
        sidebar: {
            "/articles/": [
                {
                    text: "JavaScript",
                    items: [
                        {
                            text: "JS笔记之JS对象基础知识(一)",
                            link: "/articles/JavaScript/JS笔记之JS对象基础知识(一)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(二)",
                            link: "/articles/JavaScript/JS笔记之JS对象基础知识(二)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(三)",
                            link: "/articles/JavaScript/JS笔记之JS对象基础知识(三)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(四)",
                            link: "/articles/JavaScript/JS笔记之JS对象基础知识(四)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(五)",
                            link: "/articles/JavaScript/JS笔记之JS对象基础知识(五)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(六)",
                            link: "/articles/JavaScript/JS笔记之JS对象基础知识(六)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(七)",
                            link: "/articles/JavaScript/JS笔记之JS对象基础知识(七)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(八)",
                            link: "/articles/JavaScript/JS笔记之JS对象基础知识(八)",
                        },
                        {
                            text: "JS笔记之JS数据类型(一)",
                            link: "/articles/JavaScript/JS笔记之JS数据类型(一)",
                        },
                        {
                            text: "JS笔记之JS数据类型(二)",
                            link: "/articles/JavaScript/JS笔记之JS数据类型(二)",
                        },
                    ],
                },
                {
                    text: "Tools",
                    items: [
                        {
                            text: "VitePress搭建文档网站",
                            link: "/articles/CSS/VitePress搭建文档网站",
                        }
                    ],
                },
                {
                    text: "CSS",
                    items: [
                        {
                            text: "CSS媒体查询",
                            link: "/articles/CSS",
                        },
                    ],
                },
                {
                    text: "Go",
                    items: [
                        {
                            text: "Gin",
                            link: "/articles/Go",
                        }
                    ],
                },
                {
                    text: "Rust",
                    items: [
                        {
                            text: "Deno",
                            link: "/articles/Rust",
                        },
                    ],
                },
                {
                    text: "Database",
                    items: [
                        {
                            text: "MySQL",
                            link: "/articles/Database/MySQl",
                        },
                        {
                            text: "Redis",
                            link: "/articles/Database/Redis",
                        },
                        {
                            text: "MongoDB",
                            link: "/articles/Database/MongoDB",
                        },
                    ],
                },
                {
                    text: "Linux",
                    items: [
                        {
                            text: "Ubuntu",
                            link: "/articles/Linux/Ubuntu",
                        },
                        {
                            text: "Docker",
                            link: "/articles/Linux/Docker",
                        },
                        {
                            text: "K8S",
                            link: "/articles/Linux/K8S",
                        },
                    ],
                },
                {
                    text: "Other",
                    items: [
                        {
                            text: "杂谈",
                            link: "/articles/Other/Essays",
                        },
                    ],
                },
            ],
        },

        // 社交链接
        socialLinks: [
            {icon: "github", link: "..."},
            {icon: "twitter", link: "..."},
        ],
    }
}