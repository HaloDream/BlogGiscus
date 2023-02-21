import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Ant`s Blog",
      description: "The palest ink is better than the best memory.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "蚂蚁记笔记",
      description: "好记性不如烂笔头",
    },
  },

  theme,

  shouldPrefetch: false,
});
