interface FetchResponse<T = any> {
  data: Ref<T | null>;
  error: FetchError<T>;
  status: Ref<string>;
  pending: Ref<boolean>;
  refresh: () => Promise<void>;
}

interface FetchError<T = any> {
  error?: Ref<boolean>;
  message?: Ref<string>;
  statusCode?: Ref<number | null>;
  data?: Ref<T | null>;
}

// 请求的配置
const config = reactive({
  timeOut: 5000, // 超时时间
  retryCount: 0, // 重试次数
});

export const fsFetch = async <T>(
  url: string,
  params: Record<string, any> = {}
): Promise<FetchResponse<any>> => {
  let controller: AbortController;

  const fetchWithRetry = async (): Promise<FetchResponse<T>> => {
    controller = new AbortController(); // 创建一个新的控制器
    const signal = controller.signal;

    // 发起请求
    try {
      // 超时终止
      setTimeout(() => {
        controller.abort();
      }, config.timeOut);

      // 发起请求
      const res = await useFetch<T>(url, {
        params,
        signal,
      });

      // 如果请求成功且存在错误，则重试
      if (res.status.value !== "success" && config.retryCount < 5) {
        config.retryCount++;
        return fetchWithRetry();
      }

      return res as FetchResponse<T>;
    } catch (error) {
      console.log(`请求失败，错误信息：${error}`);
      if (config.retryCount < 5) {
        config.retryCount++;
        return fetchWithRetry();
      } else {
        throw error; // 重试次数达到上限或非超时错误，抛出错误
      }
    } finally {
      if (controller.signal.aborted) {
        console.log("请求已取消，重试次数：", config.retryCount);
      }
    }
  };

  return fetchWithRetry();
};

// export const useHttp=() =>({
// get: (url, p, options) =› fsFetch (ur1, { method: 'get', params: p? .params, ...options }),
// head: (url, p, options) => fsFetch (url, { method: 'head', params: p?.params, ...options }),
// post: (url, body, options) => fsFetch (url, { method: 'post', body, ...options }.
// upload: (url, body, options) => fsFetch (url, { method: 'upload', body, ...options }),
// put: (url, body, options) => fsFetch(url,
// method: 'put', body, ...options },
// delete: (url, body, options) =) fsFetch (url, { method: 'delete', body, ...options })
// });
