// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导入ant design vue
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import { Button } from 'ant-design-vue';

// 导入组件
import HomeContent from "./components/HomeContent.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomeContent),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(Antd);
  }
}
