import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string; // Optional className prop
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={` flex justify-center gap-2 items-center w-36 h-12 rounded  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
