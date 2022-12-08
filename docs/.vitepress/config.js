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
                            text: "露营",
                            link: "/articles/yingdi/",
                        },
                        {
                            text: "露营2",
                            link: "/articles/yingdi/index2",
                        },
                    ],
                },
                {
                    text: "徒步指南",
                    items: [
                        {
                            text: "徒步1",
                            link: "/articles/tubu/",
                        },
                        {
                            text: "徒步2",
                            link: "/articles/tubu/index2",
                        },
                        {
                            text: "徒步3",
                            link: "/articles/tubu/VitePress搭建文档网站",
                        },
                    ],
                },
                {
                    text: "装备指南",
                    items: [
                        {
                            text: "装备1",
                            link: "/articles/zhuangbei/",
                        },
                        {
                            text: "装备2",
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