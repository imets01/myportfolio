// components/LitUpButton.jsx
"use client";
import React from "react";

export const LitUpButton = ({
  type = "button",
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-[3px] relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg" />
      <div className="px-8 py-2 bg-background rounded-[10px] relative group transition duration-200 text-foreground hover:bg-transparent">
        {children}
      </div>
    </button>
  );
};
