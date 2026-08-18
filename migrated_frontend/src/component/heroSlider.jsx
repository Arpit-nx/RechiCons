import { useEffect, useState } from "react";

import HeroSlide from "./heroSlide";
import ProjectSlides from "../data/projectSlides";

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ProjectSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = ProjectSlides[activeIndex];

  return (
    <div className="relative overflow-hidden">
      <HeroSlide slide={slide} />

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {ProjectSlides.map((_, index) => (
          <span
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}