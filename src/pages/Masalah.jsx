import Section from "../components/Section";
import Card from "../components/Card";

const masalahData = [
  {
    number: "01",
    icon: "♻️",
    title: "Sampah Plastik",
    description:
      "Penggunaan plastik sekali pakai masih menjadi salah satu permasalahan lingkungan yang sulit dikendalikan.",
  },
  {
    number: "02",
    icon: "🌊",
    title: "Pencemaran Air",
    description:
      "Limbah rumah tangga dan aktivitas manusia dapat menurunkan kualitas air serta mengganggu ekosistem perairan.",
  },
  {
    number: "03",
    icon: "🌳",
    title: "Kerusakan Lingkungan",
    description:
      "Perubahan penggunaan lahan dan kurangnya kepedulian terhadap lingkungan dapat mengurangi kualitas ekosistem.",
  },
  {
    number: "04",
    icon: "🌫️",
    title: "Pencemaran Udara",
    description:
      "Aktivitas transportasi dan industri dapat menghasilkan polusi yang berdampak pada kualitas udara.",
  },
];

function Masalah() {
  return (
    <main className="min-h-screen bg-[#f7f6ef] text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
            Permasalahan Lingkungan
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Kenali Masalahnya,
            <span className="block text-green-600 dark:text-green-400">
              Mulai Peduli.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Berbagai permasalahan lingkungan masih terjadi di sekitar kita.
            Mengenali masalah menjadi langkah awal untuk membangun kepedulian
            dan mencari solusi yang lebih berkelanjutan.
          </p>
        </div>
      </section>

      {/* Daftar Masalah */}
      <Section
        eyebrow="Isu Lingkungan"
        title="Masalah yang Perlu Kita Perhatikan"
        description="Beberapa permasalahan lingkungan yang menjadi perhatian EcoTech."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {masalahData.map((masalah) => (
            <Card
              key={masalah.number}
              number={masalah.number}
              icon={masalah.icon}
              title={masalah.title}
              description={masalah.description}
            />
          ))}
        </div>
      </Section>

      {/* Ajakan */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-green-600 p-8 text-center text-white md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              Perubahan Dimulai dari Kepedulian
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-green-50">
              Dengan memahami permasalahan lingkungan, kita dapat mengambil
              langkah kecil yang memberikan dampak positif bagi lingkungan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Masalah;