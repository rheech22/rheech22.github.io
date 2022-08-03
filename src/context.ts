import { createContext } from 'react';

const initialState = {
  queryText: 'gagag',
};

export const globalContext = createContext(initialState);
