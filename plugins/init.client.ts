import { useCreateScript } from "../composables/useCreateScript";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { initMobileDevtools } = useCreateScript();
  console.log("initMobileDevtools", initMobileDevtools);
  initMobileDevtools();
});
