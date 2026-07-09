import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);
  const { threshold = 0.1, rootMargin = '0px', root = null } = options;

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!currentTarget) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      // Reveal once and stop observing. Toggling back to `false` while a tall
      // section straddles the threshold makes the reveal animation replay in a
      // loop ("tweaking out"), so we never un-reveal.
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin, root });

    observer.observe(currentTarget);

    return () => observer.disconnect();
  }, [threshold, rootMargin, root]);

  return [targetRef, isIntersecting];
};
