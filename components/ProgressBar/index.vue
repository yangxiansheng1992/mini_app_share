<script setup lang="ts">
type IProps = {
  bufferProgress: number; //缓冲进度
  playProgress: number; //播放进度
  type?: "short" | "long";
};
// 设置默认值
withDefaults(defineProps<IProps>(), {
  type: "long",
});
</script>
<template>
  <div class="progress-bar" v-if="type == 'long'">
    <!-- 缓冲进度 -->
    <div class="buffer-progress" :style="{ width: `${bufferProgress}%` }"></div>
    <!-- 播放进度 -->
    <div class="play-progress" :style="{ width: `${playProgress}%` }"></div>
  </div>
  <div class="short-progress-bar" v-else>
    <div class="progress-warp">
      <!-- 缓冲进度 -->
      <div
        class="buffer-progress"
        :style="{ width: `${bufferProgress}%` }"
      ></div>
      <!-- 播放进度 -->
      <div class="play-progress" :style="{ width: `${playProgress}%` }"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
/* 进度条容器 */
.progress-bar {
  position: relative;
  width: 100%;
  height: 2px;
  background-color: @primary-grey2-color; /* 进度条背景色 */
  border-radius: 4px;
  overflow: hidden;
  /* 缓冲进度 */
  .buffer-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: @primary-white-color; /* 缓冲进度颜色 */
    transition: width 0.1s ease-in-out;
  }

  /* 播放进度 */
  .play-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: @primary-red-color; /* 播放进度颜色 */
    transition: width 0.1s ease-in-out;
  }
}

.short-progress-bar {
  width: 100%;
  height: 2px;
  margin-top: -2px;
  border-radius: 8px;
  overflow: hidden;
  padding: 0 12px;
  background-color: transparent;

  .progress-warp {
    margin: 0 auto;
    width: 100%;
    height: 2px;
    background-color: @primary-grey4-color; /* 进度条背景色 */
    position: relative;
    /* 缓冲进度 */
    .buffer-progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: @primary-grey1-color; /* 缓冲进度颜色 */
      transition: width 0.1s ease-in-out;
      border-radius: 8px;
    }

    /* 播放进度 */
    .play-progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: @primary-white-color; /* 播放进度颜色 */
      transition: width 0.1s ease-in-out;
      border-radius: 8px;
    }
  }
}
</style>
