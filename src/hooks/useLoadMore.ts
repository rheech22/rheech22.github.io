import { useState } from 'react';

const INITIAL_OFFSET = 10;

const useLoadMore = <T>(posts: readonly T[] | T[]) => {
  const [ offset, setOffset ] = useState(INITIAL_OFFSET);

  const loadMore = () => {
    if (offset > posts.length) return;
    setOffset(prev => prev + 10);
  };

  return {
    offset,
    loadMore,
  };
};

export default useLoadMore;
