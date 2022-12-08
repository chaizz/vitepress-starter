module.exports = {
    title: '第九俱乐部',
    description: '世界上最大的中文露营俱乐部~',
    themeConfig: {
        logo: "/logo.svg",

        // 导航栏
        nav: [
            {text: "about", link: '/about/about'},
            {text: "article", link: '/articles/yingdi/'},
        ],

        // 侧边栏
        sidebar: {
            "/articles/": [
                {
                    text: "露营指南",
                    items: [
                        {
                            text: "营地",
                            link: "/articles/yingdi/",
                        },
                        {
                            text: "营地2",
                            link: "/articles/yingdi/index2",
                        },
                    ],
                },
                {
                    text: "徒步指南",
                    items: [
                        {
                            text: "徒步1",
                            link: "/articles/zhuangbei/",
                        },
                        {
                            text: "徒步2",
                            link: "/articles/zhuangbei/index2",
                        },
                    ],
                },
            ],
        },

        // 社交链接
        socialLinks: [
            { icon: "github", link: "https://github.com/chaizz" },
            { icon: "twitter", link: "..." },
        ],
    }
}