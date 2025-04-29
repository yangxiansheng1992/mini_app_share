export const useCreateScript = () => {
  function createScript(src: string, id: string) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.setAttribute("charset", "UTF-8");
    script.async = true;
    script.src = src;
    // @ts-ignore
    script.crossorigin = true;
    id && (script.id = id);
    return script;
  }

  function initMobileDevtools() {
    const href = window.location.href;
    if (
      /(debugger=true|debugger%3D=true)/i.test(href) ||
      localStorage.getItem("debuggerMode") === "1"
    ) {
      if (!document.getElementById("eruda")) {
        const script = createScript("//cdn.jsdelivr.net/npm/eruda", "eruda");
        script.onload = () => {
          // @ts-ignore
          window.eruda.init();
        };
        document.head.appendChild(script);
      }
    } else if (/debugger=vconsole/i.test(href)) {
      if (!document.getElementById("vconsole")) {
        const script = createScript(
          "//cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js",
          "vconsole"
        );
        script.onload = () => {
          // @ts-ignore
          window.__vconsole__ = new window.VConsole();
        };
        document.head.appendChild(script);
      }
    }
  }

  return { createScript, initMobileDevtools };
};
