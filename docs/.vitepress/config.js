module.exports = {
    title: '第九艺术',
    description: '世界上最大的游戏在线俱乐部~',
    themeConfig: {
        logo: "/logo.svg",

        nav: [{text: "about", link: '/about/'}],

        sidebar: [
            {
                text: "css",
                items: [
                    {text: "CSS媒体查询", link: "/Web/CSS/CSS媒体查询/"},
                    {text: "CSS层叠与继承", link: "/Web/CSS/CSS层叠与继承/"},
                ],
            },

            {
                text: "js",
                items: [
                    {text: "js笔记之js事件", link: "/Web/Javascript/js笔记之js事件/"},
                    {text: "js笔记之Js代码调用策略", link: "/Web/Javascript/js笔记之Js代码调用策略/"},
                ],
            }
        ],
    }
}