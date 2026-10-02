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
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    info: "bg-cyan-500 text-white hover:bg-teal-600",
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
