const Button = ({ content, className = "", onClick, disable, ...props }) => {
  const baseStyles =
    "group relative px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out overflow-hidden";

  //   const variantStyles = { variant = "primary",
  //     primary: "bg-light border hover:bg-gray-800",
  //     secondary: "bg-[#a2c4d7] text-gray-900 hover:bg-[#92b4c7]",
  //     accent: "border-2 border-gray-900 text-gray-900 hover:bg-gray-50",
  //   };

  return (
    <button
      className={`${baseStyles} border ${className}`}
      {...props}
      onClick={onClick}
      disabled={disable}
    >
      <span className="relative inline-flex overflow-hidden capitalize">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {content}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {content}
        </div>
      </span>
    </button>
  );
};

export default Button;
