import { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import Modal from "../components/Modal";
import programData from "../data/program";

function Program() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  function handleProgramClick(program) {
    setSelectedProgram(program);
  }

  function handleCloseModal() {
    setSelectedProgram(null);
  }

  return (
    <main className="min-h-screen bg-[#f7f6ef] text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
            Program EcoTech
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Bersama Menciptakan
            <span className="block text-green-600 dark:text-green-400">
              Perubahan.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Berbagai program EcoTech dirancang untuk meningkatkan kepedulian,
            kolaborasi, dan inovasi dalam menjaga lingkungan.
          </p>
        </div>
      </section>

      {/* Program */}
      <Section
        eyebrow="Program Kami"
        title="Langkah Nyata untuk Lingkungan"
        description="Pilih salah satu program untuk melihat informasi lebih lanjut."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programData.map((program) => (
            <Card
              key={program.id}
              number={program.number}
              icon={program.icon}
              title={program.title}
              description={program.description}
              onClick={() => handleProgramClick(program)}
            />
          ))}
        </div>
      </Section>

      {/* Modal Detail Program */}
      <Modal
        isOpen={selectedProgram !== null}
        onClose={handleCloseModal}
        title={selectedProgram?.title}
        description={selectedProgram?.detail}
      >
        {selectedProgram && (
          <div className="rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm leading-relaxed text-green-800 dark:text-green-300">
              Program ini merupakan salah satu bentuk langkah nyata EcoTech
              dalam mendorong kepedulian terhadap lingkungan.
            </p>
          </div>
        )}
      </Modal>
    </main>
  );
}

export default Program;