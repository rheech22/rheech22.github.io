import { useState } from 'react';

const INITIAL_OFFSET = 10;

const useLoadMore = <T>(wikis?: readonly T[] | T[]) => {
  const [offset, setOffset] = useState(INITIAL_OFFSET);

  const loadMore = () => {
    if (!wikis || offset > wikis.length) return;

    setOffset((prev) => prev + 10);
  };

  return {
    offset,
    loadMore
  };
};

export default useLoadMore;
