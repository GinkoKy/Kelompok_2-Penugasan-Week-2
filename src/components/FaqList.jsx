import { useState } from "react";
import faqData from "../data/kontak";

function FaqList() {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleFaqClick(id) {
    setActiveFaq(activeFaq === id ? null : id);
  }

  return (
    <div className="space-y-4">
      {faqData.map((faq) => {
        const isOpen = activeFaq === faq.id;

        return (
          <div
            key={faq.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Question */}
            <button
              type="button"
              onClick={() => handleFaqClick(faq.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </span>

              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 transition-transform duration-300 dark:bg-green-900/30 dark:text-green-400 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14M5 12h14"
                  />
                </svg>
              </span>
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-6 pb-5 leading-relaxed text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqList;