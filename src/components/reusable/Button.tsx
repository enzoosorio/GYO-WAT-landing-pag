import React from "react";
import { twMerge } from 'tailwind-merge'

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = ({
  children,
  className,
  onClick,
  type,
}: CustomButtonProps) => {
  return (
    <button
      className={twMerge(`py-3 px-6 rounded-4xl cursor-pointer bg-primary-blue font-poppins text-white font-bold hover:bg-sky-500 transition-colors ${className}`)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
