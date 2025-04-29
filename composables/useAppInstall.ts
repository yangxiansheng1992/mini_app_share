import { useCreateScript } from "./useCreateScript";

// AppInstall 实例
let appInstallInstance: any = null;
let retries = 0; // 用于重试计数
const MAX_RETRIES = 3; // 最大重试次数

const APP_NAME = "uutalk-app";
const APP_KEY = "unq58ip7";
const APP_SERVER = "https://oi.uutalk.io";
const isReady = ref(false);
const isLoading = ref(false);
const hasError = ref(false);

// 用于暴露给外部的 hook
export const useAppInstall = () => {
  const { createScript } = useCreateScript();
  // 加载 AppInstall 脚本，支持自动重试
  const loadAppInstallScript = async () => {
    if (isLoading.value || hasError.value || retries >= MAX_RETRIES) {
      return;
    }

    isLoading.value = true;
    const script = createScript(
      "https://oi.uutalk.io/web/appinstall.js",
      "appinstall-script"
    );
    // const script = document.createElement("script");
    // script.id = "appinstall-script";
    // script.type = "text/javascript";
    // script.charset = "UTF-8";
    // script.src = "https://oi.uutalk.io/web/appinstall.js";

    return new Promise<void>((resolve, reject) => {
      script.onload = () => {
        console.log("AppInstall script loaded.");
        isLoading.value = false;
        retries = 0; // 重置重试次数
        resolve();
      };

      script.onerror = (err) => {
        retries++;
        console.error("Failed to load AppInstall script", err);
        hasError.value = true;
        if (retries < MAX_RETRIES) {
          console.log(
            `Retrying to load AppInstall script... (${retries}/${MAX_RETRIES})`
          );
          loadAppInstallScript(); // 重试
        } else {
          reject(err); // 超过重试次数
        }
      };

      document.head.appendChild(script);
    });
  };

  // 初始化 AppInstall 实例
  const initAppInstall = (config = {}) => {
    if (typeof window !== "undefined" && (window as any).AppInstall) {
      // const getQueryParameter = (name: string) => {
      //   const urlParams = new URLSearchParams(window.location.search);
      //   return urlParams.get(name);
      // };
      // const base64String = getQueryParameter("data");

      // @ts-ignore
      const data = AppInstall.parseUrlParams();
      // @ts-ignore
      appInstallInstance = new AppInstall(
        {
          appKey: APP_KEY,
          server: APP_SERVER,
          onready: function () {
            isReady.value = true;
            console.log("isReady.value", isReady.value);
            console.log("AppInstall ready!");
          },
          ...config,
        },
        data
      );
    } else {
      console.warn("AppInstall is not available on window");
    }
  };

  // 获取 AppInstall 实例
  const getAppInstall = () => appInstallInstance;

  // 唤醒或安装 App
  const wakeupOrInstallApp = (data: string) => {
    const m = getAppInstall();
    console.log("mmmmmm==>", m);
    console.log("isReady==>", isReady.value);
    if (m && isReady.value) {
      m.wakeupOrInstall({
        data: { data },
        channelCode: APP_NAME,
      });
    } else {
      if (isLoading.value) {
        console.log("AppInstall is still loading...");
      } else if (hasError.value) {
        console.log("AppInstall failed to load.");
      } else {
        console.log("AppInstall is not ready yet.");
      }
    }
  };

  // watch isReady，当实例准备好时执行某些动作
  watch(isReady, (newVal) => {
    if (newVal) {
      console.log("AppInstall is ready and available for use.");
    }
  });

  return {
    isReady,
    isLoading,
    hasError,
    loadAppInstallScript,
    initAppInstall,
    wakeupOrInstallApp, // 暴露给组件调用
  };
};
