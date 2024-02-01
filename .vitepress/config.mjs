import { defineConfig } from 'vitepress';
import vueSidebar from "./menusidebar/vueSidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Knowledge Graph",
  description: "A knowledge summary for front-end.",
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: "最后更新于",
    outlineTitle: "目录大纲",
    outline: [1,6],
    logo: '../asset/img/logo.svg',
    i18nRouting: false,
    nav: [
      { text: '首页', link: '/' },
      {
        text: "前端", items: [
          { text: 'HTML', link: '/frontend/html', activeMatch: "/frontend/html" },
          { text: 'CSS', link: '/frontend/css', activeMatch: "/frontend/css" },
          { text: 'JavaScript', link: '/frontend/javascript', activeMatch: "/frontend/javascript" },
          { text: 'Vue.js', link: '/frontend/vue/', activeMatch: "/frontend/vue/" },
          { text: 'Promise(待开发)', link: '/' },
          { text: 'Node.js(待开发)', link: '/' },
          { text: 'TypeScript(待开发)', link: '/' },
        ]
      },
      {
        text: "后端", items: [
          { text: 'Java', link: '/' },
          { text: 'MySql', link: '/' },
        ]
      },
      { text: "技术博客", link: '/blog' },
      { text: "分享", link: '/share' },
      {
        text: "探索", items: [
          { text: "南天门", link: '/' },
        ]
      },
      { text: '交流社区', link: '/community' }
    ],
    sidebar: {
      "/frontend/vue/": vueSidebar
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: "All rights reserved.",
      copyright: "Copyright © 2023 HK Group."
    }
  }
})