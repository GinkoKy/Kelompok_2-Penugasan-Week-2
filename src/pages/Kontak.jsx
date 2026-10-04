import Section from "../components/Section";
import FaqList from "../components/FaqList";
import faqData from "../data/faq";

function Kontak() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
            Kontak EcoTech
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Hubungi Kami,
            <span className="block text-green-600 dark:text-green-400">
              Mari Berkolaborasi.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Hubungi tim
            EcoTech atau lihat pertanyaan umum di bawah ini.
          </p>
        </div>
      </section>

      {/* Form Kontak (dikerjakan Kris / Zaydan) */}

      {/* FAQ */}
      <Section
        eyebrow="FAQ"
        title="Pertanyaan Umum"
        description="Beberapa pertanyaan yang sering ditanyakan tentang EcoTech."
      >
        <div className="mx-auto max-w-4xl">
          <FaqList data={faqData} />
        </div>
      </Section>
    </main>
  );
}

export default Kontak;