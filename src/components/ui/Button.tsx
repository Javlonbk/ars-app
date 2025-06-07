import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "accent" | "secondary";
}

const baseStyles =
  "py-3 px-6 rounded-full font-semibold transition-colors duration-200";

const variants = {
  accent: "bg-accent text-white hover:bg-green-600",
  secondary: "bg-secondary text-dark hover:bg-gray-300",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "accent",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
