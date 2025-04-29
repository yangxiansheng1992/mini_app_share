import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.15.2_db0@0.3.2_eslint@8_id2hgb3epfsaqhlf3lkrzcm7la/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}