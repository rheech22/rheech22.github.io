import { useEffect, useRef } from "react";

const useOutsideClick = (
  cb: () => void
) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      cb();
    }
  };

  useEffect(()=> {
    document.addEventListener('click', handleClickOutside);
    return ()=> document.removeEventListener('click', handleClickOutside);
  }, [cb]);

  return ref;
};

export default useOutsideClick;
