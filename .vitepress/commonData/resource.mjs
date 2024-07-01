const docsData = [
  {
    title: "Vue3.0",
    href: "https://v3.cn.vuejs.org/",
    desc: "易学易用，性能出色，适用场景丰富的 Web 前端框架",
    icon: "vscode-icons:file-type-vue",
  },
  {
    title: "MDN",
    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
    desc: "MDN文档",
    icon: "logos:mdn",
  },
  {
    title: "Vuex",
    href: "https://next.router.vuejs.org/zh/",
    desc: "Vuex中文文档",
    icon: "skill-icons:vuejs-light",
  },
  {
    title: "Vue-Router",
    href: "https://router.vuejs.org/zh/",
    desc: "Vue-Router中文文档",
    icon: "vscode-icons:file-type-vueconfig",
  },
  {
    title: "Vue-Cli",
    href: "https://cli.vuejs.org/zh/",
    desc: "Vue-Cli中文文档",
    icon: "skill-icons:vuejs-dark",
  },
  {
    title: "Pinia",
    href: "https://pinia.vuejs.org/zh/",
    desc: "符合直觉的 Vue.js 状态管理库",
    icon: "logos:pinia",
  },
  {
    title: "Node.js",
    href: "https://nodejs.org/zh-cn/",
    desc: "Node.js中文文档",
    icon: "logos:nodejs",
  },
  {
    title: "Java",
    href: "https://www.java.com/zh-CN/",
    desc: "Java API DOC",
    icon: "devicon:java-wordmark",
  },
  {
    title: "axios",
    href: "https://axios-http.com/zh-cn/docs/intro",
    desc: "axios中文文档",
    icon: "logos:axios",
  },
  {
    title: "TypeScript",
    href: "https://typescript.bootcss.com/",
    desc: "TypeScript中文文档",
    icon: "fluent:code-ts-rectangle-16-regular",
    color: "color: #00B8F6",
  },
  {
    title: "React",
    href: "https://react.docschina.org/",
    desc: "React中文文档",
    icon: "logos:react",
  },
  {
    title: "mongoDB",
    href: "https://www.mongodb.com/docs/manual/",
    desc: "MongoDB中文文档",
    icon: "devicon:mongodb-wordmark",
  },
  {
    title: "MySQL",
    href: "https://dev.mysql.com/doc/",
    desc: "MySQL中文文档",
    icon: "logos:mysql",
  },
  {
    title: "Redis",
    href: "https://redis.io/docs/",
    desc: "Redis中文文档",
    icon: "devicon:redis-wordmark",
  },
  {
    title: "uni-app",
    href: "https://uniapp.dcloud.net.cn/",
    desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架",
    icon: "carbon:app",
    color: "color: #2B9939",
  },
  {
    title: "W3School",
    href: "https://www.w3school.com.cn/",
    desc: "W3School",
    icon: "simple-icons:w3schools",
    color: "color: #BD2D2F",
  },
];

const communityData = [
  {
    title: "stack overflow",
    href: "https://stackoverflow.com/",
    desc: "Stack Overflow是最受程序员欢迎的IT技术问答网站",
    icon: "devicon:stackoverflow",
  },
  {
    title: "稀土掘金",
    href: "https://juejin.cn/",
    desc: "开发者社区",
    icon: "simple-icons:juejin",
    color: "color: #1F80FF",
  },
  {
    title: "开源中国",
    href: "https://www.oschina.net/",
    desc: "中国版的Github，国内最大的开源技术社区",
    icon: "arcticons:china-construction-bank",
    color: "color: #3CA054",
  },
  {
    title: "CSDN",
    href: "https://www.csdn.net/",
    desc: "国内开发者社区",
    icon: "logos:zulip-icon",
  },
  {
    title: "SegmentFault",
    href: "https://segmentfault.com/",
    desc: "开放式协作的问答社区",
    icon: "logos:segment",
  },
  {
    title: "Github",
    href: "https://github.com/",
    desc: "Github",
    icon: "logos:github-icon",
  },
  {
    title: "阿里云开发者社区",
    href: "https://developer.aliyun.com/",
    desc: "阿里云开发者社区",
    icon: "ant-design:aliyun-outlined",
    color: "color: #ef6400",
  },
  {
    title: "腾讯云开发者社区",
    href: "https://cloud.tencent.com/developer",
    desc: "腾讯云开发者社区",
    icon: "emojione:cloud",
  },
  {
    title: "Gitee",
    href: "https://gitee.com/",
    desc: "国内代码托管平台",
    icon: "simple-icons:gitee",
    color: "color: #C71D23",
  },
  {
    title: "GitLab",
    href: "https://gitlab.cn/",
    desc: "一站式DevOps平台",
    icon: "logos:gitlab",
    color: "color: #C71D23",
  },
  {
    title: "51CTO",
    href: "https://www.51cto.com/",
    desc: "中国领先的IT技术网站",
    icon: "streamline:ai-technology-spark",
    color: "color: #C71D23",
  },
  {
    title: "InfoQ",
    href: "https://xie.infoq.cn/",
    desc: "写作社区-专业技术博客社区",
    icon: "simple-icons:infoq",
    color: "color: #0B74DB",
  },
];

const componentData = [
  {
    title: "Element Plus",
    href: "https://element-plus.org/zh-CN/",
    desc: "一个Vue3 UI 框架",
    icon: "ep:element-plus",
    color: "color: #00B8F6",
  },
  {
    title: "Ant Design Vue",
    href: "https://www.antdv.com/docs/vue/introduce-cn",
    desc: "持续探索企业级应用的最佳 UI 实践",
    icon: "logos:ant-design",
  },
  {
    title: "TDesign",
    href: "https://tdesign.tencent.com/",
    desc: "TDesign 企业级设计体系",
    icon: "icon-park-outline:bydesign",
    color: "color: #00B8F6",
  },
  {
    title: "Arco Design",
    href: "https://arco.design/vue/docs/start",
    desc: "字节跳动的UI组件库",
    icon: "simple-icons:bytedance",
    color: "color: #00B8F6",
  },
  {
    title: "Vant",
    href: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
    desc: "轻量、可定制的移动端 Vue 组件库",
    icon: "logos:uikit",
  },
  {
    title: "Vuetify",
    href: "https://vuetifyjs.com/zh-Hans/",
    desc: "Vuetify is a no design skills required Open Source UI Library with beautifully handcrafted Vue Components.",
    icon: "devicon:vuetify",
  },
  {
    title: "Bootstrap",
    href: "https://www.bootcss.com/",
    desc: "简洁、直观、强悍的前端开发框架，让web开发更迅速、简单",
    icon: "devicon:bootstrap",
  },
  {
    title: "Swiper",
    href: "https://www.swiper.com.cn/",
    desc: "Swiper是纯javascript打造的滑动特效插件",
    icon: "simple-icons:swiper",
    color: "color: #194DE0",
  },
  {
    title: "iconify",
    href: "https://iconify.design/",
    desc: "Freedom to choose icons. All popular icon sets, one framework. Over 200,000 open source vector icons.",
    icon: "simple-icons:iconify",
    color: "color: #1769AA",
  },
  {
    title: "iconfont",
    href: "https://www.iconfont.cn/",
    desc: "阿里巴巴矢量图标库",
    icon: "logos:godot-icon",
  },
];

const learningPlatformData = [
  {
    title: "Bilibili",
    href: "https://www.bilibili.com/",
    desc: "Bilibili",
    icon: "ri:bilibili-line",
    color: "color: #00B8F6",
  },
  {
    title: "菜鸟教程",
    href: "https://www.runoob.com/",
    desc: "菜鸟教程",
    icon: "noto:bird",
  },
  {
    title: "阿里云",
    href: "https://www.aliyun.com/",
    desc: "阿里云",
    icon: "ant-design:aliyun-outlined",
    color: "color: #ef6400",
  },
  {
    title: "腾讯云",
    href: "https://cloud.tencent.com/",
    desc: "腾讯云",
    icon: "material-symbols:cloud-outline",
    color: "color: #01A4FF",
  },
  {
    title: "华为云",
    href: "https://www.huaweicloud.com/",
    desc: "华为云",
    icon: "cbi:huawei",
    color: "color: #E60315",
  },
];

export { docsData, communityData, componentData, learningPlatformData };