import { useEffect } from "react";
import { useDispatch } from "../contexts/GlobalContext";

const useSearchParams = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const tag = params.get('tag');
    const keyword = params.get('keyword');
    const filter = params.get('filter');

    if (tag) dispatch({ type: 'searchByTag', payload: { tag, filter } });
    if (keyword) dispatch({ type: 'searchByKeyword', payload: { keyword, filter } });
  }, []);
};

export default useSearchParams;
