import { useEffect, useRef } from 'react';

interface Props {
  load: ()=> void;
}

const LoadMore = ({ load }: Props) => {
  const loadMoreTrigger = useRef(null);

  useEffect(() => {
    const loadMoreObserver = new IntersectionObserver(([ { isIntersecting } ]) => {
      if (!isIntersecting) return;
      load();
    });

    if (loadMoreTrigger.current) {
      loadMoreObserver.observe(loadMoreTrigger.current);
    }

    return () => loadMoreObserver.disconnect();
  }, []);

  return (
    <li
      ref={loadMoreTrigger}
    />
  );
};

export default LoadMore;
