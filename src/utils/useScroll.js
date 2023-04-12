import { useState, useEffect } from "react";

export const useScroll = (yPos) => {
  const [scrollYPos, setScrollYPos] = useState(window.scrollY);
  const [hitPoint, setHitPoint] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > yPos) {
        setHitPoint(true);
      } else setHitPoint(false);
      setScrollYPos(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [yPos]);

  return [scrollYPos, hitPoint];
};
