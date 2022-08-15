import { useContext, useState } from "react";
import { createContext } from 'react';
import { isDarkTheme } from "../utils/localStorage";

export type DispatchContext = ({ name, payload }: { name: string; payload: Posts | string | boolean }) => void;
export type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges']
export type State = {
  posts: Posts;
  keyword: string;
  isDark: boolean;
};

export const initialState: State = {
  posts: [],
  keyword: '',
  isDark: isDarkTheme(),
};

export const PostContext = createContext<State | null>(null);
export const PostDispatchContext = createContext<DispatchContext | null>(null);

export const usePostContext = () => useContext(PostContext);
export const usePostDispatch = () => useContext(PostDispatchContext);

export const PostContextProvider = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
  const [state, setState] = useState(initialState);

  const handleChangeState = ({ name, payload }: { name: string; payload: Posts | string | boolean })=>{
    setState(prev => ({
      ...prev,
      [name]: payload,
    }));
  };

  return (
    <PostContext.Provider value={state}>
      <PostDispatchContext.Provider value={handleChangeState}>
        {children}
      </PostDispatchContext.Provider>
    </PostContext.Provider>
  );
};