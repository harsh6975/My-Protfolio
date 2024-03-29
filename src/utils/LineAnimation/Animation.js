/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import styles from "./LineAnimation.module.css";
import { Progress } from "antd";
import Animation from "../SideAnimation/Animation";

const LineAnimation = ({ data }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const animationRef = useRef(null);

  const animationCounter = () => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === data.percentage) {
          clearInterval(timer);
          return oldProgress;
        }

        const increment = Math.ceil((data.percentage - oldProgress) / 10);
        return oldProgress + increment;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  };

  const increamentPercentage = async () => {
    const timer = setTimeout(() => {
      animationCounter();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  };

  useEffect(() => {
    const handleIntersection = async (entries) => {
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

  useEffect(() => {
    if (isVisible) {
      const time = window.innerWidth <= 650 ? 100 : 1100;
      setProgress(0);
      const timer = setTimeout(() => {
        increamentPercentage();
      }, time);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isVisible]);

  return (
    <Animation direction="right" duration="1">
      <div className={styles.container} ref={animationRef}>
        <div className={styles.labelProgressContainer}>
          <div className={styles.label}>{data.label}</div>
          <div className={styles.progressBar} style={{ position: "relative" }}>
            <div className={styles.progress}>
              <Progress
                percent={progress}
                strokeColor="#db8e35"
                trailColor="transparent"
                strokeWidth={28}
                strokeLinecap="butt"
                showInfo={false}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: `${progress - 5}%`,
                fontSize:
                  data.label === "C++"
                    ? window.innerWidth <= 650
                      ? "15px"
                      : "20px"
                    : "25px",
                marginTop: data.label === "C++" ? "0px" : "6px",
                color: "#071017",
                marginRight: "20px",
              }}
            >
              {data.icon}
            </div>
          </div>
          <div className={styles.percentageText}>{progress}%</div>
        </div>
      </div>
    </Animation>
  );
};

export default LineAnimation;
