import { useEffect } from 'react';
import { useDispatch } from '../store/context';

const useSearchParams = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const tag = params.get('tag');
    const searchKeyword = params.get('keyword');
    const searchFilter = params.get('filter');

    if (tag) dispatch({ type: 'searchByTag', payload: { tag, searchFilter } });
    if (searchKeyword) dispatch({ type: 'searchByKeyword', payload: { searchKeyword, searchFilter } });
  }, []);
};

export default useSearchParams;
