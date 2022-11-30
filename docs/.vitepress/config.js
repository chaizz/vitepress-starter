module.exports = {
  title: 'ninth-club',
  description: 'Just playing around.',

  themeConfig: {

  logo: "/logo.svg",

    nav: [
      { 
        text: "Guide",
        items: [
          { text: 'guide 1', link: '/guide/guide-1' },
          { text: 'guide 2', link: '/guide/guide-2' },
          { text: 'guide 3', link: '/guide/guide-3' }
        ]
      }
    ],


sidebar: [
      {
        text: "web",
        items: [
          {
            text: "js",
            link: "/js/",
          },
          { text: "css", link: "/css/" },
        ],
      }
    ],

  }

}