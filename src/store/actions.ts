import { ActionType, BaseState, Payload } from './types';

const actions: {
  [key in ActionType]:
  <T extends BaseState>(state: T, payload?: Payload) => T;
} = {
  setPosts: (state, payload) => {
    if (!payload) return state;

    const { posts } = payload;

    return { ...state, posts };
  },
  setCurrentHeadingId: (state, payload) => {
    if (!payload) return state;

    const { headingId } = payload;

    return { ...state, headingId };
  },
  clearSearch: (state) => {
    return { ...state, tag: null, series: null };
  },
  setCurrentTag: (state, payload) => {
    if (!payload) return state;

    const tag = payload.tag === state.tag ? '' : payload.tag;

    return { ...state, tag, series: null };
  },
  setCurrentSeries: (state, payload) => {
    if (!payload) return state;

    const series = payload.series === state.series ? '' : payload.series;

    return { ...state, series, tag: null };
  },
  setDisplayMode: (state, payload) => {
    if (!payload) return state;

    const { displayMode } = payload;

    localStorage.setItem('display-mode', (displayMode ?? ''));

    return { ...state, displayMode };
  },
};

export default actions;
