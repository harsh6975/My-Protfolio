import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./Tile.module.css";

const TiltComponent = ({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialize Vanilla Tilt on the tiltRef element
    const tiltInstance = VanillaTilt.init(tiltRef.current, {
      max: 25, // Maximum tilt rotation (degrees)
      speed: 400, // Speed of the tilt effect
      glare: true, // Add glare effect
      "max-glare": 0.5, // Maximum glare opacity
    });

    // Optional: You can reset the tilt effect on unmount
    return () => {
      tiltInstance?.destroy();
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={styles["tilt-component"]}
    >
      {children}
    </div>
  );
};

export default TiltComponent;
