import * as actionType from "./actionType";

const defaultState = {
  recommendPlaylist: [],
  newDiscList: [],
  fastTopList: {},
  newSongTopList: {},
  originSongList: {},
};

const recommendReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_RECOMMEND_PLAYLIST:
      return Object.assign({}, state, {
        recommendPlaylist: action.recommendPlaylist,
      });
    case actionType.GET_NEW_DISC:
      return Object.assign({}, state, {
        newDiscList: action.newDiscList,
      });
    case actionType.GET_NEW_SONG:
      return Object.assign({}, state, {
        newSongTopList: action.newSongTopList,
      });
    case actionType.GET_TOP_LIST:
      return Object.assign({}, state, {
        fastTopList: action.fastTopList,
      });
    case actionType.GET_ORIGIN_SONG:
      return Object.assign({}, state, {
        originSongList: action.originSongList,
      });
    default:
      return state;
  }
};

export default recommendReducer;
