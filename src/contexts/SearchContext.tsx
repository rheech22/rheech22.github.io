import { useContext, useState } from "react";
import { createContext, Dispatch, SetStateAction } from 'react';

export const SearchContext = createContext<string | null>(null);
export const SearchDispatchContext = createContext<Dispatch<SetStateAction<string>> | null>(null);

export const useSearch = () => useContext(SearchContext);
export const useSearchDispatch = () => useContext(SearchDispatchContext);

export const SearchContextProvider = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
  const [keyword, setKeyword] = useState('');

  return (
    <SearchContext.Provider value={keyword}>
      <SearchDispatchContext.Provider value={(keyword)=> setKeyword(keyword)}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
};