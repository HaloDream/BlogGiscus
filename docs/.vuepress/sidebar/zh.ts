import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "技术文档",
      icon: "creative",
      prefix: "document/",
      link: "document/",
      children: "structure",
    },
    {
      text: "学习积累",
      icon: "note",
      prefix: "accumulation/",
      link: "accumulation/",
      children: "structure",
    },
    //"intro",
    //"slides",
  ],
});
