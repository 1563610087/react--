import * as actionType from "./actionType";

const defaultState = {
  recommendPlaylist: [],
  newDiscList: [],
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
    default:
      return state;
  }
};

export default recommendReducer;
