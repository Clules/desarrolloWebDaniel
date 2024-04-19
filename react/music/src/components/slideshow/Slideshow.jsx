import React, { useState, useEffect } from "react";

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute top-0 left-0 w-52 h-52 m-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`absolute transition-opacity duration-1000 ${
            index === slideIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
