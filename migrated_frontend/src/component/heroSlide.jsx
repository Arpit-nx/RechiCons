export default function HeroSlide({ slide }) {
  return (
    <div className="relative h-screen w-full">
      <img
        src={slide.image}
        alt={slide.title}
        className="h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            {slide.title}
          </h1>

          <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto">
            {slide.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}