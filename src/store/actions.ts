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
    series: null,
  }),
  searchByTag: (state, { tag }) => ({
    ...state,
    searchFilter: null,
    searchKeyword: null,
    series: null,
    tag: tag === state.tag ? '' : tag,
  }),
  searchBySeries: (state, { series }) => ({
    ...state,
    searchFilter: null,
    searchKeyword: null,
    tag: null,
    series: series === state.series ? '' : series,
  }),
  searchByKeyword: (state, { searchFilter, searchKeyword }) => ({
    ...state,
    searchFilter,
    searchKeyword,
    tag: null,
    series: null,
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
