import request from "./index";
//获取推荐页banner
export const getBanner = (params) =>
  request.get("/api/banner", { params: params });

//获取热门推荐歌单
export const getPlayList = (params) =>
  request.get("/personalized", { params: params });
