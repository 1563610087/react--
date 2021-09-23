import * as actionType from "./actionType";

const defaultState = {
  recommendPlaylist: [],
};

const recommendReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_RECOMMEND_PLAYLIST:
      return Object.assign({}, state, {
        recommendPlaylist: action.recommendPlaylist,
      });
    default:
      return state;
  }
};

export default recommendReducer;
