module.exports = {
    title: '编程纪元',
    description: '个人知识笔记~',
    themeConfig: {
        logo: "/orange.svg",

        // 导航栏
        nav: [
            { text: "其他", link: '/articles/Tools/VitePress搭建文档网站', activeMatch: '/其他/' },
            {
                text: "Python", items: [
                    {
                        items: [
                            {
                                text: "Python",
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
                text: "大前端", items: [
                    {
                        items: [
                            {
                                text: "JavaScript",
                                link: "/Go",
                            },
                            {
                                text: "CSS",
                                link: "/Go",
                            },
                        ],
                    },
                    {
                        items: [
                            {
                                text: "TypeScript",
                                link: "/Go",
                            }
                        ],
                    }
                ], activeMatch: '/大前端/'
            },
            {
                text: "数据库", items: [
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
                text: "操作系统/运维", items: [
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
                text: "Go", items: [
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
                text: "Rust", items: [
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
            { text: "关于", link: '/about/about', activeMatch: '/关于/' },
        ],

        // 侧边栏
        sidebar: {
            // "/": [
            //     {
            //         text: "JavaScript",
            //         items: [
            //             {
            //                 text: "JS笔记之JS对象基础知识(一)",
            //                 link: "/JavaScript/JS笔记之JS对象基础知识(一)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(二)",
            //                 link: "/JavaScript/JS笔记之JS对象基础知识(二)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(三)",
            //                 link: "/JavaScript/JS笔记之JS对象基础知识(三)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(四)",
            //                 link: "/JavaScript/JS笔记之JS对象基础知识(四)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(五)",
            //                 link: "/JavaScript/JS笔记之JS对象基础知识(五)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(六)",
            //                 link: "/JavaScript/JS笔记之JS对象基础知识(六)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(七)",
            //                 link: "/JavaScript/JS笔记之JS对象基础知识(七)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(八)",
            //                 link: "/JavaScript/JS笔记之JS对象基础知识(八)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(一)",
            //                 link: "/JavaScript/JS笔记之JS数据类型(一)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(二)",
            //                 link: "/JavaScript/JS笔记之JS数据类型(二)",
            //             },
            //         ],
            //     },
            //     {
            //         text: "Tools",
            //         items: [
            //             {
            //                 text: "VitePress搭建文档网站",
            //                 link: "/CSS/VitePress搭建文档网站",
            //             }
            //         ],
            //     },
            //     {
            //         text: "CSS",
            //         items: [
            //             {
            //                 text: "CSS媒体查询",
            //                 link: "/CSS/",
            //             },
            //         ],
            //     },
            //     {
            //         text: "Go",
            //         items: [
            //             {
            //                 text: "Gin",
            //                 link: "/Go",
            //             }
            //         ],
            //     },
            //     {
            //         text: "Rust",
            //         items: [
            //             {
            //                 text: "Deno",
            //                 link: "/Rust/Deno",
            //             },
            //         ],
            //     },
            //     {
            //         text: "Database",
            //         items: [
            //             {
            //                 text: "MySQL",
            //                 link: "/Database/MySQl",
            //             },
            //             {
            //                 text: "Redis",
            //                 link: "/Database/Redis",
            //             },
            //             {
            //                 text: "MongoDB",
            //                 link: "/Database/MongoDB",
            //             },
            //         ],
            //     },
            //     {
            //         text: "Linux",
            //         items: [
            //             {
            //                 text: "Ubuntu",
            //                 link: "/Linux/Ubuntu",
            //             },
            //             {
            //                 text: "Docker",
            //                 link: "/Linux/Docker",
            //             },
            //             {
            //                 text: "K8S",
            //                 link: "/Linux/K8S",
            //             },
            //         ],
            //     },
            // ],
            
            "/articles/python/python/": [
                {
                    text: "Python",
                    collapsible: true,
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
                    collapsible: true,
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
                    collapsible: true,
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
                    collapsible: true,
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
            ]

        },

        // 社交链接
        socialLinks: [
            { icon: "github", link: "..." },
            { icon: "twitter", link: "..." },
        ],
    },
    lastUpdated: true
}