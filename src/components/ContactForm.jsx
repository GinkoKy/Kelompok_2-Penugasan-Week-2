import { useState } from "react";
import sendContact from "../services/contactApi";

function ContactForm() {
  // 1. State
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    content: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // 2. Handle input
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // 3. Validasi
  function validateForm() {
    if (formData.author.trim().length < 2) {
      return "Nama minimal 2 karakter.";
    }

    if (formData.title.trim().length < 3) {
      return "Subjek minimal 3 karakter.";
    }

    if (formData.content.trim().length < 10) {
      return "Pesan minimal 10 karakter.";
    }

    return "";
  }

  // 4. Submit
  async function handleSubmit(event) {
    event.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    const validationMessage = validateForm();

    if (validationMessage) {
      setMessage({
        type: "error",
        text: validationMessage,
      });

      return;
    }

    setIsLoading(true);

    try {
      const response = await sendContact({
        author: formData.author.trim(),
        title: formData.title.trim(),
        content: formData.content.trim(),
      });

      if (response.status === 201) {
        setMessage({
          type: "success",
          text: "Pesan berhasil dikirim.",
        });

        setFormData({
          author: "",
          title: "",
          content: "",
        });
      } else if (response.status === 400) {
        setMessage({
          type: "error",
          text: "Data yang dikirim tidak valid.",
        });
      } else if (response.status === 401) {
        setMessage({
          type: "error",
          text: "Tidak memiliki izin untuk mengirim pesan.",
        });
      } else {
        setMessage({
          type: "error",
          text: "Terjadi kesalahan. Silakan coba lagi.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Tidak dapat terhubung ke server.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="author"
          className="mb-2 block font-medium text-gray-900 dark:text-white"
        >
          Nama
        </label>

        <input
          id="author"
          name="author"
          type="text"
          value={formData.author}
          onChange={handleChange}
          placeholder="Masukkan nama kamu"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>

      {/* Subject */}
      <div className="mt-5">
        <label
          htmlFor="title"
          className="mb-2 block font-medium text-gray-900 dark:text-white"
        >
          Subjek
        </label>

        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Masukkan subjek"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>

      {/* Message */}
      <div className="mt-5">
        <label
          htmlFor="content"
          className="mb-2 block font-medium text-gray-900 dark:text-white"
        >
          Pesan
        </label>

        <textarea
          id="content"
          name="content"
          rows="6"
          value={formData.content}
          onChange={handleChange}
          placeholder="Tulis pesan kamu..."
          className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
        ></textarea>
      </div>

      {/* Message */}
      {message.text && (
        <div
          className={`mt-5 rounded-xl px-4 py-3 text-sm ${
            message.type === "success"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}

export default ContactForm;
