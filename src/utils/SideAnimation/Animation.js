import React, { useRef, useEffect, useState } from "react";
import styles from "./Animation.module.css";

const Animation = ({ direction, duration, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  // Reset the animation state whenever the duration prop changes
  useEffect(() => {
    setIsVisible(false);
  }, [duration]);

  return (
    <div
      ref={animationRef}
      className={`${styles["animation-container"]} ${
        isVisible ? styles[`${direction}-enter-${duration}`] : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Animation;
