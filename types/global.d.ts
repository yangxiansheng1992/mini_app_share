// 在 types/global.d.ts 中：
export {};

declare global {
  interface Window {
    AppInstall: any;
  }
}
declare var AppInstall: any;

declare global {
  interface Window {
    AppInstall?: {
      parseUrlParams: () => any;
      new (
        options: {
          appKey: string;
          server?: string;
          onready?: () => void;
        },
        data?: any
      ): any;
    };
  }
}
