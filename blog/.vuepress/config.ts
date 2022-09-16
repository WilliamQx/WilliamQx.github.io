import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "WilliamQX",
  description: "WilliamQX 的博客",

  base: "/",
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
          
        },
      },
    }),
  ],
  theme,
});
