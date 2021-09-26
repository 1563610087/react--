import * as actionType from "./actionType";
import { getPlayList } from "@/api/discover";
//热门推荐-推荐歌单
export const changeRecommendPlaylist = (res) => ({
  type: actionType.GET_RECOMMEND_PLAYLIST,
  recommendPlaylist: res.result,
});

// 热门推荐n
export const getPlaylistAction = (limit) => {
  return (dispatch) => {
    getPlayList(limit).then((res) => {
      dispatch(changeRecommendPlaylist(res));
    });
  };
};
