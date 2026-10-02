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
    <footer className="bg-[#f7f6ef] border-t border-gray-200 text-gray-700 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <NavLink to="/" className="text-2xl font-bold text-green-500">
              EcoTech
            </NavLink>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-700 dark:text-white">
              Menghubungkan teknologi dengan kepedulian terhadap lingkungan
              untuk menciptakan masa depan yang lebih hijau.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-700 dark:text-white">Navigasi</h3>

            <div className="flex flex-col gap-3 ">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                  `transition-all duration-50 ${
                    isActive
                      ? "text-green-500 text-sm"
                      : "w-fit text-sm dark:text-gray-300 hover:text-green-500 active:text-green-800 active:font-semibold"
                  }`
                }
                  // className="w-fit text-sm transition-colors duration-300 dark:text-gray-300 hover:text-green-500 "
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-700 dark:text-white">
              Ikuti Kami
            </h3>

            <p className="mb-4 text-sm text-gray-400 dark:text-white-900">
              Ikuti EcoTech untuk mendapatkan informasi dan perkembangan
              terbaru.
            </p>

            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition hover:bg-green-600 hover:text-white dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition hover:bg-green-600 hover:text-white dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-8h2.75l.5-3h-3.25V8.1c0-.87.28-1.6 1.7-1.6h1.8V3.8c-.31-.04-1.37-.13-2.6-.13-2.57 0-4.35 1.57-4.35 4.45V10H7.5v3h2.55v8h3.45Z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition hover:bg-green-600 hover:text-white dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.7h1.73L8.26 4.2H6.4L17.8 19.7Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition hover:bg-green-600 hover:text-white dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M5.2 3A2.2 2.2 0 1 0 5.2 7.4 2.2 2.2 0 0 0 5.2 3ZM3.3 8.5h3.8V21H3.3V8.5ZM9.5 8.5h3.65v1.71h.05c.51-.97 1.75-2 3.6-2 3.85 0 4.56 2.54 4.56 5.85V21h-3.8v-6.13c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.59-2.35 3.23V21H9.5V8.5Z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition hover:bg-green-600 hover:text-white dark:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M19.6 7.2a5.7 5.7 0 0 1-3.5-1.2v8.1a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.07v3.27a2.8 2.8 0 1 0 1.8 2.56V2h3.2c.3 2.1 1.65 3.76 3.5 4.37v.83Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 EcoTech. All rights reserved.</p>

          <p>Technology for a Greener Future</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
