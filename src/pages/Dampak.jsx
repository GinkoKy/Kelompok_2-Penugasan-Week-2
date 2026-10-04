import Section from "../components/Section";
import Card from "../components/Card";

const dampakData = [
  {
    number: "01",
    icon: "🌱",
    title: "Lingkungan Lebih Hijau",
    description:
      "Kegiatan penghijauan dan kepedulian terhadap lingkungan membantu menciptakan lingkungan yang lebih asri dan nyaman.",
  },
  {
    number: "02",
    icon: "♻️",
    title: "Sampah Berkurang",
    description:
      "Kebiasaan memilah dan mengurangi penggunaan barang sekali pakai dapat membantu mengurangi jumlah sampah.",
  },
  {
    number: "03",
    icon: "💧",
    title: "Sumber Daya Terjaga",
    description:
      "Penggunaan air dan energi secara bijak membantu menjaga ketersediaan sumber daya untuk kebutuhan di masa depan.",
  },
  {
    number: "04",
    icon: "🤝",
    title: "Masyarakat Lebih Peduli",
    description:
      "Aksi bersama dapat meningkatkan kesadaran dan mendorong lebih banyak orang untuk ikut menjaga lingkungan.",
  },
];

function Dampak() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
            Dampak EcoTech
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Aksi Kecil,
            <span className="block text-green-600 dark:text-green-400">
              Dampak Berarti.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Setiap tindakan yang dilakukan secara konsisten dapat memberikan
            perubahan positif bagi lingkungan dan masyarakat.
          </p>
        </div>
      </section>

      {/* Dampak */}
      <Section
        eyebrow="Dampak Positif"
        title="Perubahan yang Bisa Kita Ciptakan"
        description="Kepedulian dan aksi bersama dapat memberikan berbagai dampak positif bagi lingkungan."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dampakData.map((dampak) => (
            <Card
              key={dampak.number}
              number={dampak.number}
              icon={dampak.icon}
              title={dampak.title}
              description={dampak.description}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-green-600 p-8 text-center text-white md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Satu Aksi Bisa Berarti
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-green-50">
              Ketika dilakukan bersama dan secara konsisten, tindakan sederhana
              dapat memberikan dampak yang lebih besar bagi lingkungan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dampak;