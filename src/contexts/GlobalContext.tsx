import { useContext, useEffect, useReducer } from "react";
import { createContext } from 'react';
import useDarkTheme from "../hooks/useDarkTheme";

type State = {
  posts: Posts;
  keyword: string;
  tag: string;
  isDark: boolean;
};

type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges']

type Action = {
  type: keyof typeof actionTriggers;
  payload: any;
}

// TODO: paylod 타입 정의해보기
// type Payload = {
//   [key in keyof State]?: State[key];
// };

export const initialState = {
  posts: [],
  keyword: '',
  tag: '',
  isDark: true,
};

export const GlobalContext = createContext<State>(initialState);
export const DispatchContext = createContext<React.Dispatch<Action> | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);
export const useDispatch = () => useContext(DispatchContext);

export const GlobalContextProvider = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isDark = useDarkTheme();

  useEffect(()=> {
    dispatch({
      type: 'setDisplayMode',
      payload: {
        isDark,
      },
    });
  }, [isDark]);

  return (
    <GlobalContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GlobalContext.Provider>
  );
};


const reducer = (state: State, { type, payload }: Action) => {
  return actionTriggers[type](state, payload) ?? state;
};

const actionTriggers: {
  [key in 'setDisplayMode' | 'setPosts' | 'searchByKeyword' | 'searchByTag']:
  (state: State, payload: Action['payload']) => State;
} = {
  setDisplayMode: (state, { isDark }) => {
    return {
      ...state,
      isDark,
    };
  },
  setPosts: (state, { posts }) => {
    return {
      ...state,
      posts,
    };
  },
  searchByKeyword: (state, { keyword }) => {
    return {
      ...state,
      keyword,
      tag: '',
    };
  },
  searchByTag: (state, { tag }) => {
    return {
      ...state,
      keyword: '',
      tag: tag,
    };
  },
};
