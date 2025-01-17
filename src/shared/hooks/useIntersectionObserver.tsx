import { useEffect } from 'react';

function useIntersectionObserve<T extends HTMLElement>(
  ref: React.RefObject<T>,
  onIntersect: () => void,
  options?: IntersectionObserverInit,
  needObserve = true
) {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && needObserve) {
        onIntersect();
      }
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, ref, needObserve]);
}

export default useIntersectionObserve;
