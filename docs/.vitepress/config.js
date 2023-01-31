module.exports = {
    title: '编程纪元',
    description: '杂谈笔记~',
    themeConfig: {
        logo: "/logo.svg",

        // 导航栏
        nav: [
            {text: "about", link: '/about/about'},
            {text: "article", link: '/articles/JavaScript'},
        ],

        // 侧边栏
        sidebar: {
            "/articles/": [
                {
                    text: "JavaScript",
                    items: [
                        {
                            text: "JavaScript Index",
                            link: "/articles/JavaScript/",
                        },
                        // {
                        //     text: "JS笔记之JS对象基础知识(一)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(一)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(二)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(二)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(三)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(三)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(四)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(四)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(五)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(五)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(六)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(六)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(七)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(七)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(八)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(八)",
                        // },
                        // {
                        //     text: "JS笔记之JS数据类型(一)",
                        //     link: "/articles/JavaScript/JS笔记之JS数据类型(一)",
                        // },
                        // {
                        //     text: "JS笔记之JS数据类型(二)",
                        //     link: "/articles/JavaScript/JS笔记之JS数据类型(二)",
                        // },
                    ],
                },
                {
                    text: "Other",
                    items: [
                        {
                            text: "VitePress搭建文档网站",
                            link: "/articles/Other/VitePress搭建文档网站",
                        },
                        // {
                        //     text: "JS笔记之JS对象基础知识(一)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(一)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(二)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(二)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(三)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(三)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(四)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(四)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(五)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(五)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(六)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(六)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(七)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(七)",
                        // },
                        // {
                        //     text: "JS笔记之JS对象基础知识(八)",
                        //     link: "/articles/JavaScript/JS笔记之JS对象基础知识(八)",
                        // },
                        // {
                        //     text: "JS笔记之JS数据类型(一)",
                        //     link: "/articles/JavaScript/JS笔记之JS数据类型(一)",
                        // },
                        // {
                        //     text: "JS笔记之JS数据类型(二)",
                        //     link: "/articles/JavaScript/JS笔记之JS数据类型(二)",
                        // },
                    ],
                },
                // {
                //     text: "CSS",
                //     items: [
                //         {
                //             text: "CSS媒体查询",
                //             link: "/articles/CSS/CSS媒体查询",
                //         },
                //     ],
                // },
                // {
                //     text: "Go",
                //     items: [
                //         {
                //             text: "Go",
                //             link: "/articles/Go/",
                //         },
                //         {
                //             text: "Gin",
                //             link: "/articles/CSS/index2",
                //         },
                //     ],
                // },
                // {
                //     text: "Rust",
                //     items: [
                //         {
                //             text: "Rust",
                //             link: "/articles/CSS/",
                //         },
                //         {
                //             text: "deno",
                //             link: "/articles/CSS/index2",
                //         },
                //     ],
                // },
                // {
                //     text: "Database",
                //     items: [
                //         {
                //             text: "MySQL",
                //             link: "/articles/CSS/",
                //         },
                //         {
                //             text: "Redis",
                //             link: "/articles/CSS/index2",
                //         },
                //         {
                //             text: "MongoDB",
                //             link: "/articles/CSS/index2",
                //         },
                //     ],
                // },
                // {
                //     text: "Linux",
                //     items: [
                //         {
                //             text: "Ubuntu",
                //             link: "/articles/CSS/",
                //         },
                //         {
                //             text: "Docker",
                //             link: "/articles/CSS/index2",
                //         },
                //         {
                //             text: "K8S",
                //             link: "/articles/CSS/index2",
                //         },
                //     ],
                // },
                // {
                //     text: "Other",
                //     items: [
                //         {
                //             text: "杂谈",
                //             link: "/articles/CSS/",
                //         },
                //         {
                //             text: "笔记",
                //             link: "/articles/CSS/index2",
                //         },
                //     ],
                // },
            ],
        },

        // 社交链接
        socialLinks: [
            {icon: "github", link: "..."},
            {icon: "twitter", link: "..."},
        ],
    }
}