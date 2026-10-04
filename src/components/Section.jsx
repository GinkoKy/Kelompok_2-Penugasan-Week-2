function Section({ eyebrow, title, description, children, className = "" }) {
  return (
    <section
      className={`bg-[#f7f6ef] px-6 py-20 transition-colors duration-300 dark:bg-gray-900 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          {eyebrow && (
            <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}

export default Section;