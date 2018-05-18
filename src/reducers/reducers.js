import { combineReducers } from "redux";
import {
  SEARCH_PHRASE_CHANGED,
  IS_FOCUSED_CHANGED,
  FAVOURITES
} from "../actions/actionTypes";

const searchPhrase = (state = "", action) => {
  switch (action.type) {
    case SEARCH_PHRASE_CHANGED:
      return action.searchPhrase;
    default:
      return state;
  }
};

const focusedIndex = (state = 0, action) => {
  switch (action.type) {
    case IS_FOCUSED_CHANGED:
      return action.index;
    default:
      return state;
  }
};

const favourites = (state = {}, action) => {
  switch (action.type) {
    case FAVOURITES.ADD:
      return { ...state, [action.user.login]: action.user };
    case FAVOURITES.REMOVE:
      let { [action.userLogin]: toRemove, ...newState } = state;
      return newState;
    default:
      return state;
  }
};

const appRe = combineReducers({
  searchPhrase,
  focusedIndex,
  favourites
});
export default appRe;
