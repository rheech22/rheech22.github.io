import { Reducer, createContext, useContext as getContext, useReducer } from 'react';

import reducer from './reducer';
import { Action, State } from './types';

const initialState: State = {
  posts: [],
  displayMode: null,
  headingId: null
};

export const Context = createContext<State>(initialState);
export const Dispatch = createContext<React.Dispatch<Action>>({} as React.Dispatch<Action>);

export const useContext = () => getContext(Context);
export const useDispatch = () => getContext(Dispatch);

export const ContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);

  return (
    <Context.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </Context.Provider>
  );
};
