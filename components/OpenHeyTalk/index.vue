<template>
  <div
    class="tw-w-full tw-h-[51px] tw-flex tw-items-center tw-px-[16px] tw-py-[8px]"
    v-if="type === 'open'"
  >
    <van-image
      src="/images/hey.png"
      alt="后退15s"
      class="tw-w-[26px] tw-h-[26px]"
    />
    <div class="tw-flex tw-flex-col tw-pl-[8px]">
      <span class="tw-text-[13px] tw-font-medium black1-color">Hey Talk</span>
      <span class="tw-text-[12px] tw-font-normal grey-color"
        >在“Hey Talk”App中打开</span
      >
    </div>
    <div class="tw-flex-1 tw-flex tw-justify-end">
      <van-button
        @click="handleClick('open')"
        class="open-app"
        :disabled="isLoading || hasError"
        >打开应用</van-button
      >
    </div>
  </div>
  <div class="tw-flex tw-flex-col tw-items-center" v-else>
    <p class="tw-text-[14px] tw-font-normal white-color">
      试看视频内容已经结束
    </p>
    <van-button
      class="open-app-look"
      @click="handleClick('look')"
      :disabled="isLoading || hasError"
    >
      <span>使用 HeyTalk 观看</span>
      <van-image
        src="/icons/play3.svg"
        alt="快进15s"
        class="tw-w-[16px] tw-h-[16px] tw-ml-[8px]"
      />
    </van-button>
  </div>
</template>

<script setup lang="ts">
const { wakeupOrInstallApp, isLoading, hasError } = useAppInstall();
interface Props {
  type?: "open" | "look";
}

// 设置默认值
withDefaults(defineProps<Props>(), {
  type: "open",
});

// 按钮点击事件
const handleClick = (data: string) => {
  console.log("data==>", data);
  wakeupOrInstallApp(data);
};

// onMounted(() => {
//   // 初始化 OpenInstall 脚本
//   const base64String = new URLSearchParams(window.location.search).get("data");

//   const init = () => {
//     const data = window?.AppInstall?.parseUrlParams?.();
//     new window.AppInstall(
//       {
//         appKey: "unq58ip7",
//         server: "https://oi.uutalk.io",
//         onready() {
//           const m = this;
//           const button = document.getElementById("downloadButton");
//           console.log(
//             "Button Element:",
//             document.getElementById("downloadButton")
//           );
//           m.schemeWakeup({
//             data: { data: base64String },
//             channelCode: "uutalk-app",
//           });
//           if (button) {
//             button.onclick = function () {
//               console.log("Button clicked!", base64String);
//               m.wakeupOrInstall({
//                 data: { data: base64String },
//                 channelCode: "uutalk-app",
//               });
//               return false;
//             };
//           }
//         },
//       },
//       data
//     );
//   };

//   if (window.AppInstall) {
//     init();
//   } else {
//     const script = document.createElement("script");
//     script.src = "https://oi.uutalk.io/web/appinstall.js";
//     script.charset = "UTF-8";
//     script.onload = init;
//     document.body.appendChild(script);
//   }
// });
</script>
<style lang="less" scoped>
.black1-color {
  color: @primary-black1-color;
}
.grey-color {
  color: @primary-grey-color;
}
.white-color {
  color: @primary-white-color;
}
.open-app {
  background-color: @primary-color;
  color: @primary-white-color;
  height: 30px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  padding: 0 16px;
  display: inline-block;
}
.open-app-look {
  background-color: @primary-color;
  color: @primary-white-color;
  height: 30px;
  line-height: 30px;
  width: 183px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-weight: 400;
  font-size: 16px;
  padding: 0;
  border: none;
  &::before {
    display: none;
  }
  ::v-deep(.van-button__content) {
    &::before {
      display: none;
    }
  }
  ::v-deep(.van-button__text) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
