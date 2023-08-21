import { ActionType, BaseState, Payload } from './types';

const actions: {
  [key in ActionType]: <T extends BaseState>(state: T, payload?: Payload) => T;
} = {
  setWikis: (state, payload) => {
    if (!payload) return state;

    const { wikis } = payload;

    return { ...state, wikis };
  },
  setCurrentHeadingId: (state, payload) => {
    if (!payload) return state;

    const { headingId } = payload;

    return { ...state, headingId };
  },
  setDisplayMode: (state, payload) => {
    if (!payload) return state;

    const { displayMode } = payload;

    localStorage.setItem('display-mode', displayMode ?? '');

    return { ...state, displayMode };
  }
};

export default actions;
