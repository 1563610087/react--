import request from "./index";
//获取推荐页banner
export const getBanner = (params) =>
  request.get("/api/banner", { params: params });
