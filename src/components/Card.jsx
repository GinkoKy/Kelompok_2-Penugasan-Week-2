function Card({ title, description, icon, number, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {/* Icon / Number */}
      <div className="mb-6 flex items-center justify-between">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl dark:bg-green-900/30">
            {icon}
          </div>
        )}

        {number && (
          <span className="ml-auto font-semibold tracking-widest text-green-600 dark:text-green-400">
            {number}
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>

      {/* Click Indicator */}
      {onClick && (
        <div className="mt-5 font-medium text-green-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-green-400">
          Lihat selengkapnya →
        </div>
      )}
    </div>
  );
}

export default Card;