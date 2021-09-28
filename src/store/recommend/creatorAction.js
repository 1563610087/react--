import * as actionType from "./actionType";
import { getPlayList, getNewDisc } from "@/api/discover";
//热门推荐-推荐歌单
export const changeRecommendPlaylist = (res) => ({
  type: actionType.GET_RECOMMEND_PLAYLIST,
  recommendPlaylist: res.result,
});

// 热门推荐
export const getPlaylistAction = (limit) => {
  return (dispatch) => {
    getPlayList(limit).then((res) => {
      dispatch(changeRecommendPlaylist(res));
    });
  };
};

// 新碟上架
export const changeNewDisc = (res) => ({
  type: actionType.GET_NEW_DISC,
  newDiscList: res.albums,
});

export const getNewDiscAction = (limit) => {
  return (dispatch) => {
    getNewDisc(limit).then((res) => {
      dispatch(changeNewDisc(res));
    });
  };
};
