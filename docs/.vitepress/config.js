module.exports = {
    lang: 'zh-CN',
    title: '编程纪元',
    description: '个人知识笔记~',
    themeConfig: {
        logo: "/orange.svg",

        // 导航栏
        nav: [
            { text: "🎆 其他", link: '/articles/tools/VitePress搭建文档网站', activeMatch: '/其他/' },
            {
                text: "🐍 Python", items: [
                    {
                        items: [
                            {
                                text: "⚡️ Python",
                                link: "/articles/python/python/",
                            },
                        ]
                    },
                    {
                        items: [
                            {
                                text: "Django",
                                link: "/articles/python/django/",
                            },
                            {
                                text: "Flask",
                                link: "/articles/python/flask/",
                            },
                            {
                                text: "FastAPI",
                                link: "/articles/python/fastapi/",
                            },
                            {
                                text: "Celery",
                                link: "/articles/python/Celery/",
                            },
                        ],
                    },
                    {
                        items: [
                            {
                                text: "数据分析",
                                link: "/articles/python/Celery/",
                            },
                            {
                                text: "人工智能",
                                link: "/articles/python/Celery/",
                            },
                            {
                                text: "机器学习",
                                link: "/articles/python/Celery/",
                            },
                            {
                                text: "深度学习",
                                link: "/articles/python/Celery/",
                            },
                            {
                                text: "Yolo",
                                link: "/articles/python/Celery/",
                            },
                        ],
                    },
                ], activeMatch: '/Python/'
            },
            {
                text: "🕸️ 大前端", items: [
                    {
                        items: [
                            {
                                text: "⭐ JavaScript",
                                link: "/articles/web/javascript/",
                            },
                            {
                                text: "🎉 CSS",
                                link: "/articles/web/css/",
                            },
                        ],
                    },
                    {
                        items: [
                            {
                                text: "🔥 TypeScript",
                                link: "/articles/web/typescript/",
                            }
                        ],
                    }
                ], activeMatch: '/大前端/'
            },
            {
                text: "📝 数据库", items: [
                    {
                        text: "MySQL",
                        link: "/Go",
                    },
                    {
                        text: "Redis",
                        link: "/Redis",
                    },
                    {
                        text: "PostgreSQL",
                        link: "/Go",
                    },
                    {
                        text: "MongoDB",
                        link: "/Go",
                    },
                    {
                        text: "InfluxDB",
                        link: "/Go",
                    },
                    {
                        text: "Elasticsearch",
                        link: "/Go",
                    },
                ], activeMatch: '/数据库/'
            },
            {
                text: "🐳 操作系统/运维", items: [
                    {
                        items: [
                            {
                                text: "Ubuntu",
                                link: "/Go",
                            },
                            {
                                text: "Centos",
                                link: "/Go",
                            },
                            {
                                text: "Windows",
                                link: "/Go",
                            },
                        ]
                    },
                    {
                        items: [
                            {
                                text: "Docker",
                                link: "/Go",
                            },
                            {
                                text: "K8s",
                                link: "/Go",
                            },
                            {
                                text: "Prometheus",
                                link: "/Go",
                            }

                        ]
                    }
                ], activeMatch: '/操作系统/运维/'
            },
            {
                text: "🥙 Go", items: [
                    {
                        items: [
                            {
                                text: "Gin",
                                link: "/Go",
                            },
                            {
                                text: "Iris",
                                link: "/Go",
                            },
                        ]
                    }
                ], activeMatch: '/Go/'
            },
            {
                text: "🔥 Rust", items: [
                    {
                        items: [
                            {
                                text: "基础知识",
                                link: "/Go",
                            },
                            {
                                text: "deno",
                                link: "/Go",
                            },

                        ]
                    }
                ], activeMatch: '/Rust/'
            },
            { text: "📚 关于", link: '/about/about', activeMatch: '/关于/' },
        ],

        // 侧边栏
        sidebar: {
            "/articles/tools/": [
                {
                    text: "VitePress",
                    collapsed: false,
                    items: [
                        {
                            text: "VitePress搭建文档网站",
                            link: '/articles/tools/VitePress搭建文档网站',
                        }
                    ]
                },
                {
                    text: "Sublime Text4 ",
                    collapsed: false,
                    items: [
                        {
                            text: "Sublime Text4 安装注册",
                            link: '/articles/tools/Sublime Text4 安装注册',
                        }
                    ]
                },
                {
                    text: "Typora",
                    collapsed: false,
                    items: [
                        {
                            text: "Typora设置七牛云图床",
                            link: '/articles/tools/Typora设置七牛云图床',
                        },
                    ]
                },

            ],
            "/articles/python/python/": [
                {
                    text: "Python",
                    collapsed: false,
                    items: [
                        {
                            text: "Python第三方包Dynaconf的使用",
                            link: "/articles/python/python/Python第三方包Dynaconf",
                        }
                    ]
                },
            ],
            "/articles/python/django/": [
                {
                    text: "Django",
                    collapsed: false,
                    items: [
                        {
                            text: "Django1",
                            link: "/articles/python/python/Python第三方包Dynaconf",
                        },
                        {
                            text: "Django2",
                            link: "/articles/python/python/Python第三方包Dynaconf",
                        }
                    ]
                },
                {
                    text: "REST framework",
                    collapsed: false,
                    items: [
                        {
                            text: "Serializers",
                            link: "/articles/python/python/Python第三方包Dynaconf",
                        },
                        {
                            text: "Caching",
                            link: "/articles/python/python/Python第三方包Dynaconf",
                        }
                    ]
                },
            ],
            "/articles/python/Flask/": [
                {
                    text: "Flask",
                    collapsed: false,
                    items: [
                        {
                            text: "Flask",
                            link: "/articles/python/python/Python第三方包Dynaconf",
                        },
                        {
                            text: "Flask2",
                            link: "/articles/python/python/Python第三方包Dynaconf",
                        }
                    ]
                },
            ],
            "/articles/web/javascript/": [
                {
                    text: "数据类型",
                    collapsed: false,
                    items: [
                        {
                            text: "JS笔记之JS数据类型(一)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(一)",
                        },
                        {
                            text: "JS笔记之JS数据类型(二)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(二)",
                        },
                        {
                            text: "JS笔记之JS数据类型(三)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(三)",
                        },
                        {
                            text: "JS笔记之JS数据类型(四)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(四)",
                        },
                        {
                            text: "JS笔记之JS数据类型(五)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(五)",
                        },
                        {
                            text: "JS笔记之JS数据类型(六)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(六)",
                        },
                        {
                            text: "JS笔记之JS数据类型(七)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(七)",
                        },
                        {
                            text: "JS笔记之JS数据类型(八)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(八)",
                        },
                    ]
                },
                {
                    text: "JS对象",
                    collapsed: false,
                    items: [
                        {
                            text: "JS笔记之JS对象基础知识(一)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(一)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(二)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(二)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(三)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(三)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(四)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(四)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(五)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(五)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(六)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(六)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(七)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(七)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(八)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(八)",
                        },
                    ]
                },
                {
                    text: "JS函数",
                    collapsed: false,
                    items: [
                        {
                            text: "JS笔记之JS函数进阶(一)",
                            link: "/articles/web/javascript/JS笔记之JS函数进阶(一)",
                        },
                        {
                            text: "JS笔记之JS函数进阶(二)",
                            link: "/articles/web/javascript/JS笔记之JS函数进阶(二)",
                        },
                        {
                            text: "JS笔记之JS函数进阶(三)",
                            link: "/articles/web/javascript/JS笔记之JS函数进阶(三)",
                        },
                        {
                            text: "JS笔记之JS函数进阶(四)",
                            link: "/articles/web/javascript/JS笔记之JS函数进阶(四)",
                        },
                        {
                            text: "JS笔记之JS函数进阶(五)",
                            link: "/articles/web/javascript/JS笔记之JS函数进阶(五)",
                        },
                        {
                            text: "JS笔记之JS函数进阶(六)",
                            link: "/articles/web/javascript/JS笔记之JS函数进阶(六)",
                        },
                        {
                            text: "JS笔记之JS函数进阶(七)",
                            link: "/articles/web/javascript/JS笔记之JS函数进阶(七)",
                        },

                    ]
                },
                {
                    text: "JS原型继承",
                    collapsed: false,
                    items: [
                        {
                            text: "JS笔记之JS原型继承(一)",
                            link: "/articles/web/javascript/JS笔记之JS原型继承(一)",
                        },
                        {
                            text: "JS笔记之JS原型继承(二)",
                            link: "/articles/web/javascript/JS笔记之JS原型继承(二)",
                        },
                        {
                            text: "JS笔记之JS原型继承(三)",
                            link: "/articles/web/javascript/JS笔记之JS原型继承(三)",
                        },
                        {
                            text: "JS笔记之JS原型继承(四)",
                            link: "/articles/web/javascript/JS笔记之JS原型继承(四)",
                        },


                    ]
                },
                {
                    text: "JS类",
                    collapsed: false,
                    items: [
                        {
                            text: "JS笔记之JS类(一)",
                            link: "/articles/web/javascript/JS笔记之JS类(一)",
                        },
                        {
                            text: "JS笔记之JS类(二)",
                            link: "/articles/web/javascript/JS笔记之JS类(二)",
                        },
                        {
                            text: "JS笔记之JS类(三)",
                            link: "/articles/web/javascript/JS笔记之JS类(三)",
                        },
                        {
                            text: "JS笔记之JS类(四)",
                            link: "/articles/web/javascript/JS笔记之JS类(四)",
                        },
                        {
                            text: "JS笔记之JS类(五)",
                            link: "/articles/web/javascript/JS笔记之JS类(五)",
                        },
                    ]
                },

            ],
            "/articles/web/css/": [
                {
                    text: "CSS布局",
                    collapsed: false,
                    items: [

                        {
                            text: "CSS布局-CSS盒模型",
                            link: "/articles/web/css/CSS盒模型",
                        },
                        {
                            text: "CSS布局-弹性盒子与网格布局",
                            link: "/articles/web/css/CSS布局-弹性盒子与网格布局",
                        },
                        {
                            text: "CSS布局-浮动与定位多列布局",
                            link: "/articles/web/css/CSS布局-浮动与定位多列布局",
                        },



                    ]
                },
                {
                    text: "CSS文本",
                    collapsed: false,
                    items: [
                        {
                            text: "CSS文本样式",
                            link: "/articles/web/css/CSS文本样式",
                        }
                    ]
                },
                {
                    text: "CSS基础",
                    collapsed: false,
                    items: [
                        {
                            text: "CSS选择器",
                            link: "/articles/web/css/CSS选择器",
                        },
                        {
                            text: "CSS层叠与继承",
                            link: "/articles/web/css/CSS层叠与继承"
                        },
                        {
                            text: "CSS媒体查询",
                            link: "/articles/web/css/CSS媒体查询"
                        },
                        {
                            text: "CSS背景和边框",
                            link: "/articles/web/css/CSS背景和边框"
                        },
                    ]
                },
                {
                    text: "CSS动画",
                    collapsed: false,
                    items: [
                        {
                            text: "CSS转换过渡和动画",
                            link: "/articles/web/css/CSS转换过渡和动画",
                        },
                    ]
                },
            ],
            "/articles/web/typescript/": [
                {
                    text: "数据类型",
                    collapsed: false,
                    items: [

                        {
                            text: "JS笔记之JS数据类型(一)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(一)",
                        },
                        {
                            text: "JS笔记之JS数据类型(二)",
                            link: "/articles/web/javascript/JS笔记之JS数据类型(二)",
                        },



                    ]
                },
                {
                    text: "JS对象",
                    collapsed: false,
                    items: [
                        {
                            text: "JS笔记之JS对象基础知识(一)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(一)",
                        },
                        {
                            text: "JS笔记之JS对象基础知识(二)",
                            link: "/articles/web/javascript/JS笔记之JS对象基础知识(二)",
                        },
                    ]
                },
            ]

        },

        // 社交链接
        socialLinks: [
            { icon: "github", link: "https://github.com/chaizz/vitepress-starter" },
            { icon: "twitter", link: "https://twitter.com/" },
        ],

        // 文档更新时间
        lastUpdated: true,

        // 文档最后更新时间前的文本
        lastUpdatedText: '上次更新',

        // 右侧大纲级别
        outline: [2, 6],

        // 页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present chaizz'
        }
    },

    algolia: {
        apiKey: "未申请",
        indexName: "interview-questions-record",
        // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
        appId: "未申请"
    }

}