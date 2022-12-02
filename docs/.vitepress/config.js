module.exports = {
    title: '网站标题',
    description: '网站介绍',
    themeConfig: {
        logo: "/logo.svg",
        nav: [
            {
                text: "chaizz", link: '/about/'
            },
            {
                text: "关于",
                link: '/about/'
            }
        ],
        sidebar: [
            {
                text: "web",
                items: [
                    {text: "css", link: "/Web/CSS/CSS媒体查询/",},
                    {text: "js", link: "/Web/javascript/js笔记之js事件/"},
                ],
            }
        ],

    }
}