import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Masalah", path: "/masalah" },
    { name: "Program", path: "/program" },
    { name: "Aksi", path: "/aksi" },
    { name: "Dampak", path: "/dampak" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-[#f7f6ef] text-gray-900 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-green-500">
          EcoTech
        </NavLink>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `group relative py-2 transition-colors duration-300 ${
                  isActive
                    ? "font-semibold text-green-500"
                    : "text-gray-700 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
                }`
              }
            >
              {link.name}

              <span
                className="
      absolute bottom-0 left-0
      h-0.5 w-full
      origin-left
      scale-x-0
      rounded-full
      bg-green-600
      transition-transform duration-300 ease-out
      group-hover:scale-x-100
    "
              ></span>
            </NavLink>
          ))}

          <Button to="/kontak" variant="primary">
            Kontak Kami
          </Button>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle dark mode"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-700 transition-all duration-300 hover:scale-105 dark:border-gray-600 dark:bg-gray-800 dark:text-yellow-300"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>
        </div>

        {/* Hamburger Mobile */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-gray-500 dark:bg-gray-300 transition-all duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>

          <span
            className={`absolute h-0.5 w-6 rounded-full bg-gray-500 dark:bg-gray-300 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`absolute h-0.5 w-6 rounded-full bg-gray-500 dark:bg-gray-300 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`grid overflow-hidden border-t border-gray-200 bg-[#f7f6ef] px-6 transition-all duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-900 md:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] py-4 opacity-100"
            : "grid-rows-[0fr] py-0 opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `transition-all duration-150 ${
                    isActive
                      ? "font-semibold text-green-500"
                      : "text-gray-500 dark:text-gray-300 active:text-green-700 active:font-black active:scale-95 hover:text-green-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex items-center gap-4">
              <Button
                to="/kontak"
                variant="primary"
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
              >
                Kontak Kami
              </Button>

              {/* Dark Mode Toggle */}
              <button
                type="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle dark mode"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-700 transition-all duration-300 hover:scale-105 dark:border-gray-600 dark:bg-gray-800 dark:text-yellow-300"
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
