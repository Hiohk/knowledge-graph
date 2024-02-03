// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导入ant design vue
import 'ant-design-vue/dist/reset.css';
import {Card,CardMeta} from 'ant-design-vue';
import { GridLayout, GridItem } from 'grid-layout-plus';

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
    app.use(Card);
    app.use(CardMeta);
    app
      .component('GridLayout', GridLayout)
      .component('GridItem', GridItem);
  }
}
