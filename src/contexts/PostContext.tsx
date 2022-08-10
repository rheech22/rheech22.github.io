import { useContext, useState } from "react";
import { createContext } from 'react';

export type Posts = Queries.getPostsQuery['allMarkdownRemark']['edges']
export type State = { posts: Posts; keyword: string; };
export type DispatchContext = ({ name, payload }: { name: string; payload: string | Posts; }) => void;

const initialState = {
  posts: [],
  keyword: '',
};

export const PostContext = createContext<State | null>(null);
export const PostDispatchContext = createContext<DispatchContext | null>(null);

export const usePostContext = () => useContext(PostContext);
export const usePostDispatch = () => useContext(PostDispatchContext);

export const PostContextProvider = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
  const [state, setState] = useState(initialState);

  const handleChangeState = ({ name, payload }: { name: string; payload: string | Posts; })=>{
    console.log(state);

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