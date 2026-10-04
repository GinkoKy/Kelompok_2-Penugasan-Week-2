function Modal({ isOpen, onClose, title, description, children }) {
  if (!isOpen) {
    return null;
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-6 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-900">
        {/* Tombol Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:scale-105 hover:bg-green-100 hover:text-green-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-green-900/30 dark:hover:text-green-400"
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
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="pr-10">
          <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
            EcoTech Program
          </p>

          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            {title}
          </h2>
        </div>

        {/* Description */}
        {description && (
          <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}

        {/* Additional Content */}
        {children && (
          <div className="mt-5">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;