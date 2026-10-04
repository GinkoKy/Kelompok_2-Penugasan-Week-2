import ContactForm from "../components/ContactForm";
import FaqList from "../components/FaqList";

function Kontak() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
            Kontak Kami
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Mari Terhubung dengan
            <span className="block text-green-600 dark:text-green-400">
              EcoTech
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Punya pertanyaan, saran, atau ingin berbagi pendapat tentang
            teknologi dan lingkungan? Kirimkan pesan melalui form berikut.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* Information */}
          <div className="flex flex-col justify-center">
            <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Punya Sesuatu untuk Disampaikan?
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
              EcoTech terbuka terhadap pertanyaan, saran, maupun pendapat
              mengenai penggunaan teknologi yang lebih bertanggung jawab
              terhadap lingkungan.
            </p>

            <div className="mt-8 rounded-2xl bg-green-100 p-6 dark:bg-green-900/20">
              <h3 className="font-bold text-green-800 dark:text-green-300">
                Mulai dari hal kecil
              </h3>

              <p className="mt-2 leading-relaxed text-green-700 dark:text-green-400">
                Kepedulian terhadap lingkungan dapat dimulai dari kebiasaan
                sederhana dalam menggunakan teknologi sehari-hari.
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Pertanyaan yang Sering Ditanyakan
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              Temukan jawaban dari beberapa pertanyaan umum mengenai EcoTech.
            </p>
          </div>

          <FaqList />
        </div>
      </section>
    </main>
  );
}

export default Kontak;