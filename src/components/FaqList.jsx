import { useState } from "react";

function FaqList({ data }) {
  // openId nyimpen id pertanyaan yang lagi kebuka
  // awalnya pertanyaan pertama yang kebuka
  const [openId, setOpenId] = useState(1);

  const handleClick = (id) => {
    // kalau yang diklik sudah kebuka, ditutup. kalau belum, dibuka
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
      {data.map((faq) => (
        <div
          key={faq.id}
          className="border-b border-gray-200 last:border-b-0 dark:border-gray-700"
        >
          {/* Pertanyaan */}
          <button
            onClick={() => handleClick(faq.id)}
            className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
          >
            <span className="font-semibold">{faq.question}</span>

            <span className="text-2xl text-green-600 dark:text-green-400">
              {openId === faq.id ? "-" : "+"}
            </span>
          </button>

          {/* Jawaban, cuma muncul kalau lagi kebuka */}
          {openId === faq.id && (
            <p className="px-6 pb-6 leading-relaxed text-gray-600 dark:text-gray-400 md:px-8">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqList;