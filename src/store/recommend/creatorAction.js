import * as actionType from "./actionType";
import { getPlayList, getNewDisc } from "@/api/discover";
import { getTopListDetail } from "@/api/topList";
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

//获取飙升榜单
export const changeFastTopList = (res) => ({
  type: actionType.GET_TOP_LIST,
  fastTopList: res.playlist,
});

//获取榜单
export const getFastTopList = (params) => {
  return (dispatch) => {
    getTopListDetail(params).then((res) => {
      dispatch(changeFastTopList(res));
    });
  };
};

//获取新歌榜单
export const changeNewSongList = (res) => ({
  type: actionType.GET_NEW_SONG,
  newSongTopList: res.playlist,
});

//获取新歌榜单
export const getNewSongList = (params) => {
  return (dispatch) => {
    getTopListDetail(params).then((res) => {
      dispatch(changeNewSongList(res));
    });
  };
};

//获取原创榜单
export const changeOriginList = (res) => ({
  type: actionType.GET_ORIGIN_SONG,
  originSongList: res.playlist,
});

//获取原创榜单
export const getOriginList = (params) => {
  return (dispatch) => {
    getTopListDetail(params).then((res) => {
      dispatch(changeOriginList(res));
    });
  };
};
