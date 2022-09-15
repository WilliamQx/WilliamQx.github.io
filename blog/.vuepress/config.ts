import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "WilliamQX",
  description: "WilliamQX 的博客",

  base: "/",

  theme,
});
