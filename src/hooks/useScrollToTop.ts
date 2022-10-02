import { useEffect, useRef, useState } from 'react';

interface ThrottleParams {
  cb: ()=> void;
  wait: number;
}

const useScrollToTop = () => {
  const [ isTop, setIsTop ] = useState(true);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClickButton = () => document.documentElement.scrollTop = 0;

  const throttle = ({ cb, wait }: ThrottleParams) => {
    if (timer.current) return;

    timer.current = setTimeout(() => {
      cb();
      timer.current = null;
    }, wait);
  };

  useEffect(() => {
    setIsTop(document.documentElement.scrollTop === 0);

    const handleScroll = () => setIsTop(document.documentElement.scrollTop === 0);

    const throttleHandler = () => throttle({ cb: handleScroll, wait: 600 });

    document.addEventListener('scroll', throttleHandler);

    return () =>{
      document.removeEventListener('scroll', throttleHandler);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return {
    isTop,
    handleClickButton,
  };
};

export default useScrollToTop;
