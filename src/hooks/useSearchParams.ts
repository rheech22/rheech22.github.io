import { navigate } from 'gatsby';

import { useLayoutEffect } from 'react';

const useSearchParams = () => {
  useLayoutEffect(() => {
    const params = new URLSearchParams(location.search);

    const tag = params.get('tag') ?? '';
    const series = params.get('series') ?? '';
    const searchKeyword = params.get('keyword') ?? '';
    const searchFilter = params.get('filter') ?? '';

    if (tag) {
      navigate(`/search/?tag=${encodeURI(tag)}`, { state: { tag } });
      return;
    }

    if (series) {
      navigate(`/search/?series=${encodeURI(series)}`, { state: { series } });
      return;
    }

    if (searchKeyword) {
      navigate(`/search/?keyword=${encodeURI(searchKeyword)}&filter=${encodeURI(searchFilter)}`, { state: { searchKeyword, searchFilter } });
      return;
    }
  }, []);
};

export default useSearchParams;
