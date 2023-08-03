import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ImagSlider.module.css";
function ImageSlider({ files, autoPlay, maxImg }) {
  const videoRef = useRef(null);
  const tab = maxImg === 1 ? 1 : 2;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: maxImg,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: tab,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  function getFileExtension(fileName) {
    const parts = fileName.split(".");
    const fileExtension = parts[parts.length - 1];
    return fileExtension;
  }

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div className={styles.imageSlide}>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={autoPlay}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition=".5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={true} //{this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {files.map((src, i) => {
          const extension = getFileExtension(src);
          if (extension === "mp4") {
            return (
              <video
                src={src}
                autoPlay
                className={styles.image}
                onEnded={handleVideoEnded}
                ref={videoRef}
              ></video>
            );
          } else {
            return (
              <div className={styles.imageSlideContainer}>
                <img src={src} alt={i} className={styles.image}></img>
              </div>
            );
          }
        })}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
