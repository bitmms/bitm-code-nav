import {getAssetUrl} from '../utils/assetUrl.js'

function resolveAssetPaths(data) {
    if (Array.isArray(data)) {
        data.forEach(resolveAssetPaths)
    } else if (data && typeof data === 'object') {
        if (data.iconSvg) data.iconSvg = getAssetUrl(data.iconSvg)
        if (data.logo) data.logo = getAssetUrl(data.logo)
        if (data.children) resolveAssetPaths(data.children)
        if (data.list) resolveAssetPaths(data.list)
    }
}

const _websiteConfigData = [
    {
        "category": "站长推荐",
        "iconSvg": "svg/nav/recommend.svg",
        "children": [
            {
                "name": "哔哩哔哩",
                "href": "https://www.bilibili.com",
                "desc": "弹幕视频社区，互动性强",
                "logo": "svg/website/bilibili.svg"
            },
            {
                "name": "抖音",
                "href": "https://www.douyin.com",
                "desc": "短视频平台，记录美好生活",
                "logo": "svg/website/douyin.svg"
            },
            {
                "name": "虎牙直播",
                "href": "https://www.huya.com",
                "desc": "游戏直播为主，弹幕互动",
                "logo": "svg/website/huya.svg"
            },
            {
                "name": "微信读书",
                "href": "https://weread.qq.com/",
                "desc": "腾讯电子书阅读平台",
                "logo": "svg/website/weixin-book.svg"
            },
            {
                "name": "语雀",
                "href": "https://www.yuque.com",
                "desc": "阿里系笔记与知识库",
                "logo": "svg/website/yuque.svg"
            },
            {
                "name": "Lemon live",
                "href": "https://lemonlive.pages.dev/",
                "desc": "聚合直播网站，支持虎牙、斗鱼、抖音、B站",
                "logo": "svg/website/lemonlive.svg"
            },
            {
                "name": "Online-GDB",
                "href": "https://www.onlinegdb.com/",
                "desc": "在线编译器与调试工具",
                "logo": "svg/website/onlinegdb.svg"
            },
            {
                "name": "百度翻译",
                "href": "https://fanyi.baidu.com",
                "desc": "百度旗下的专业翻译工具",
                "logo": "svg/website/baidu-fanyi.svg"
            },
            {
                "name": "微信文件传输助手",
                "href": "https://filehelper.weixin.qq.com/",
                "desc": "微信文件传输助手网页版",
                "logo": "svg/website/wx-filehelper.svg"
            },
            {
                "name": "文件转化器",
                "href": "https://www.freeconvert.com/zh",
                "desc": "在线格式转换工具",
                "logo": "svg/website/file-convert.svg"
            },
            {
                "name": "QQ 邮箱",
                "href": "https://wx.mail.qq.com",
                "desc": "微信扫码登录的邮箱",
                "logo": "svg/website/qq-email.svg"
            },
            {
                "name": "力扣",
                "href": "https://leetcode.cn",
                "desc": "全球求职刷题知名平台",
                "logo": "svg/website/acm-leetcode.svg"
            },
            {
                "name": "Github",
                "href": "https://github.com",
                "desc": "全球最大开源项目托管平台",
                "logo": "svg/website/github.svg"
            },
            {
                "name": "打字练习",
                "href": "https://dazidazi.com",
                "desc": "在线盲打速度训练",
                "logo": "svg/website/dazi.svg"
            },
            {
                "name": "Google AdSense",
                "href": "https://adsense.google.com/adsense",
                "desc": "谷歌广告服务",
                "logo": "svg/website/google-ads.svg"
            },
            {
                "name": "555电影",
                "href": "https://zxdy5.top",
                "desc": "在线影视免费观看",
                "logo": "svg/website/555-movie.svg"
            }
        ]
    },
    {
        "category": "语言模型",
        "iconSvg": "svg/nav/llm.svg",
        "children": [
            {
                "name": "豆包",
                "href": "https://www.doubao.com",
                "desc": "字节跳动 AI 对话助手",
                "logo": "svg/website/ai-llm-doubao.svg"
            },
            {
                "name": "通义千问",
                "href": "https://www.qianwen.com/",
                "desc": "阿里云 AI 对话模型",
                "logo": "svg/website/ai-llm-qianwen.svg"
            },
            {
                "name": "DeepSeek",
                "href": "https://chat.deepseek.com",
                "desc": "开源推理大模型，编程能力强",
                "logo": "svg/website/ai-llm-deepseek.svg"
            },
            {
                "name": "ChatGPT",
                "href": "https://chatgpt.com",
                "desc": "OpenAI 旗舰对话模型",
                "logo": "svg/website/ai-llm-chatgpt.svg"
            },
            {
                "name": "文心一言",
                "href": "https://yiyan.baidu.com",
                "desc": "百度 AI 对话助手",
                "logo": "svg/website/ai-llm-yiyan.svg"
            },
            {
                "name": "Kimi",
                "href": "https://www.kimi.com",
                "desc": "月之暗面超长文本模型",
                "logo": "svg/website/ai-llm-kimi.svg"
            },
            {
                "name": "元宝",
                "href": "https://yuanbao.tencent.com/chat",
                "desc": "腾讯混元 AI 对话助手",
                "logo": "svg/website/ai-llm-yuanbao.svg"
            },
            {
                "name": "智谱清言",
                "href": "https://chatglm.cn/main/alltoolsdetail",
                "desc": "智谱 GLM 模型对话平台",
                "logo": "svg/website/ai-llm-glm.svg"
            },
            {
                "name": "讯飞星火",
                "href": "https://xinghuo.xfyun.cn/desk",
                "desc": "讯飞认知大模型平台",
                "logo": "svg/website/ai-llm-xinghuo.svg"
            },
            {
                "name": "Arena AI",
                "href": "https://arena.ai",
                "desc": "大模型 AI 竞技场",
                "logo": "svg/website/ai-llm-arena.svg"
            },
            {
                "name": "灵芽API",
                "href": "https://api.lingyaai.cn/",
                "desc": "一站式对接各种大模型",
                "logo": "svg/website/ai-llm-lingyaai.png"
            }
        ]
    },
    {
        "category": "技术社区",
        "iconSvg": "svg/nav/community.svg",
        "children": [
            {
                "name": "博客园",
                "href": "https://www.cnblogs.com",
                "desc": "开发者知识分享社区",
                "logo": "svg/website/cnblogs.svg"
            },
            {
                "name": "掘金",
                "href": "https://juejin.cn",
                "desc": "中文开发者技术社区",
                "logo": "svg/website/juejin.svg"
            },
            {
                "name": "CSDN",
                "href": "https://www.csdn.net",
                "desc": "中文 IT 技术交流平台",
                "logo": "svg/website/csdn.svg"
            },
            {
                "name": "思否",
                "href": "https://segmentfault.com",
                "desc": "专业开发者技术社区",
                "logo": "svg/website/segmentfault.svg"
            },
            {
                "name": "Stack Overflow",
                "href": "https://stackoverflow.com/questions",
                "desc": "全球最大技术问答平台",
                "logo": "svg/website/stackoverflow.svg"
            }
        ]
    },
    {
        "category": "中央仓库",
        "iconSvg": "svg/nav/central-repository.svg",
        "children": [
            {
                "name": "Github",
                "href": "https://github.com",
                "desc": "全球最大开源项目托管平台",
                "logo": "svg/website/github.svg"
            },
            {
                "name": "Gitee",
                "href": "https://gitee.com",
                "desc": "国内主流代码托管平台",
                "logo": "svg/website/gitee.svg"
            },
            {
                "name": "Ollama",
                "href": "https://ollama.com",
                "desc": "本地运行大语言模型的工具",
                "logo": "svg/website/ollama.svg"
            },
            {
                "name": "Vercel",
                "href": "https://vercel.com",
                "desc": "前端项目部署与托管平台",
                "logo": "svg/website/vercel.svg"
            },
            {
                "name": "Nuget",
                "href": "https://www.nuget.org",
                "desc": ".NET 生态包管理器",
                "logo": "svg/website/repo-nuget.svg"
            },
            {
                "name": "Maven Repository",
                "href": "https://mvnrepository.com",
                "desc": "Java 依赖库下载中心",
                "logo": "svg/website/repo-maven.svg"
            },
            {
                "name": "npm",
                "href": "https://www.npmjs.com",
                "desc": "Node.js 包管理平台",
                "logo": "svg/website/repo-npm.svg"
            },
            {
                "name": "pip",
                "href": "https://pypi.org",
                "desc": "Python 官方包索引仓库",
                "logo": "svg/website/repo-pip.svg"
            },
            {
                "name": "Docker",
                "href": "https://hub.docker.com",
                "desc": "Docker 官方镜像仓库",
                "logo": "svg/website/repo-docker.svg"
            },
            {
                "name": "OpenHarmony 三方库",
                "href": "https://ohpm.openharmony.cn",
                "desc": "鸿蒙生态第三方组件仓库",
                "logo": "svg/website/repo-harmonyos.svg"
            }
        ]
    },
    {
        "category": "算法学习",
        "iconSvg": "svg/nav/acm.svg",
        "children": [
            {
                "name": "AcWing",
                "href": "https://www.acwing.com",
                "desc": "程序员刷题与课程学习平台",
                "logo": "svg/website/acm-acwing.svg"
            },
            {
                "name": "董晓算法",
                "href": "https://space.bilibili.com/517494241",
                "desc": "B站最好的算法学习博主",
                "logo": "svg/website/acm-ds.svg"
            },
            {
                "name": "洛谷",
                "href": "https://www.luogu.com.cn",
                "desc": "OIer 的刷题与交流社区",
                "logo": "svg/website/acm-luogu.svg"
            },
            {
                "name": "力扣",
                "href": "https://leetcode.cn",
                "desc": "全球求职刷题知名平台",
                "logo": "svg/website/acm-leetcode.svg"
            },
            {
                "name": "牛客竞赛",
                "href": "https://ac.nowcoder.com",
                "desc": "算法笔试与竞赛平台",
                "logo": "svg/website/acm-nowcoder.svg"
            },
            {
                "name": "OI Wiki",
                "href": "https://oi-wiki.org",
                "desc": "信息学竞赛知识汇总站",
                "logo": "svg/website/acm-oi-wiki.svg"
            },
            {
                "name": "Codeforces",
                "href": "https://codeforces.com",
                "desc": "国际顶尖算法竞赛平台",
                "logo": "svg/website/acm-codeforces.svg"
            },
            {
                "name": "杭电 OJ",
                "href": "https://acm.hdu.edu.cn",
                "desc": "题量丰富的老牌 OJ 平台",
                "logo": "svg/website/acm-hdu.svg"
            }
        ]
    },
    {
        "category": "镜像加速",
        "iconSvg": "svg/nav/mirror.svg",
        "children": [
            {
                "name": "轩辕镜像",
                "href": "https://xuanyuan.cloud",
                "desc": "专业 Docker 镜像加速服务",
                "logo": "svg/website/mirrot-xuanyuan.svg"
            },
            {
                "name": "阿里云镜像站",
                "href": "https://developer.aliyun.com/mirror",
                "desc": "阿里开源镜像服务平台",
                "logo": "svg/website/mirrot-alibaba.svg"
            },
            {
                "name": "华为云镜像站",
                "href": "https://mirrors.huaweicloud.com",
                "desc": "华为云开源软件镜像源",
                "logo": "svg/website/mirrot-huawei.svg"
            },
            {
                "name": "腾讯云镜像站",
                "href": "https://mirrors.cloud.tencent.com",
                "desc": "腾讯云软件源镜像服务",
                "logo": "svg/website/mirrot-tencent.svg"
            },
            {
                "name": "网易开源镜像站",
                "href": "https://mirrors.163.com",
                "desc": "网易云开源镜像站",
                "logo": "svg/website/mirror-163.svg"
            },
            {
                "name": "清华镜像站",
                "href": "https://mirrors.tuna.tsinghua.edu.cn",
                "desc": "清华大学开源镜像平台",
                "logo": "svg/website/mirror-tsinghua.svg"
            },
            {
                "name": "北大镜像站",
                "href": "https://mirrors.pku.edu.cn/Mirrors",
                "desc": "北京大学开源镜像服务",
                "logo": "svg/website/mirror-pku.svg"
            },
            {
                "name": "中科大镜像站",
                "href": "https://mirrors.ustc.edu.cn",
                "desc": "中科大开源镜像平台",
                "logo": "svg/website/mirror-ustc.svg"
            }
        ]
    },
    {
        "category": "图标素材",
        "iconSvg": "svg/nav/icon.svg",
        "children": [
            {
                "name": "阿里巴巴矢量图标库",
                "href": "https://www.iconfont.cn",
                "desc": "阿里免费图标资源库",
                "logo": "svg/website/icon-alibaba-iconfont.svg"
            },
            {
                "name": "Emoji 大全",
                "href": "https://www.emojiall.com/zh-hans",
                "desc": "Emoji 中文释义及用法",
                "logo": "svg/website/icon-emoji.svg"
            },
            {
                "name": "免费图标",
                "href": "https://icon-icons.com/zh",
                "desc": "多格式免费图标下载",
                "logo": "svg/website/icon-free-icons.svg"
            },
            {
                "name": "菜鸟图标",
                "href": "https://icon.sucai999.com",
                "desc": "免费商用矢量图标资源",
                "logo": "svg/website/icon-cainiao.svg"
            },
            {
                "name": "ByteDance IconPark",
                "href": "https://iconpark.oceanengine.com",
                "desc": "字节免费图标资源库",
                "logo": "svg/website/icon-iconpark.svg"
            },
            {
                "name": "大学矢量校徽",
                "href": "https://www.urongda.com",
                "desc": "全国高校矢量校徽资源库",
                "logo": "svg/website/icon-uni-logo.svg"
            },
            {
                "name": "免费商用字体汇总",
                "href": "https://github.com/wordshub/free-font",
                "desc": "开源免费可商用字体合集",
                "logo": "svg/website/icon-free-font.svg"
            }
        ]
    },
    {
        "category": "云服务商",
        "iconSvg": "svg/nav/cloudServices.svg",
        "children": [
            {
                "name": "SQLPub",
                "href": "https://www.sqlpub.com",
                "desc": "国内免费的 MySQL 云服务",
                "logo": "svg/website/cloud-service-of-sqlpub.svg"
            },
            {
                "name": "db4free",
                "href": "https://www.db4free.net/",
                "desc": "免费的 MySQL 数据库",
                "logo": "svg/website/cloud-service-of-db4free.svg"
            },
            {
                "name": "Cloud-Redis",
                "href": "https://cloud.redis.io/",
                "desc": "免费的 Redis 数据库",
                "logo": "svg/website/cloud-service-of-cloud-redis.svg"
            },
            {
                "name": "华为云",
                "href": "https://www.huaweicloud.com",
                "desc": "华为企业级云服务平台",
                "logo": "svg/website/cloud-service-of-huawei.svg"
            },
            {
                "name": "阿里云",
                "href": "https://www.aliyun.com",
                "desc": "阿里企业级云服务平台",
                "logo": "svg/website/cloud-service-of-alibaba.svg"
            },
            {
                "name": "腾讯云",
                "href": "https://cloud.tencent.com",
                "desc": "腾讯企业级云服务平台",
                "logo": "svg/website/cloud-service-of-tencent.svg"
            },
            {
                "name": "京东云",
                "href": "https://www.jdcloud.com",
                "desc": "京东企业级云服务平台",
                "logo": "svg/website/cloud-service-of-jd.svg"
            },
            {
                "name": "百度云",
                "href": "https://cloud.baidu.com",
                "desc": "百度企业级云服务平台",
                "logo": "svg/website/cloud-service-of-baidu-ai.svg"
            },
            {
                "name": "火山引擎",
                "href": "https://www.volcengine.com",
                "desc": "字节跳动企业级云服务平台",
                "logo": "svg/website/cloud-service-of-volcengine.svg"
            },
            {
                "name": "七牛云",
                "href": "https://www.qiniu.com",
                "desc": "专注存储与 CDN 服务",
                "logo": "svg/website/cloud-service-of-qiniu.svg"
            }
        ]
    },
    {
        "category": "魔法工具",
        "iconSvg": "svg/nav/magic.svg",
        "children": [
            {
                "name": "网际快车",
                "href": "https://快车.com",
                "desc": "跨境网络加速服务",
                "logo": "svg/website/magic-vpn.svg"
            }
        ]
    },
    {
        "category": "各种云盘",
        "iconSvg": "svg/nav/cloudDrive.svg",
        "children": [
            {
                "name": "阿里云盘",
                "href": "https://www.alipan.com",
                "desc": "不限速，界面简洁易用",
                "logo": "svg/website/cloud-drive-of-alibaba.svg"
            },
            {
                "name": "百度网盘",
                "href": "https://pan.baidu.com",
                "desc": "功能强大，资源分享广泛",
                "logo": "svg/website/cloud-drive-of-baidu.svg"
            },
            {
                "name": "迅雷云盘",
                "href": "https://pan.xunlei.com/login",
                "desc": "支持边下边播，资源丰富",
                "logo": "svg/website/cloud-drive-of-xunlei.svg"
            }
        ]
    },
    {
        "category": "技术文档",
        "iconSvg": "svg/nav/document.svg",
        "children": [
            {
                "name": "微软技术文档",
                "href": "https://learn.microsoft.com/zh-cn/docs/",
                "desc": "微软全系产品技术文档中心",
                "logo": "svg/website/doc-mc.svg"
            },
            {
                "name": "数据库内核月报",
                "href": "http://mysql.taobao.org/monthly/",
                "desc": "阿里数据库内核技术月刊",
                "logo": "svg/website/doc-rds.svg"
            },
            {
                "name": "Vue",
                "href": "https://cn.vuejs.org",
                "desc": "渐进式 JavaScript 框架",
                "logo": "svg/website/doc-vue3.svg"
            },
            {
                "name": "React",
                "href": "https://zh-hans.react.dev/learn",
                "desc": "React 官方文档",
                "logo": "svg/website/doc-react.svg"
            },
            {
                "name": "TDesign",
                "href": "https://tdesign.tencent.com",
                "desc": "为设计师 & 开发者打造工作美学",
                "logo": "svg/website/doc-tdesign.svg"
            },
            {
                "name": "Element UI",
                "href": "https://element.eleme.cn/#/zh-CN",
                "desc": "基于 Vue 的桌面端组件库",
                "logo": "svg/website/doc-element-ui.svg"
            },
            {
                "name": "Ant Design",
                "href": "https://ant.design/",
                "desc": "AI 友好的「设计系统」",
                "logo": "svg/website/doc-antd-vue.svg"
            },
            {
                "name": "Arco Design",
                "href": "https://arco.design",
                "desc": "字节跳动出品的企业级设计系统",
                "logo": "svg/website/doc-arco-design.svg"
            },
            {
                "name": "Axios",
                "href": "https://www.axios-http.cn/docs/intro",
                "desc": "Axios 官方文档",
                "logo": "svg/website/doc-axios.svg"
            },
            {
                "name": "AJAX 教程",
                "href": "https://www.runoob.com/ajax/ajax-tutorial.html",
                "desc": "AJAX 菜鸟教程",
                "logo": "svg/website/doc-ajax.svg"
            },
            {
                "name": "VueUse",
                "href": "https://vueuse.org/",
                "desc": "基础 Vue 组合式工具的集合",
                "logo": "svg/website/doc-vueuse.svg"
            },
            {
                "name": "MDN Web Docs",
                "href": "https://developer.mozilla.org/zh-CN/docs/Learn_web_development",
                "desc": "MDN Web 开发学习文档",
                "logo": "svg/website/doc-mdn.svg"
            },
            {
                "name": "Nuxt.js",
                "href": "https://nuxt.com",
                "desc": "Nuxt.js 官方文档",
                "logo": "svg/website/doc-nuxt.svg"
            },
            {
                "name": "Next.js",
                "href": "https://www.nextjs.cn",
                "desc": "Next.js 官方文档",
                "logo": "svg/website/doc-next.svg"
            },
            {
                "name": "Chart.js",
                "href": "https://chartjs.cn",
                "desc": "Chart.js 官方文档",
                "logo": "svg/website/doc-chart.svg"
            },
            {
                "name": "ECharts",
                "href": "https://echarts.apache.org/zh/index.html",
                "desc": "ECharts 官方文档",
                "logo": "svg/website/doc-echarts.svg"
            },
            {
                "name": "Electron",
                "href": "https://www.electronjs.org/zh",
                "desc": "Electron 官方文档",
                "logo": "svg/website/doc-electron.svg"
            },
            {
                "name": "Cocos Creator",
                "href": "https://www.cocos.com/creator",
                "desc": "Cocos Creator 官方文档",
                "logo": "svg/website/doc-cocos.svg"
            },
            {
                "name": "PostgreSQL",
                "href": "https://www.postgresql.org",
                "desc": "PostgreSQL 官方网站",
                "logo": "svg/website/doc-postgresql.svg"
            },
            {
                "name": "FreeSWITCH",
                "href": "https://rts.cn/freeswitch",
                "desc": "FreeSWITCH 相关资源",
                "logo": "svg/website/doc-freeswitch.svg"
            }
        ]
    }
]
const _searchConfigData = {
    "searchResultIsBlank": true,
    "list": [
        {
            "name": "bing",
            "href": "https://cn.bing.com/search?ensearch=0&q=",
            "logo": "svg/search/search-bing.svg",
            "desc": "必应搜索"
        },
        {
            "name": "google",
            "href": "https://www.google.com/search?q=",
            "logo": "svg/search/search-google.svg",
            "desc": "谷歌搜索"
        },
        {
            "name": "csdn",
            "href": "https://so.csdn.net/so/search?q=",
            "logo": "svg/website/csdn.svg",
            "desc": "CSDN 搜索"
        },
        {
            "name": "cnblogs",
            "href": "https://zzkx.cnblogs.com/s?w=",
            "logo": "svg/website/cnblogs.svg",
            "desc": "博客园搜索"
        },
        {
            "name": "segmentfault",
            "href": "https://segmentfault.com/search?q=",
            "logo": "svg/website/segmentfault.svg",
            "desc": "思否搜索"
        },
        {
            "name": "stackoverflow",
            "href": "https://stackoverflow.com/search?q=",
            "logo": "svg/website/stackoverflow.svg",
            "desc": "stackoverflow 搜索"
        },
        {
            "name": "jianshu",
            "href": "https://www.jianshu.com/search?q=",
            "logo": "svg/website/jianshu.svg",
            "desc": "简书搜索"
        },
        {
            "name": "juejin",
            "href": "https://juejin.cn/search?query=",
            "logo": "svg/website/juejin.svg",
            "desc": "掘金搜索"
        },
        {
            "name": "iconfont",
            "href": "https://www.iconfont.cn/search/index?searchType=icon&q=",
            "logo": "svg/website/icon-alibaba-iconfont.svg",
            "desc": "阿里图标搜索"
        },
        {
            "name": "github",
            "href": "https://github.com/search?q=",
            "logo": "svg/website/github.svg",
            "desc": "Github 搜索"
        },
        {
            "name": "gitee",
            "href": "https://so.gitee.com/?q=",
            "logo": "svg/website/gitee.svg",
            "desc": "Gitee 搜索"
        },
        {
            "name": "zhihu",
            "href": "https://www.zhihu.com/search?type=content&q=",
            "logo": "svg/search/search-zhihu.svg",
            "desc": "知乎搜索"
        },
        {
            "name": "baidu",
            "href": "https://www.baidu.com/s?wd=",
            "logo": "svg/search/search-baidu.svg",
            "desc": "百度搜索"
        },
        {
            "name": "360",
            "href": "https://www.so.com/s?q=",
            "logo": "svg/search/search-360.svg",
            "desc": "360搜索"
        },
        {
            "name": "bilibili",
            "href": "https://search.bilibili.com/all?keyword=",
            "logo": "svg/website/bilibili.svg",
            "desc": "哔哩哔哩搜索"
        },
        {
            "name": "docker",
            "href": "https://hub.docker.com/search?q=",
            "logo": "svg/website/repo-docker.svg",
            "desc": "Docker 镜像搜索"
        },
        {
            "name": "maven",
            "href": "https://mvnrepository.com/search?q=",
            "logo": "svg/website/repo-maven.svg",
            "desc": "Maven 搜索"
        },
        {
            "name": "Nuget",
            "href": "https://www.nuget.org/packages?q=",
            "logo": "svg/website/repo-nuget.svg",
            "desc": "NuGet 是 .NET 的包管理器"
        }
    ]
}

const websiteConfigData = structuredClone(_websiteConfigData)
const searchConfigData = structuredClone(_searchConfigData)

resolveAssetPaths(websiteConfigData)
resolveAssetPaths(searchConfigData)

export {websiteConfigData, searchConfigData}
