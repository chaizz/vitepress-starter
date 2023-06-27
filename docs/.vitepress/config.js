module.exports = {
    lang: 'zh-CN',
    title: '编程纪元',
    description: '~',
    themeConfig: {
        logo: "/orange.svg",

        // 导航栏
        nav: [
            {
                text: "🥗 面试",
                items: [
                    {
                        text: "⚡️ Python",
                        link: "/articles/interview/python/",
                    },
                    {
                        text: "⚡️ Python框架",
                        link: "/articles/interview/pythonrframe/",
                    },
                    {
                        text: "⚡️ 数据库",
                        link: "/articles/interview/database/mysql",
                    },
                    {
                        text: "⚡️ 消息队列",
                        link: "/articles/interview/mq/rabbitmq",
                    },
                    {
                        text: "⚡️ Vue",
                        link: "/articles/interview/vue/",
                    },
                    {
                        text: "⚡️ React",
                        link: "/articles/interview/react/",
                    },
                    {
                        text: "⚡️ JS+TS",
                        link: "/articles/interview/jsts/",
                    },
                    {
                        text: "⚡️ 算法",
                        link: "/articles/interview/algo/",
                    },
                    {
                        text: "⚡️ 计算机基础+网络",
                        link: "/articles/interview/base/计算机网络",
                    },
                ],
                activeMatch: '/其他/'
            },
            { text: "🎆 其他", link: '/articles/tools/VitePress搭建文档网站', activeMatch: '/其他/' },
            {
                text: "🐍 Python", items: [
                    {
                        items: [
                            {
                                text: "⚡️ Python",
                                link: "/articles/python/pythonista/",
                            }
                        ],
                    }
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
                        link: "/articles/database/mysql/",
                    },
                    {
                        text: "Redis",
                        link: "/articles/database/redis/",
                    },
                    {
                        text: "PostgreSQL",
                        link: "/articles/database/postgresql/",
                    },
                    {
                        text: "MongoDB",
                        link: "/articles/database/mongodb/",
                    },
                    {
                        text: "Elasticsearch",
                        link: "/articles/database/elasticsearch/",
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
                                text: "🐳 Docker",
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

            //  导航栏 [其他] 对应侧边栏
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

            //  导航栏 [Python] 对应侧边栏
            "/articles/python/pythonista/": [
                {
                    text: "Python包管理器",
                    collapsed: false,
                    items: [

                        {
                            text: "Python新一代包管理解决方案-Rye",
                            link: "/articles/python/pythonista/Python新一代包管理解决方案-Rye",
                        },
                        {
                            text: "Python环境管理Poetry的使用",
                            link: "/articles/python/pythonista/Python环境管理Poetry的使用",
                        },

                    ]
                },
                {
                    text: "其他",
                    collapsed: false,
                    items: [
                        {
                            text: "Python第三方包Dynaconf",
                            link: "/articles/python/pythonista/Python第三方包Dynaconf",
                        },
                        {
                            text: "Jupyter-notebook的安装与基本使用",
                            link: "/articles/python/pythonista/Jupyter-notebook的安装与基本使用",
                        },
                        {
                            text: "Python代码规范（pep8-Google-style）",
                            link: "/articles/python/pythonista/Python代码规范（pep8-Google-style）",
                        },
                        {
                            text: "Python压缩图片作为缩略图",
                            link: "/articles/python/pythonista/Python压缩图片作为缩略图",
                        },

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

            //  导航栏 [大前端] 对应侧边栏
            // "/articles/web/javascript/": [
            //     {
            //         text: "数据类型",
            //         collapsed: false,
            //         items: [
            //             {
            //                 text: "JS笔记之JS数据类型(一)",
            //                 link: "/articles/web/javascript/JS笔记之JS数据类型(一)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(二)",
            //                 link: "/articles/web/javascript/JS笔记之JS数据类型(二)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(三)",
            //                 link: "/articles/web/javascript/JS笔记之JS数据类型(三)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(四)",
            //                 link: "/articles/web/javascript/JS笔记之JS数据类型(四)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(五)",
            //                 link: "/articles/web/javascript/JS笔记之JS数据类型(五)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(六)",
            //                 link: "/articles/web/javascript/JS笔记之JS数据类型(六)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(七)",
            //                 link: "/articles/web/javascript/JS笔记之JS数据类型(七)",
            //             },
            //             {
            //                 text: "JS笔记之JS数据类型(八)",
            //                 link: "/articles/web/javascript/JS笔记之JS数据类型(八)",
            //             },
            //         ]
            //     },
            //     {
            //         text: "JS对象",
            //         collapsed: false,
            //         items: [
            //             {
            //                 text: "JS笔记之JS对象基础知识(一)",
            //                 link: "/articles/web/javascript/JS笔记之JS对象基础知识(一)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(二)",
            //                 link: "/articles/web/javascript/JS笔记之JS对象基础知识(二)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(三)",
            //                 link: "/articles/web/javascript/JS笔记之JS对象基础知识(三)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(四)",
            //                 link: "/articles/web/javascript/JS笔记之JS对象基础知识(四)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(五)",
            //                 link: "/articles/web/javascript/JS笔记之JS对象基础知识(五)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(六)",
            //                 link: "/articles/web/javascript/JS笔记之JS对象基础知识(六)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(七)",
            //                 link: "/articles/web/javascript/JS笔记之JS对象基础知识(七)",
            //             },
            //             {
            //                 text: "JS笔记之JS对象基础知识(八)",
            //                 link: "/articles/web/javascript/JS笔记之JS对象基础知识(八)",
            //             },
            //         ]
            //     },
            //     {
            //         text: "JS函数",
            //         collapsed: false,
            //         items: [
            //             {
            //                 text: "JS笔记之JS函数进阶(一)",
            //                 link: "/articles/web/javascript/JS笔记之JS函数进阶(一)",
            //             },
            //             {
            //                 text: "JS笔记之JS函数进阶(二)",
            //                 link: "/articles/web/javascript/JS笔记之JS函数进阶(二)",
            //             },
            //             {
            //                 text: "JS笔记之JS函数进阶(三)",
            //                 link: "/articles/web/javascript/JS笔记之JS函数进阶(三)",
            //             },
            //             {
            //                 text: "JS笔记之JS函数进阶(四)",
            //                 link: "/articles/web/javascript/JS笔记之JS函数进阶(四)",
            //             },
            //             {
            //                 text: "JS笔记之JS函数进阶(五)",
            //                 link: "/articles/web/javascript/JS笔记之JS函数进阶(五)",
            //             },
            //             {
            //                 text: "JS笔记之JS函数进阶(六)",
            //                 link: "/articles/web/javascript/JS笔记之JS函数进阶(六)",
            //             },
            //             {
            //                 text: "JS笔记之JS函数进阶(七)",
            //                 link: "/articles/web/javascript/JS笔记之JS函数进阶(七)",
            //             },
            //
            //         ]
            //     },
            //     {
            //         text: "JS原型继承",
            //         collapsed: false,
            //         items: [
            //             {
            //                 text: "JS笔记之JS原型继承(一)",
            //                 link: "/articles/web/javascript/JS笔记之JS原型继承(一)",
            //             },
            //             {
            //                 text: "JS笔记之JS原型继承(二)",
            //                 link: "/articles/web/javascript/JS笔记之JS原型继承(二)",
            //             },
            //             {
            //                 text: "JS笔记之JS原型继承(三)",
            //                 link: "/articles/web/javascript/JS笔记之JS原型继承(三)",
            //             },
            //             {
            //                 text: "JS笔记之JS原型继承(四)",
            //                 link: "/articles/web/javascript/JS笔记之JS原型继承(四)",
            //             },
            //
            //
            //         ]
            //     },
            //     {
            //         text: "JS类",
            //         collapsed: false,
            //         items: [
            //             {
            //                 text: "JS笔记之JS类(一)",
            //                 link: "/articles/web/javascript/JS笔记之JS类(一)",
            //             },
            //             {
            //                 text: "JS笔记之JS类(二)",
            //                 link: "/articles/web/javascript/JS笔记之JS类(二)",
            //             },
            //             {
            //                 text: "JS笔记之JS类(三)",
            //                 link: "/articles/web/javascript/JS笔记之JS类(三)",
            //             },
            //             {
            //                 text: "JS笔记之JS类(四)",
            //                 link: "/articles/web/javascript/JS笔记之JS类(四)",
            //             },
            //             {
            //                 text: "JS笔记之JS类(五)",
            //                 link: "/articles/web/javascript/JS笔记之JS类(五)",
            //             },
            //             {
            //                 text: "JS笔记之JS类(六)",
            //                 link: "/articles/web/javascript/JS笔记之JS类(六)",
            //             },
            //         ]
            //     },
            //     {
            //         text: "JS错误处理",
            //         collapsed: false,
            //         items: [
            //             {
            //                 text: "JS笔记之JS错误处理(一)",
            //                 link: "/articles/web/javascript/JS笔记之JS错误处理(一)",
            //             },
            //             {
            //                 text: "JS笔记之JS错误处理(二)",
            //                 link: "/articles/web/javascript/JS笔记之JS错误处理(二)",
            //             },
            //         ]
            //     },
            //
            // ],
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
            ],


            // 导航栏 [数据库] 对应侧边栏
            "/articles/database/mysql/": [
                {
                    text: "MySQL基础",
                    collapsed: false,
                    items: [

                        {
                            text: "MySQL性能优化总结",
                            link: "/articles/database/mysql/MySQL性能优化总结",
                        }
                    ]
                },
                {
                    text: "MySQL事务和锁",
                    collapsed: false,
                    items: [
                        {
                            text: "MySQL的MVCC机制",
                            link: "/articles/database/mysql/MySQL的MVCC机制",
                        },
                        {
                            text: "MySQL事务与锁机制",
                            link: "/articles/database/mysql/MySQL事务与锁机制",
                        },
                    ]
                },
                {
                    text: "MySQL索引",
                    collapsed: false,
                    items: [
                        {
                            text: "MySQL索引原理",
                            link: "/articles/database/mysql/MySQL索引原理",
                        },
                        {
                            text: "MySQL索引问题",
                            link: "/articles/database/mysql/MySQL索引问题",
                        }
                    ]
                },
                {
                    text: "MySQL常见问题",
                    collapsed: false,
                    items: [
                        {
                            text: "Mysql 8.0 数据库无法远程连接",
                            link: "/articles/database/MySQL/Mysql 8.0 数据库无法远程连接",
                        }
                    ]
                },
            ],
            "/articles/database/redis/": [
                {
                    text: "Redis基础",
                    collapsed: false,
                    items: [

                        {
                            text: "Redis知识巩固",
                            link: "/articles/database/redis/Redis知识巩固",
                        }
                    ]
                },
                {
                    text: "Redis进阶",
                    collapsed: false,
                    items: [
                        {
                            text: "Redis底层原理",
                            link: "/articles/database/redis/Redis底层原理",
                        }
                    ]
                }
            ],

            // 导航栏 [面试] 对应侧边栏
            "/articles/interview/base/": [
                {
                    text: "计算机网络",
                    collapsed: false,
                    items: [

                        {
                            text: "计算机网络",
                            link: "/articles/interview/base/计算机网络",
                        }
                    ]
                },
                {
                    text: "Nginx",
                    collapsed: false,
                    items: [
                        {
                            text: "Nginx",
                            link: "/articles/interview/base/nginx",
                        }
                    ]
                },
            ],
            "/articles/interview/database/": [
                {
                    text: "MySQL",
                    collapsed: false,
                    items: [

                        {
                            text: "MySQL",
                            link: "/articles/interview/database/mysql",
                        }
                    ]
                },
                {
                    text: "Redis",
                    collapsed: false,
                    items: [
                        {
                            text: "Nginx",
                            link: "/articles/interview/database/redis",
                        }
                    ]
                },
            ],
            "/articles/interview/mq/": [
                {
                    text: "RabbitMQ",
                    collapsed: false,
                    items: [

                        {
                            text: "RabbitMQ",
                            link: "/articles/interview/mq/rabbitmq",
                        }
                    ]
                }
            ],

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
            copyright: 'Copyright © 2023-present chaizz <br> <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备20008035号-2</a>'
        },

        algolia: {
            apiKey: "04e97abfcc4f31f5c445d0994bcf3a8f",
            indexName: "ninth",
            // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
            appId: "VZ4G3IXPZP"
        }

    },
}