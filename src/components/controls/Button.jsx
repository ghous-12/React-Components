import { useState } from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex items-center gap-1 text-white rounded-full px-4 py-1 text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
