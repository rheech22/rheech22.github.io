import { useEffect, useRef } from "react";

interface FetchMoreProps {
  fetch: ()=> void;
}

const FetchMore = ({ fetch }: FetchMoreProps) => {
  const fetchMoreTrigger = useRef(null);

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      if (!isIntersecting) {
        return;
      }
      fetch();
    });

    if (fetchMoreTrigger.current) {
      fetchMoreObserver.observe(fetchMoreTrigger.current);
    }

    return () => fetchMoreObserver.disconnect();
  }, [fetch]);

  return (
    <div
      ref={fetchMoreTrigger}
    />
  );
};

export default FetchMore;