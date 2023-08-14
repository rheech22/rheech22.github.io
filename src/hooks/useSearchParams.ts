import { navigate } from 'gatsby';
import { useLayoutEffect } from 'react';

const useSearchParams = () => {
  useLayoutEffect(() => {
    const params = new URLSearchParams(location.search);

    const searchKeyword = params.get('keyword') ?? '';
    const searchFilter = params.get('filter') ?? '';

    if (searchKeyword) {
      navigate(
        `/search/?keyword=${encodeURI(searchKeyword)}&filter=${encodeURI(
          searchFilter
        )}`,
        { state: { searchKeyword, searchFilter } }
      );
      return;
    }
  }, []);
};

export default useSearchParams;
