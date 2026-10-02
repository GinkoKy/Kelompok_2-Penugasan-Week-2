import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Masalah", path: "/masalah" },
    { name: "Program", path: "/program" },
    { name: "Aksi", path: "/aksi" },
    { name: "Dampak", path: "/dampak" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-[#f7f6ef]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-green-600">
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
        ? "font-semibold text-green-600"
        : "text-gray-700 hover:text-green-600"
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
        </div>

        {/* Hamburger Mobile */}
        <button
          type="button"
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "font-semibold text-green-600" : "text-gray-700"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Button
              to="/kontak"
              variant="primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak Kami
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
