import { markdownString } from "./markdown"

export const myAppItem = [
  {
    id: 1,
    src: "/images/nestjs_logo.png",
    alt: "",
    description: "NestJSで作ったタスク管理アプリ。認可・認証を実装した。",
    path: "/my-apps",
    style: {
      width: 150,
      height: 150
    },
    contents: markdownString.nestjs,
  },
  {
    id: 2,
    src: "/images/vuejs_logo.png",
    alt: "",
    description: "Vue+Firebaseで作ったタスク管理アプリ。画像投稿機能なども実装。",
    path: "/my-apps",
    style: {
      width: 150,
      height: 150
    },
    contents: markdownString.vuejs,
  },
  {
    id: 3,
    src: "/images/nextjs_logo.png",
    alt: "",
    description: "このアプリについて",
    path: "/my-apps",
    style: {
      width: 1576,
      height: 318
    },
    contents: markdownString.nextjs,
  },
]