// types/nuxt-vant.d.ts
import "@nuxt/schema";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    vant?: {
      lazyload?: boolean; // 图片懒加载选项
    };
  }
}
