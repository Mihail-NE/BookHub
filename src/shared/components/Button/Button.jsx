const Button = ({
    type = "primary",
    size = "medium",
    disabled = false,
    onClick,
    className = "",
    children,
}) => {
    const baseStyles = "rounded-md font-medium transition-colors";

    const variants = {
        primary: "bg-violet-600 text-white hover:bg-violet-700",
        secondary: "bg-violet-100 text-violet-600 hover:bg-violet-200",
        outline:
            "border-2 border-violet-600 text-violet-600 hover:bg-violet-50",
        danger: "bg-white text-red-600 hover:bg-red-50 border border-red-400",
    };

    const sizes = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg rounded-xl font-semibold",
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
        ${baseStyles}
        ${variants[type]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default Button;
