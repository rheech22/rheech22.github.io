import { ActionType, BaseState, Payload } from "./types";

const actions: {
  [key in ActionType]:
  <T extends BaseState>(state: T, payload: Payload) => T;
} = {
  setDisplayMode: (state, { displayMode }) => {
    if (displayMode) localStorage.setItem('display-mode', displayMode);

    return {
      ...state,
      displayMode,
    };
  },
  setPosts: (state, { posts }) => {
    return {
      ...state,
      posts,
    };
  },
  searchByKeyword: (state, { searchFilter, searchKeyword }) => {
    return {
      ...state,
      searchFilter,
      searchKeyword,
      tag: null,
    };
  },
  searchByTag: (state, { tag }) => {
    return {
      ...state,
      searchFilter: null,
      searchKeyword: null,
      tag: tag === state.tag ? '' : tag,
    };
  },
  clearSearch: (state) => {
    return {
      ...state,
      searchFilter: null,
      searchKeyword: null,
      tag: null,
    };
  },
  setCurrentHeading: (state, { headingId }) => {
    return {
      ...state,
      headingId,
    };
  },
};

export default actions;
