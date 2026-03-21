import {
  // Frontend
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJquery,

  // Backend
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiRedis,
  SiPhp,
  SiSpringboot,
  SiDotnet,
  // SiCsharp,

  // Databases
  SiMongodb,
  SiPostgresql,
  SiMysql,

  // AI / Data
  SiPython,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,

  // DevOps / Tools
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiVercel,
  SiPostman,
  SiGit,
  SiGithub,
  SiFigma,
  // SiAzure,

  // Mobile / Platform
  SiSwift,
  SiAndroid,
  SiXml,
} from "react-icons/si";

import {
  FaJava,
  FaMicrosoft,
  FaApple,
  FaCode,
} from "react-icons/fa";

import { IconType } from "react-icons";

export const techIcons: Record<string, IconType> = {
  // Frontend
  react: SiReact,
  "next.js": SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss,
  bootstrap: SiBootstrap,
  jquery: SiJquery,
  ajax: SiJquery,

  // Backend
  node: SiNodedotjs,
  express: SiExpress,
  graphql: SiGraphql,
  redis: SiRedis,
  php: SiPhp,
  java: FaJava,
  "spring boot": SiSpringboot,
  ".net": SiDotnet,
  "asp.net core": SiDotnet,
  "entity framework": SiDotnet,
  // "c#": SiCsharp,
  "c#": FaCode,

  // Databases
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,

  // AI / Data
  python: SiPython,
  tensorflow: SiTensorflow,
  pandas: SiPandas,
  numpy: SiNumpy,
  "scikit-learn": SiScikitlearn,
  matplotlib: FaCode,

  // DevOps / Tools
  docker: SiDocker,
  kubernetes: SiKubernetes,
  firebase: SiFirebase,
  vercel: SiVercel,
  postman: SiPostman,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  // azure: SiAzure,
  azure: FaMicrosoft,
  serilog: FaMicrosoft,
  testcontainers: SiDocker,

  // Mobile / Platform
  swift: SiSwift,
  ios: FaApple,
  xcode: FaApple,
  android: SiAndroid,
  "android studio": SiAndroid,
  xml: SiXml,

  // Concepts
  oop: FaCode,
  "file i/o": FaCode,
  "exception handling": FaCode,
};