import { useEffect, useState } from "react";
import { useDispatch } from "../contexts/GlobalContext";

const useTheme = () => {
  const dispatch = useDispatch();

  const [displayMode, setDisplayMode] = useState<string>();

  useEffect(()=> {
    const personalPreference = localStorage.getItem('display-mode');
    const devicePreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

    setDisplayMode(personalPreference || devicePreference);
  }, []);

  useEffect(()=> {
    dispatch({ type: 'setDisplayMode', payload: { displayMode } });
  }, [displayMode]);
};

export default useTheme;
