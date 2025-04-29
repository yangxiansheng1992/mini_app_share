<template>
  <div class="error-page">
    <!-- <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p> -->
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});
</script>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 100px;
}
</style>
