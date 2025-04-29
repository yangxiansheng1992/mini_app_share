<template>
  <div class="app-wrapper">
    <NuxtPage />
  </div>
</template>

<script setup>
console.log("thomas--入口");
// 这里可以加一些全局的逻辑，比如监听窗口变化等
</script>

<style scoped lang="less">
.app-wrapper {
  width: 100vw;
  height: 100vh;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
