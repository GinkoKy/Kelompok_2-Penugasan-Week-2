import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import homeData from "../data/home";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFeature, setActiveFeature] = useState(null);

  // Carousel otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % homeData.slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function nextSlide() {
    setCurrentSlide((current) => (current + 1) % homeData.slides.length);
  }

  function previousSlide() {
    setCurrentSlide(
      (current) =>
        (current - 1 + homeData.slides.length) % homeData.slides.length,
    );
  }

  return (
    <div className="overflow-hidden bg-[#f7f6ef] text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Hero */}
      <section className="relative px-6 py-24 text-center md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/20 blur-3xl"></div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>

            {homeData.hero.label}
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            {homeData.hero.title}

            <span className="block text-green-500">
              {homeData.hero.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {homeData.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to={homeData.hero.primaryButton.path} variant="primary">
              {homeData.hero.primaryButton.text}
            </Button>

            <Button to={homeData.hero.secondaryButton.path} variant="secondary">
              {homeData.hero.secondaryButton.text}
            </Button>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {homeData.slides.map((slide, index) => (
                <div key={index} className="relative min-w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-100 w-full object-cover md:h-125"
                  />

                  <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-transparent"></div>

                  <div className="absolute inset-0 flex items-center px-8 md:px-16">
                    <div className="max-w-2xl text-white">
                      <p className="mb-4 font-semibold uppercase tracking-widest text-green-400">
                        {slide.label}
                      </p>

                      <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                        {slide.title}
                      </h2>

                      <p className="mt-5 max-w-xl leading-relaxed text-gray-200 md:text-lg">
                        {slide.description}
                      </p>

                      <div className="mt-7">
                        <Button to="/aksi" variant="primary">
                          Pelajari Lebih Lanjut
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol sebelumnya */}
            <button
              type="button"
              onClick={previousSlide}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/30"
              aria-label="Slide sebelumnya"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Tombol berikutnya */}
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white/30"
              aria-label="Slide berikutnya"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Penanda slide */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {homeData.slides.map((slide, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 bg-green-500"
                      : "w-2 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Buka slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jelajahi EcoTech */}
      <section className="px-6 py-30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-green-600">
              Explore EcoTech
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Jelajahi EcoTech
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              Kenali masalah, program, aksi, dan dampak teknologi terhadap
              lingkungan.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeData.topics.map((topic) => (
              <NavLink
                key={topic.path}
                to={topic.path}
                className="group relative h-80 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Foto */}
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/55"></div>

                {/* Isi Card */}
                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <span className="mb-3 text-sm font-semibold tracking-widest text-green-300">
                    {topic.number}
                  </span>

                  <h3 className="text-2xl font-bold">{topic.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-200">
                    {topic.description}
                  </p>

                  <div className="mt-4 font-medium text-green-300 transition-transform duration-300 group-hover:translate-x-2">
                    Lihat selengkapnya
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Why EcoTech */}
      <section className="bg-gray-100 px-6 py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-widest text-green-600">
                Why EcoTech?
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Teknologi bukan hanya soal kemajuan
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                Teknologi membantu banyak kegiatan sehari-hari. Namun,
                penggunaannya juga perlu diperhatikan agar tidak memberikan
                dampak yang terlalu besar terhadap lingkungan.
              </p>

              <div className="mt-7">
                <Button to="/masalah" variant="primary">
                  Pelajari Lebih Dalam
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {homeData.features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() =>
                    setActiveFeature(activeFeature === index ? null : index)
                  }
                  className="w-full cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:border-green-400 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-600 dark:bg-green-900/30">
                        {index + 1}
                      </span>

                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>

                    <span
                      className={`text-xl transition-transform duration-300 ${
                        activeFeature === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ${
                      activeFeature === index
                        ? "grid-rows-[1fr] pt-4"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-14 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-green-600 px-8 py-16 text-center text-white shadow-xl md:px-16">
          <div className="mx-auto max-w-3xl">
            <p className="font-semibold uppercase tracking-widest text-green-200">
              {homeData.cta.label}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              {homeData.cta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-green-50">
              {homeData.cta.description}
            </p>

            <div className="mt-8 flex justify-center">
              <Button to={homeData.cta.button.path} variant="secondary">
                {homeData.cta.button.text}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;