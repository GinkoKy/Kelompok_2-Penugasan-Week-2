import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 dark:bg-gray-900">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
          Error 404
        </p>

        <h1 className="mt-3 text-6xl font-bold text-gray-900 dark:text-white">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Halaman Tidak Ditemukan
        </h2>

        <p className="mx-auto mt-3 max-w-md text-gray-600 dark:text-gray-400">
          Maaf, halaman yang kamu cari tidak tersedia atau mungkin sudah
          dipindahkan.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}

export default NotFound;