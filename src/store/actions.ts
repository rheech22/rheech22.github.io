import { ActionType, BaseState, Payload } from './types';

const actions: {
  [key in ActionType]:
  <T extends BaseState>(state: T, payload: Payload) => T;
} = {
  setPosts: (state, { posts }) => ({
    ...state,
    posts,
  }),
  setCurrentHeadingId: (state, { headingId }) => ({
    ...state,
    headingId,
  }),
  clearSearch: (state) => ({
    ...state,
    tag: null,
    series: null,
  }),
  setCurrentTag: (state, { tag }) => ({
    ...state,
    series: null,
    tag: tag === state.tag ? '' : tag,
  }),
  setCurrentSeries: (state, { series }) => ({
    ...state,
    tag: null,
    series: series === state.series ? '' : series,
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
