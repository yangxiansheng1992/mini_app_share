// export default defineNuxtPlugin(() => {
//   const script = document.createElement("script");
//   script.type = "text/javascript";
//   script.charset = "UTF-8";
//   script.src = "https://oi.uutalk.io/web/appinstall.js"; // 同事给的 URL
//   document.head.appendChild(script);

//   script.onload = () => {
//     console.log("AppInstall script loaded.");
//     const getQueryParameter = (name: string) => {
//       const urlParams = new URLSearchParams(window.location.search);
//       return urlParams.get(name);
//     };

//     const base64String = getQueryParameter("data");
//     // @ts-ignore
//     var data = AppInstall.parseUrlParams(); // 用 API 解析参数
//     // @ts-ignore
//     new AppInstall(
//       {
//         appKey: "unq58ip7",
//         server: "https://oi.uutalk.io",
//         onready: function () {
//           const m = this;
//           const button = document.getElementById("downloadButton");
//           console.log(
//             "Button Element:",
//             document.getElementById("downloadButton")
//           );
//           console.log(
//             "AppInstall Object:",
//             // @ts-ignore
//             typeof AppInstall !== "undefined"
//               ? "AppInstall exists"
//               : "AppInstall not found"
//           );

//           if (button) {
//             m.schemeWakeup({
//               data: { data: base64String },
//               channelCode: "uutalk-app",
//             });
//             button.onclick = function () {
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
// });

export default defineNuxtPlugin(async (nuxtApp) => {
  const { loadAppInstallScript, initAppInstall, hasError } = useAppInstall();

  try {
    await loadAppInstallScript(); // 先加载 script
    initAppInstall(); // 然后实例化 AppInstall
  } catch (err) {
    console.error("Failed to load or init AppInstall:", err);
  }

  // 如果脚本加载失败，做出一些提示或处理
  if (hasError.value) {
    console.warn("AppInstall script failed to load after several attempts.");
  }
});
