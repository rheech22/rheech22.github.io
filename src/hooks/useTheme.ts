import { useEffect } from 'react';

import { useDispatch } from '../store/context';

const useTheme = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const personalPreference = localStorage.getItem('display-mode');
    const devicePreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
    const displayMode = (personalPreference || devicePreference) as ('night' | 'day');

    dispatch({ type: 'setDisplayMode', payload: { displayMode } });
  }, []);
};

export default useTheme;
