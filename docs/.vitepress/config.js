module.exports = {
    title: '第九艺术',
    description: '世界上最大的游戏在线俱乐部~',
    themeConfig: {
        logo: "/logo.svg",

        // 导航栏
        nav: [{text: "about", link: '/about/about/'}],

        // 侧边栏
        sidebar: {
            "/articles/": [
                {
                    text: "CSS",
                    items: [
                        {
                            text: "css",
                            link: "/articles/CSS",
                        },
                        {
                            text: "css2",
                            link: "/articles/CSS/index2",
                        },
                    ],
                },
                {
                    text: "js",
                    items: [
                        {
                            text: "js首页",
                            link: "/articles/JS",
                        },
                        {
                            text: "js2",
                            link: "/articles/JS/index2",
                        },
                    ],
                },
            ],
        },

        // 社交链接
        socialLinks: [
            { icon: "github", link: "https://github.com/chaizz" },
            { icon: "twitter", link: "..." },
            // You can also add custom icons by passing SVG as string:
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
                },
                link: "...",
            },
        ],
    }
}