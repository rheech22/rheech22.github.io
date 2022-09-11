import { useEffect, useRef } from "react";
import { useDispatch } from "../contexts/GlobalContext";

const useSpyHeadings = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ref.current) return;

    const postRef = ref.current;
    const headings = postRef.querySelectorAll('.header-anchor');

    let tick = false;
    let currentHeading: Element;

    const handleScroll = () => {
      if (tick) return;

      tick = true;

      return requestAnimationFrame(() => {
        headings.forEach(heading => {
          if (heading === currentHeading) return;

          const marginTop = heading.getBoundingClientRect().top;

          if (marginTop < 10 && marginTop > -30) {
            currentHeading = heading;

            console.log(currentHeading);

            const headingId = currentHeading.getAttribute('href')?.substring(1);

            dispatch({ type: 'setIntersecting', payload: { headingId } });
          }
        });

        tick = false;
      });
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
};

export default useSpyHeadings;
