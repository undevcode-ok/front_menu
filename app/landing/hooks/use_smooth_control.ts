import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      scrollToElement(targetId);
    },
    [scrollToElement]
  );

  return { scrollToElement, handleSmoothScroll };
};