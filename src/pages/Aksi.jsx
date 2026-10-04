import Section from "../components/Section";
import Card from "../components/Card";

const aksiData = [
  {
    number: "01",
    icon: "♻️",
    title: "Kurangi Sampah Plastik",
    description:
      "Gunakan barang yang dapat dipakai kembali dan kurangi penggunaan plastik sekali pakai dalam aktivitas sehari-hari.",
  },
  {
    number: "02",
    icon: "🌱",
    title: "Menanam Pohon",
    description:
      "Berpartisipasi dalam kegiatan penghijauan untuk membantu menjaga keseimbangan ekosistem dan kualitas lingkungan.",
  },
  {
    number: "03",
    icon: "💧",
    title: "Hemat Air",
    description:
      "Gunakan air secara bijak dengan menghindari pemborosan dan memastikan keran tertutup setelah digunakan.",
  },
  {
    number: "04",
    icon: "⚡",
    title: "Hemat Energi",
    description:
      "Matikan lampu dan perangkat elektronik yang tidak digunakan untuk mengurangi konsumsi energi.",
  },
];

function Aksi() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
            Aksi Lingkungan
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Mulai dari Hal Kecil,
            <span className="block text-green-600 dark:text-green-400">
              Berikan Dampak Besar.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Menjaga lingkungan tidak selalu membutuhkan tindakan besar.
            Kebiasaan sederhana yang dilakukan secara konsisten dapat
            memberikan dampak positif bagi lingkungan.
          </p>
        </div>
      </section>

      {/* Aksi yang Bisa Dilakukan */}
      <Section
        eyebrow="Aksi Nyata"
        title="Apa yang Bisa Kita Lakukan?"
        description="Beberapa kebiasaan sederhana yang dapat diterapkan untuk membantu menjaga lingkungan."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aksiData.map((aksi) => (
            <Card
              key={aksi.number}
              number={aksi.number}
              icon={aksi.icon}
              title={aksi.title}
              description={aksi.description}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-green-600 p-8 text-center text-white md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Saatnya Bergerak Bersama
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-green-50">
              Tidak perlu menunggu perubahan besar. Mulailah dari satu aksi
              sederhana dan lakukan secara konsisten.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Aksi;