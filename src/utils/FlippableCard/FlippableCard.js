import "./flippable-card.css";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";
import "./flip-transition.css";
import Card from "../../Component/FlipCard/Card";
import Animation from "../SideAnimation/Animation";

function FlippableCard() {
  const [showFront, setShowFront] = useState(false); // Initialize showFront as false
  const flipRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting && entries[0].intersectionRatio === 1) {
        setTimeout(() => {
          setShowFront(false);
        }, 1200);

        setTimeout(() => {
          setShowFront(true);
        }, 2000);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1, // When the entire component is visible
    });

    if (flipRef.current) {
      observer.observe(flipRef.current);
    }

    return () => {
      if (flipRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(flipRef.current);
      }
    };
  }, []);

  return (
    <Animation direction="left" duration="1">
      {/* Render the FlippableCard component only when it is visible */}
      <div ref={flipRef} className="flippable-card-container">
        <CSSTransition in={showFront} timeout={300} classNames="flip">
          <Card
            onMouseEnter={() => {
              setShowFront(false);
            }}
            onMouseLeave={() => {
              setShowFront(true);
            }}
            onClick={() => {
              setShowFront((v) => !v);
            }}
          />
        </CSSTransition>
      </div>
    </Animation>
  );
}

export default FlippableCard;
