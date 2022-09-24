import { ActionType, BaseState, Payload } from './types';

const actions: {
  [key in ActionType]:
  <T extends BaseState>(state: T, payload: Payload) => T;
} = {
  setPosts: (state, { posts }) => ({
    ...state,
    posts,
  }),
  setCurrentHeading: (state, { headingId }) => ({
    ...state,
    headingId,
  }),
  clearSearch: (state) => ({
    ...state,
    searchFilter: null,
    searchKeyword: null,
    tag: null,
  }),
  searchByTag: (state, { tag }) => ({
    ...state,
    searchFilter: null,
    searchKeyword: null,
    tag: tag === state.tag ? '' : tag,
  }),
  searchByKeyword: (state, { searchFilter, searchKeyword }) => ({
    ...state,
    searchFilter,
    searchKeyword,
    tag: null,
  }),
  setDisplayMode: (state, { displayMode }) => {
    if (displayMode) localStorage.setItem('display-mode', displayMode);

    return {
      ...state,
      displayMode,
    };
  },
};

export default actions;
