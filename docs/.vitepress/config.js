module.exports = {
    title: '第九艺术',
    description: '世界上最大的游戏在线俱乐部~',
    themeConfig: {
        logo: "/logo.svg",

        nav: [{text: "about", link: '/about/about/'}],

        sidebar: [
            {
                text: "css",
                items: [
                    {text: "CSS媒体查询", link: "Web/CSS/CSS媒体查询/"},
                ],
            }
        ],


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