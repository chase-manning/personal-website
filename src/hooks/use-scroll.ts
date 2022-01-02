import { useLayoutEffect, useState } from "react";

export const useScroll = (): number => {
  const [scroll, setScroll] = useState(0);

  useLayoutEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return scroll;
};
