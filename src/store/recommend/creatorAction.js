import * as actionType from "./actionType";

//热门推荐-推荐歌单
export const changeRecommendPlaylist = (res) => ({
  type: actionType.GET_RECOMMEND_PLAYLIST,
  recommendPlaylist: res.playList,
});
