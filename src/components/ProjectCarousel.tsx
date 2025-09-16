import React, { useState, useRef, useEffect } from 'react';
import './ProjectCarousel.css';

interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Arrow navigation
  const goTo = (idx: number) => {
    if (isAnimating) return;
    setCurrent(idx);
    setIsAnimating(true);
  };

  // Swipe navigation
  const startX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    if (endX - startX.current > 50) {
      goTo((current - 1 + images.length) % images.length);
    } else if (startX.current - endX > 50) {
      goTo((current + 1) % images.length);
    }
    startX.current = null;
  };

  // Refs for each segment
  const segmentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [sliderLeft, setSliderLeft] = React.useState(0);

  useEffect(() => {
    if (segmentRefs.current[current]) {
      setSliderLeft(segmentRefs.current[current].offsetLeft || 0);
    }
    // Unlock animation after transition
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [current, images.length]);

  // Recalculate slider position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (segmentRefs.current[current]) {
        setSliderLeft(segmentRefs.current[current].offsetLeft || 0);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [current, images.length]);

  return (
    <div className="carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="carousel-images">
        <img src={images[current]} alt="Project" className="carousel-img" />
      </div>
      <div className="carousel-arrows">
        <button
          onClick={() => goTo((current - 1 + images.length) % images.length)}
          disabled={isAnimating}
        >&lt;</button>
        <button
          onClick={() => goTo((current + 1) % images.length)}
          disabled={isAnimating}
        >&gt;</button>
      </div>
      <div className="carousel-progress-steps" style={{ position: 'relative' }}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className="carousel-progress-step"
            ref={el => { segmentRefs.current[idx] = el; }}
          />
        ))}
        <div
          className="carousel-progress-slider"
          style={{
            width: '28px',
            height: '6px',
            position: 'absolute',
            top: 0,
            left: sliderLeft,
            transition: 'left 0.4s cubic-bezier(0.71,0.03,0.34,1)',
            background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
            borderRadius: '3px',
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;
