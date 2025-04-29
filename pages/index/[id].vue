<script setup lang="ts">
import { useRoute, useHead, useSeoMeta } from "nuxt/app";

type VideoInfoType = {
  title: string;
  description: string;
  cover: string;
  url: string;
};

type VideoType = "short" | "long";

const route = useRoute();

const videoInfo = ref<VideoInfoType>({
  title: "我的搞怪学生之眼力无边！", // 标题
  description:
    "我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！我的搞怪学生之眼力无边！", // 描述
  cover: "/images/testCover.png", // 封面
  url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
});

const id = route.params.id;
const type = (route.query.type ?? "short") as VideoType; // short | long

// 访问 http://localhost:3000/video/123?type=long
// 确保你的 API 接口返回格式：
// {
//   "title": "视频标题",
//   "description": "视频简介",
//   "cover": "https://xxx.jpg",
//   "url": "https://xxx.m3u8"
// }

onMounted(async () => {
  console.log("id", id, "type", type, fsFetch);
});

useHead(() => ({
  title: videoInfo.value.title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: videoInfo.value.description,
    },
    { property: "og:title", content: videoInfo.value.title },
    { property: "og:description", content: videoInfo.value.description },
    { property: "og:image", content: videoInfo.value.cover },
    { property: "og:type", content: "video.other" },
  ],
}));
// useSeoMeta({
//   title: "我的精彩网站",
//   ogTitle: "我的精彩网站",
//   description: "这是我的精彩网站，让我为你详细介绍。",
//   ogDescription: "这是我的精彩网站，让我为你详细介绍。",
//   ogImage: "https://example.com/image.png",
//   twitterCard: "summary_large_image",
// });
</script>

<template>
  <div class="page-container" v-if="videoInfo.url">
    <OpenHeyTalk />
    <VideoPlayer
      :url="videoInfo.url"
      :title="videoInfo.title"
      :description="videoInfo.description"
      :poster="videoInfo.cover"
      :videoType="type"
    />
  </div>
  <div v-else>加载中...</div>
</template>

<style lang="less" scoped>
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
