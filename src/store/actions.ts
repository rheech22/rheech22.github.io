import { ActionType, Payload, State } from './types';

const actions: {
  [key in ActionType]: <T extends State>(state: T, payload: Payload) => T;
} = {
  setWikis: (state, payload) => {
    const { wikis } = payload;

    return { ...state, wikis };
  },
  setCurrentHeadingId: (state, payload) => {
    const { headingId } = payload;

    return { ...state, headingId };
  },
  setDisplayMode: (state, payload) => {
    const { displayMode } = payload;

    localStorage.setItem('display-mode', displayMode ?? '');

    return { ...state, displayMode };
  }
};

export default actions;
