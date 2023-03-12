module.exports = {
    title: '编程纪元',
    description: '个人知识笔记~',
    themeConfig: {
        logo: "/logo.svg",

        // 导航栏
        nav: [
           
            { text: "其他", link: 'articles/Essays' },
            { text: "Python", link: '/articles/Python第三方包Dynaconf' },
            { text: "Go", link: 'https://www.chaizz.com' },
            { text: "JavaScript", link: '/articles/Tools/VitePress搭建文档网站' },
            { text: "CSS", link: '/about/about' },
            { text: "Rust", link: 'https://www.chaizz.com' },
            {
                text: "Database", items: [
                    {
                        text: "MySQL",
                        link: "/articles/Go",
                    },
                    {
                        text: "PostgreSQL",
                        link: "/articles/Go",
                    },
                    {
                        text: "MongoDB",
                        link: "/articles/Go",
                    }
                ]
            },
            {
                text: "Linux", items: [
                    {
                        text: "Docker",
                        link: "/articles/Go",
                    },
                    {
                        text: "K8s",
                        link: "/articles/Go",
                    }
                ]
            },
            { text: "home", link: 'https://www.chaizz.com' },
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
                            link: "/articles/CSS/",
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
                            link: "/articles/Rust/Deno",
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
            ],
        },

        // 社交链接
        socialLinks: [
            { icon: "github", link: "..." },
            { icon: "twitter", link: "..." },
        ],
    }
}