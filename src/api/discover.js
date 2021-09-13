import request from "./index";
//
export const getBanner = (params) => request.get("/banner", { params: params });
