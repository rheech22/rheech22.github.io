import { useContext, useReducer, createContext } from "react";

import { getLocalDisplayMode } from "../utils";

type State = {
  posts: Posts;
  keyword: string;
  tag: string;
  isDark: boolean;
  headingId: string,
};

type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges']

type Action = {
  type: keyof typeof actionTriggers;
  payload?: any;
}

// TODO: paylod 타입 정의해보기
// type Payload = {
//   [key in keyof State]?: State[key];
// };

export const initialState = {
  posts: [],
  keyword: '',
  tag: '',
  isDark: getLocalDisplayMode(),
  headingId: '',
};

export const GlobalContext = createContext<State>(initialState);
export const DispatchContext = createContext<React.Dispatch<Action>>({} as React.Dispatch<Action>);

export const useGlobalContext = () => useContext(GlobalContext);
export const useDispatch = () => useContext(DispatchContext);

export const GlobalContextProvider = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  [key in 'flipDisplayMode' | 'setPosts' | 'searchByKeyword' | 'searchByTag' | 'clearSearch' | 'setIntersecting']:
  (state: State, payload: Action['payload']) => State;
} = {
  flipDisplayMode: (state) => {
    localStorage.setItem('isDark', JSON.stringify(!state.isDark));

    return {
      ...state,
      isDark: !state.isDark,
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
      tag: tag !== state.tag ? tag : '',
    };
  },
  clearSearch: (state) => {
    return {
      ...state,
      keyword: '',
      tag: '',
    };
  },
  setIntersecting: (state, { headingId }) => {
    return {
      ...state,
      headingId,
    };
  },
};
