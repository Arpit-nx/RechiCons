import HeroSlider from "../component/heroSlider";

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold">
          Our Projects
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
          Project details will be added here later.
        </p>
      </section>
    </>
  );
}