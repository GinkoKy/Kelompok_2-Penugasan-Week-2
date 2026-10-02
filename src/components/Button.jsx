import { Link } from "react-router-dom";

function Button({
  children,
  to,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}) {

  const variants = {
    primary: "bg-green-500 dark:bg-green-600 dark:active:bg-green-700 dark:active:text-gray-400 text-white hover:bg-green-700 active:bg-green-600 active:text-gray-300",

    secondary: "bg-gray-500 dark:bg-gray-600 dark:active:bg-gray-700 dark:active:text-gray-400 text-white hover:bg-gray-700 active:bg-gray-600 active:text-gray-300",

    warning: "bg-yellow-500 dark:bg-yellow-600 dark:active:bg-yellow-700 dark:active:text-gray-400 text-white hover:bg-yellow-700 active:bg-yellow-600 active:text-gray-300",

    danger: "bg-red-500 dark:bg-red-600 dark:active:bg-red-700 dark:active:text-gray-400 text-white hover:bg-red-700 active:bg-red-600 active:text-gray-300",

    info: "bg-cyan-500 dark:bg-cyan-600 dark:active:bg-cyan-700 dark:active:text-gray-400 text-white hover:bg-cyan-700 active:bg-cyan-600 active:text-gray-300",
  };

  const baseClass = `
    inline-flex items-center justify-center
    px-5 py-2.5
    rounded-lg
    font-medium
    transition-all duration-300
    shadow-md
    ${variants[variant]}
    ${className}
  `;

  // Jika ingin menjadi link gunakan 'to' (contoh : <Button to="/home">)
  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  // Jika hanya digunakan sebagai button biasa
  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );

}

export default Button;
