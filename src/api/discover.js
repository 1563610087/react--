import request from "./index";
//
export const getBanner = (params) =>
  request.get("/api/banner", { params: params });
