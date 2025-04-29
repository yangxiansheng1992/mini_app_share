import SvgLoader from "vite-svg-loader";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

const isDev = process.env.NUXT_ENV_MODE === "development";

export default defineNuxtConfig({
  ssr: true, // 开发时关闭 SSR 加快热更新
  // ssr: !isDev, // 开发时关闭 SSR 加快热更新
  devtools: { enabled: false },
  // typescript: { typeCheck: true },

  app: {
    head: {
      title: "视频分享",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no,viewport-fit=cover",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/icons/favicon.svg" },
        { rel: "apple-touch-icon", href: "/images/hey.png" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  buildDir: "nuxt-build",
  modules: ["@nuxtjs/tailwindcss", "@vant/nuxt"],
  vant: {
    lazyload: true, // 如果需要使用 Vant 的图片懒加载组件，可开启此项
  },
  css: [
    "@/assets/styles/tailwind.css",
    "@/assets/styles/global.less",
    "vant/lib/index.css",
  ],

  postcss: {
    plugins: {
      "postcss-100vh-fix": {},
      ...(isDev
        ? {} // 开发时不启用 px-to-viewport 插件
        : {
            "postcss-px-to-viewport-8-plugin": {
              unitToConvert: "px",
              viewportWidth: 375,
              unitPrecision: 5,
              propList: ["*"],
              viewportUnit: "vw",
              fontViewportUnit: "vw",
              selectorBlackList: ["keep-px"],
              minPixelValue: 1,
              mediaQuery: false,
              replace: true,
              exclude: [/node_modules/],
            },
          }),
      autoprefixer: {},
      tailwindcss: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "@/assets/styles/variables.less";`,
        },
      },
    },
    plugins: [
      SvgLoader(),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
  },
  sourcemap: {
    server: true,
    client: true,
  },
  plugins: ["~/plugins/appinstall.client.ts", "~/plugins/init.client.ts"],
  compatibilityDate: "2025-04-25",
});

function genVersionCode(prefix: string) {
  const releaseDate = new Date();
  const year = releaseDate.getFullYear().toString();
  const month = String(releaseDate.getMonth() + 1).padStart(2, "0");
  const day = releaseDate.getDate().toString().padStart(2, "0");
  return {
    VITE_RELEASE_DATE: releaseDate.getTime().toString(),
    VITE_VERSION_CODE: `${prefix} - ${year} - ${month} -${day}`,
  };
}
