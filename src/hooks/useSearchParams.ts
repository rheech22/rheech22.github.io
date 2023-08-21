import { navigate } from 'gatsby';
import { useLayoutEffect } from 'react';

const useSearchParams = () => {
  useLayoutEffect(() => {
    const params = new URLSearchParams(location.search);

    const keyword = params.get('keyword') ?? '';
    const filter = params.get('filter') ?? '';

    if (keyword) {
      navigate(`/search/?keyword=${encodeURI(keyword)}&filter=${encodeURI(filter)}`, {
        state: { keyword, filter }
      });
      return;
    }
  }, []);
};

export default useSearchParams;
