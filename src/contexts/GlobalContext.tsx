import { useContext, useReducer, createContext } from "react";

import { getLocalDisplayMode } from "../utils";

type SearchFilter = {
  filter: 'all' | 'title' | 'content';
  keyword: string;
}

type State = {
  posts: Posts;
  searchFilter: SearchFilter;
  tag: string;
  displayMode: 'day' | 'night';
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

const initialSearchFilter: SearchFilter = {
  filter: 'all',
  keyword: '',
};

export const initialState = {
  posts: [],
  searchFilter: initialSearchFilter,
  tag: '',
  displayMode: getLocalDisplayMode(),
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
  [key in 'setDisplayMode' | 'setPosts' | 'searchByKeyword' | 'searchByTag' | 'clearSearch' | 'setCurrentHeading']:
  (state: State, payload: Action['payload']) => State;
} = {
  setDisplayMode: (state) => {
    const displayMode = state.displayMode === 'day' ? 'night' : 'day';

    localStorage.setItem('display-mode', displayMode);

    return {
      ...state,
      displayMode,
    };
  },
  setPosts: (state, { posts }) => {
    return {
      ...state,
      posts,
    };
  },
  searchByKeyword: (state, { filter, keyword }) => {
    return {
      ...state,
      searchFilter: {
        filter,
        keyword,
      },
      tag: '',
    };
  },
  searchByTag: (state, { tag }) => {
    return {
      ...state,
      searchFilter: {
        filter: 'all',
        keyword: '',
      },
      tag: tag === state.tag ? '' : tag,
    };
  },
  clearSearch: (state) => {
    return {
      ...state,
      searchFilter: {
        filter: 'all',
        keyword: '',
      },
      tag: '',
    };
  },
  setCurrentHeading: (state, { headingId }) => {
    return {
      ...state,
      headingId,
    };
  },
};
