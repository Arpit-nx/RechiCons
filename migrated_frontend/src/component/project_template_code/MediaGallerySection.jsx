
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";

function ImageCarousel({
  title,
  images,
  objectClass = "object-cover",
  autoSlideInterval = 4000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasImages =
    Array.isArray(images) && images.length > 0;

  const nextImage = () => {
    if (!hasImages) return;

    setCurrentIndex(
      (prev) => (prev + 1) % images.length
    );
  };

  const previousImage = () => {
    if (!hasImages) return;

    setCurrentIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  useEffect(() => {
    if (
      !hasImages ||
      images.length <= 1 ||
      isHovered
    ) {
      return;
    }

    const timer = setInterval(() => {
      nextImage();
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [
    currentIndex,
    isHovered,
    images,
    autoSlideInterval,
    hasImages,
  ]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchMove = (e) => {
    setTouchEnd(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchEnd = () => {
    if (
      !touchStart ||
      !touchEnd ||
      !hasImages
    ) {
      return;
    }

    const distance =
      touchStart - touchEnd;

    if (distance > 50) {
      nextImage();
    }

    if (distance < -50) {
      previousImage();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="w-full">
      <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-3xl">
        {title}
      </h2>

      <div
        className="
          group
          relative
          flex
          aspect-[4/3]
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          border
          border-gray-300/70
          bg-transparent
          shadow-sm
        "
        onMouseEnter={() =>
          setIsHovered(true)
        }
        onMouseLeave={() =>
          setIsHovered(false)
        }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {hasImages && (
          <>
            <img
              src={images[currentIndex]}
              alt={`${title} ${
                currentIndex + 1
              }`}
              className={`h-full w-full ${objectClass} transition-opacity duration-300`}
            />

            {images.length > 1 && (
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="
                  absolute
                  left-3
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-black/50
                  text-white
                  opacity-0
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-black/70
                  group-hover:opacity-100
                  md:h-12
                  md:w-12
                "
              >
                <ChevronLeft size={26} />
              </button>
            )}

            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-black/50
                  text-white
                  opacity-0
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-black/70
                  group-hover:opacity-100
                  md:h-12
                  md:w-12
                "
              >
                <ChevronRight size={26} />
              </button>
            )}
          </>
        )}
      </div>

      {hasImages &&
        images.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentIndex(index)
                }
                aria-label={`Go to image ${
                  index + 1
                }`}
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

export default function MediaGallerySection({
  projectView,
  floorPlan,
}) {
  const hasProjectView =
    Array.isArray(projectView?.images) &&
    projectView.images.length > 0;

  const hasFloorPlan =
    Array.isArray(floorPlan?.images) &&
    floorPlan.images.length > 0;

  // Nothing to show
  if (!hasProjectView && !hasFloorPlan) {
    return null;
  }

  return (
    <section className="mx-auto w-full max-w-7xl bg-transparent px-6 py-10 pb-16">
      <div
        className={`grid grid-cols-1 gap-10 ${
          hasProjectView && hasFloorPlan
            ? "md:grid-cols-2"
            : ""
        } items-start`}
      >
        {/* Project View */}
        {hasProjectView && (
          <ImageCarousel
            title={
              projectView.title ||
              "Project View"
            }
            images={projectView.images}
            objectClass="object-cover"
            autoSlideInterval={4000}
          />
        )}

        {/* Floor Plan */}
        {hasFloorPlan && (
          <ImageCarousel
            title={
              floorPlan.title ||
              "Floor Plan"
            }
            images={floorPlan.images}
            objectClass="object-contain"
            autoSlideInterval={4000}
          />
        )}
      </div>
    </section>
  );
}

