import request from "./index";

//获取榜单
export const getTopLIst = (params) =>
  request.get("/api/toplist", { params: params });

//获取榜单详情
export const getTopListDetail = (params) =>
  request.get("/api/playlist/detail", { params: params });
