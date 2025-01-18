import { useRef, useState, useEffect } from "react";

const useRevealOnScroll = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(callbackFunction, options);
    const currentElement = ref.current;

    if (currentElement) {
      scrollObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        scrollObserver.unobserve(currentElement);
      }
      scrollObserver.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
};

export default useRevealOnScroll;
