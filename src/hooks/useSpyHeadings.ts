import { useEffect, useRef } from 'react';
import { useDispatch } from '../store/context';

const useSpyHeadings = () => {
  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const isTop = (ref: HTMLElement) => (document.documentElement.scrollTop - ref.offsetTop >= -5);

  useEffect(() => {
    if (!ref.current) return;

    const headings: HTMLHeadingElement[] = Array.from(ref.current.querySelectorAll('h1, h2, h3, h4, h5, h6'));

    let isPending = false;

    const handleScroll = () => {
      if (isPending) return;

      isPending = true;

      return requestAnimationFrame(() => {
        headings.forEach((heading) => {
          if (!isTop(heading)) return;

          dispatch({ type: 'setCurrentHeadingId', payload: { headingId: heading.id } });
        });

        isPending = false;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
};

export default useSpyHeadings;
