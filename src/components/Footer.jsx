import { NavLink } from "react-router-dom";

function Footer() {
  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Masalah", path: "/masalah" },
    { name: "Program", path: "/program" },
    { name: "Aksi", path: "/aksi" },
    { name: "Dampak", path: "/dampak" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <footer className="bg-[#f7f6ef] text-gray-700">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <NavLink
              to="/"
              className="text-2xl font-bold text-green-500"
            >
              EcoTech
            </NavLink>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-700">
              Menghubungkan teknologi dengan kepedulian terhadap
              lingkungan untuk menciptakan masa depan yang lebih hijau.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-700">
              Navigasi
            </h3>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="w-fit text-sm transition-colors duration-300 hover:text-green-500"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-700">
              Ikuti Kami
            </h3>

            <p className="mb-4 text-sm text-gray-400">
              Ikuti EcoTech untuk mendapatkan informasi dan
              perkembangan terbaru.
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-sm transition-all duration-300 hover:bg-green-600 hover:text-white"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-sm transition-all duration-300 hover:bg-green-600 hover:text-white"
                aria-label="Facebook"
              >
                FB
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-sm transition-all duration-300 hover:bg-green-600 hover:text-white"
                aria-label="Twitter"
              >
                X
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 EcoTech. All rights reserved.
          </p>

          <p>
            Technology for a Greener Future
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;