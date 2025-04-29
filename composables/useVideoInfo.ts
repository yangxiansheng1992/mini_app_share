export const useVideoInfo = (id: string) => {
  return fsFetch(`/api/video/${id}`, {
    method: "get",
    pick: ["title", "description", "coverUrl"], // 只取需要的字段
    key: `video-${id}`, // 避免缓存混乱
  });
};
