import {
  SEARCH_PHRASE_CHANGED,
  IS_FOCUSED_CHANGED,
  FAVOURITES
} from "./actionTypes";

export const changeSearchPhrase = searchPhrase => {
  return {
    type: SEARCH_PHRASE_CHANGED,
    searchPhrase
  };
};

export const changeFocused = index => {
  return {
    type: IS_FOCUSED_CHANGED,
    index
  };
};

export const addToFavourite = user => {
  return {
    type: FAVOURITES.ADD,
    user
  };
};

export const removeFromFavourite = userLogin => {
  return {
    type: FAVOURITES.REMOVE,
    userLogin
  };
};
