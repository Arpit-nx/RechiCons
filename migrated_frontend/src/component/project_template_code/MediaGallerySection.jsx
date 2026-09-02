import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

function ImageCarousel({ title, images, objectClass = "object-cover", autoSlideInterval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasImages = Array.isArray(images) && images.length > 0;

  const nextImage = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!hasImages || images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      nextImage();
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, images, autoSlideInterval, hasImages]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !hasImages) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) nextImage();
    if (distance < -50) previousImage();

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
        {title}
      </h2>

      <div
        className="group relative w-full aspect-[4/3] bg-transparent rounded-lg overflow-hidden border border-gray-300/70 shadow-sm flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {!hasImages ? (
          <div className="flex flex-col items-center justify-center text-gray-400 p-4">
            <Loader2 className="w-8 h-8 animate-spin mb-2 text-gray-400" />
            <span className="text-sm font-medium">No image available</span>
          </div>
        ) : (
          <>
            <img
              src={images[currentIndex]}
              alt={`${title} ${currentIndex + 1}`}
              className={`w-full h-full ${objectClass} transition-opacity duration-300`}
            />

            {images.length > 1 && (
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft size={26} />
              </button>
            )}

            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight size={26} />
              </button>
            )}
          </>
        )}
      </div>

      {hasImages && images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-gray-900"
                  : "w-2 bg-gray-300 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MediaGallerySection({ projectView, floorPlan }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 pb-16 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <ImageCarousel
          title={projectView?.title || "Project View"}
          images={projectView?.images}
          objectClass="object-cover"
          autoSlideInterval={4000}
        />

        <ImageCarousel
          title={floorPlan?.title || "Floor Plan"}
          images={floorPlan?.images}
          objectClass="object-contain"
          autoSlideInterval={4000}
        />
      </div>
    </section>
  );
}