<template>
  <div
    :style="videoWrapperStyle"
    class="video-wrapper"
    @touchend.stop="handleTap"
    @dblclick.stop="togglePlay"
  >
    <div class="video-container">
      <video
        ref="video"
        :poster="poster"
        playsinline
        preload="metadata"
        @timeupdate="updateCurrentTime"
        @loadedmetadata="updateDuration"
        @progress="updateBufferProgress"
        class="video"
        :style="videoStyle"
      />
      <!-- 自定义进度条 -->
      <ProgressBar
        :bufferProgress="bufferProgress"
        :playProgress="playProgress"
        :type="videoType"
      />
      <!-- 视频控制 -->
      <div
        class="video-controls"
        v-if="showControls"
        @click.stop.prevent="false"
      >
        <!-- 封面播放按钮和左右快进按钮 -->
        <div class="play-button-wrapper" v-if="videoType === 'long'">
          <div class="skip-left" @click.stop="seek(-15)">
            <van-image
              src="/icons/back15.svg"
              alt="后退15s"
              class="tw-w-[28px] tw-h-[28px]"
            />
          </div>
          <div class="play-button" @click.stop="playVideo">
            <van-image
              :src="timePlayImg"
              alt="播放按钮"
              class="tw-w-[25px] tw-h-[25px]"
            />
          </div>
          <div class="skip-right" @click.stop="seek(15)">
            <van-image
              src="/icons/progress15.svg"
              alt="快进15s"
              class="tw-w-[28px] tw-h-[28px]"
            />
          </div>
        </div>
        <div class="play-button-center" v-else>
          <van-image
            :src="timePlayImg"
            alt="播放按钮"
            class="tw-w-[25px] tw-h-[25px]"
            @click.stop="playVideo"
          />
        </div>
      </div>
      <!-- 试看 -->
      <div
        class="open-heytalk"
        v-if="showOpenHeyTalk"
        :style="openHeyTalkStyle"
      >
        <OpenHeyTalk type="look" />
      </div>
    </div>
    <!-- 时间控制 短视频时显示 -->
    <div class="time-info" v-if="videoType === 'short'">
      <van-image :src="timePlayImg" alt="播放按钮" @click="playVideo" />
      <div class="time">
        <span>{{ formatTime(currentTime) }}</span>
        <span class="grey-color">/</span>
        <span class="grey-color">{{ formatTime(duration) }}</span>
      </div>
    </div>
  </div>
  <div v-if="videoType == 'long'">
    <h2 class="title sc-font" v-if="title">{{ title }}</h2>
    <p class="description" v-if="description">{{ description }}</p>
    <div class="cover" v-if="poster">
      <img :src="poster" alt="封面" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hls from "hls.js";
type IProps = {
  url: string; //视频地址 m3u8 \ mp4
  poster?: string; //封面海报
  videoType: "short" | "long"; //视频类型 长视频或短视频
  title?: string; //视频标题
  description?: string; //视频描述
};

const props = withDefaults(defineProps<IProps>(), {
  videoType: "long",
});

const video = ref<HTMLVideoElement>();
const hls = ref<Hls | null>(null); //视频流
const hasPlayed = ref<boolean>(false); //是否播放
const showControls = ref<boolean>(true); //是否显示控制
const currentTime = ref<number>(0); //当前播放时间（s）
const duration = ref<number>(0); //视频时长(s)
const showOpenHeyTalkTime = ref<number>(15); // 显示试看提示时长 单位：秒（s）
const bufferProgress = ref<number>(0); // 缓冲进度
const playProgress = ref<number>(0); // 播放进度
let timeoutId: number | null = null; // 用于清除隐藏控制器的定时器
let tapTimer: number | null = null; // 用于识别单击或双击操作

/**
 * 播放视频/暂停
 */
const playVideo = () => {
  console.log("1111");
  if (video.value) {
    hasPlayed.value = !hasPlayed.value;
    if (hasPlayed.value) {
      video.value.play();
    } else {
      video.value?.pause();
    }
  }
};
/**容器样式变化*/
const videoWrapperStyle = computed(() => {
  return {
    flex: "1",
    ...(props.videoType === "short"
      ? { display: "flex", flexDirection: "column" as const }
      : {}),
  };
});

/**视频样式变化*/
const videoStyle = computed(() => {
  return {
    width: "100%",
    ...(props.videoType === "short"
      ? { flex: "1", objectFit: "cover" as const }
      : { height: "218px" }),
  };
});
/**试看样式变化*/
const openHeyTalkStyle = computed(() => {
  if (props.videoType === "short") {
    return {
      position: "fixed" as const,
      backgroundColor: "#00000066",
    };
  }
  return {
    position: "absolute" as const,
  };
});
/**时间控制的图标*/
const timePlayImg = computed(() => {
  return hasPlayed.value ? "/icons/pause.svg" : "/icons/play1.svg";
});

/**控制是否显示试看*/
const showOpenHeyTalk = computed(() => {
  const isShortPrompt = currentTime.value >= showOpenHeyTalkTime.value;
  if (isShortPrompt) {
    video.value?.pause();
    hasPlayed.value = false;
    showControls.value = false;
  }
  return isShortPrompt;
});

/**
 * 更新当前播放时间
 */
const updateCurrentTime = () => {
  if (video.value) {
    currentTime.value = video.value.currentTime;
    playProgress.value = (currentTime.value / video.value.duration) * 100;
  }
};

/**
 * 更新视频时长
 */
const updateDuration = () => {
  if (video.value) {
    duration.value = video.value.duration;
  }
};

/**
 * 快进
 * */
const seek = (seconds: number) => {
  if (video.value) {
    video.value.currentTime += seconds;
  }
};

/**
 * 更新缓冲进度
 */
const updateBufferProgress = () => {
  if (video.value) {
    const buffered = video.value.buffered;
    if (buffered.length > 0) {
      // 获取最后一个缓冲范围
      const end = buffered.end(buffered.length - 1);
      const duration = video.value.duration;
      bufferProgress.value = (end / duration) * 100;
    }
  }
};

/**
 * 显示控制器并自动隐藏
 */
const showAndHideControls = () => {
  showControls.value = true;

  // 清除之前的定时器
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // 设置 2 秒后隐藏控制器的定时器
  timeoutId = window.setTimeout(() => {
    showControls.value = false;
  }, 2000);
};

/**
 * 单击或触摸视频
 */
const handleTap = () => {
  // if (showOpenHeyTalk.value) return;
  if (tapTimer) {
    // 如果在 300ms 内双击，则清除单击逻辑
    clearTimeout(tapTimer);
    tapTimer = null;
    return;
  }

  // 设置单击的延时逻辑
  tapTimer = window.setTimeout(() => {
    tapTimer = null; // 清空定时器引用
    showAndHideControls(); // 显示控制器
  }, 300);
};

/**
 * 双击切换播放/暂停状态
 */
const togglePlay = () => {
  if (showOpenHeyTalk.value) return;
  if (video.value) {
    if (video.value.paused) {
      video.value.play();
    } else {
      video.value.pause();
    }
  }
};

/**
 * 销毁hls
 */
const destroyHls = () => {
  hls.value?.destroy();
  hls.value = null;
};

/**更新视频源*/
const updateVideoUrl = (sourceUrl: string) => {
  if (Hls.isSupported() && video.value) {
    hls.value = new Hls();
    hls.value.loadSource(sourceUrl);
    hls.value.attachMedia(video.value);
    hls.value.currentLevel = -1; //-1 表示切换回自动清晰度模式
  } else if (video.value) {
    video.value.src = sourceUrl;
  }
};

onMounted(() => {
  updateVideoUrl(props.url);
});

onBeforeUnmount(destroyHls);

watch(
  () => props.url,
  (newUrl) => {
    destroyHls();
    updateVideoUrl(newUrl);
  }
);
// 时间格式化函数
const formatTime = (sec: number) => {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};
</script>

<style lang="less" scoped>
.video-wrapper {
  position: relative;
  flex: 1;
  .video {
    width: 100%;
    height: 218px;
    background-color: @primary-black1-color;
  }
}
.video-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}
.video-controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .play-button,
  .skip-left,
  .skip-right,
  .top-right-buttons {
    pointer-events: auto;
    cursor: pointer;
  }

  .play-button-wrapper {
    width: 250px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .play-button {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: @primary-grey-color;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .skip-left,
    .skip-right {
      background: transparent;
    }
  }
  .play-button-center {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: @primary-grey-color;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .top-right-buttons {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
  }
}
.open-heytalk {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.time-info {
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  background-color: @primary-black1-color;
  padding: 16px 20px 12px 20px;
  img {
    width: 24px;
    height: 24px;
  }
  .time {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 16px;
    color: @primary-white-color;
    width: 119px;
    height: 24px;
    font-size: 17px;
    font-weight: 500;
    .grey-color {
      color: @primary-grey1-color;
    }
  }
}
.title {
  width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 超出几行省略 */
  overflow: hidden;
  color: @primary-black-color;
  padding: 0 12px;
  margin: 12px 0 0 0;
  font-size: 17px;
  font-weight: 600;
}
.description {
  width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* 超出几行省略 */
  overflow: hidden;
  color: @primary-grey-color;
  padding: 0 12px;
  margin: 4px 0 0 0;
  font-size: 14px;
  font-weight: 400;
}
.cover {
  padding: 0 16px;
  margin: 24px 0 0 0;
  border-radius: 16px;
  overflow: hidden;
}
</style>
