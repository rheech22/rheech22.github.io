import { useEffect, useRef } from "react";

interface LoadMoreProps {
  load: ()=> void;
}

const LoadMore = ({ load }: LoadMoreProps) => {
  const loadMoreTrigger = useRef(null);

  useEffect(() => {
    const loadMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      if (!isIntersecting) {
        return;
      }
      load();
    });

    if (loadMoreTrigger.current) {
      loadMoreObserver.observe(loadMoreTrigger.current);
    }

    return () => loadMoreObserver.disconnect();
  }, [fetch]);

  return (
    <div
      ref={loadMoreTrigger}
    />
  );
};

export default LoadMore;