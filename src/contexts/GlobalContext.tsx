import { useContext, useEffect, useState } from "react";
import { createContext } from 'react';
import useDarkTheme from "../hooks/useDarkTheme";

export type DispatchContext = ({ name, payload }: { name: string; payload: Posts | string | boolean }) => void;
export type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges']
export type State = {
  posts: Posts;
  keyword: string;
  tag: string;
  isDark: boolean;
};

export const initialState: State = {
  posts: [],
  keyword: '',
  tag: '',
  isDark: true,
};

export const GlobalContext = createContext<State | null>(null);
export const DispatchContext = createContext<DispatchContext | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);
export const useDispatch = () => useContext(DispatchContext);

export const GlobalContextProvider = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
  const [state, setState] = useState(initialState);
  const isDark = useDarkTheme();

  const handleChangeState = ({ name, payload }: { name: string; payload: Posts | string | boolean })=>{
    setState(prev => ({
      ...prev,
      [name]: payload,
    }));
  };

  useEffect(()=> {
    handleChangeState({
      name: 'isDark',
      payload: isDark,
    });
  }, [isDark]);

  return (
    <GlobalContext.Provider value={state}>
      <DispatchContext.Provider value={handleChangeState}>
        {children}
      </DispatchContext.Provider>
    </GlobalContext.Provider>
  );
};