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
      {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" /> */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(to right, var(--bb), var(--bp))`,
        }}
      />
      <div className="px-8 py-2 bg-background rounded-[6px] relative group transition duration-200 text-foreground hover:bg-transparent">
        {children}
      </div>
    </button>
  );
};
