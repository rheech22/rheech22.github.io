import { Action, Actions, BaseState } from "./types";

const actions: {
  [key in Actions]:
  <T extends BaseState>(state: T, payload: Action['payload']) => T;
} = {
  setDisplayMode: (state, { displayMode }) => {
    localStorage.setItem('display-mode', displayMode);

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
  searchByKeyword: (state, { filter, keyword }) => {
    return {
      ...state,
      searchFilter: {
        filter,
        keyword,
      },
      tag: '',
    };
  },
  searchByTag: (state, { tag }) => {
    return {
      ...state,
      searchFilter: {
        filter: 'all',
        keyword: '',
      },
      tag: tag === state.tag ? '' : tag,
    };
  },
  clearSearch: (state) => {
    return {
      ...state,
      searchFilter: {
        filter: 'all',
        keyword: '',
      },
      tag: '',
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
