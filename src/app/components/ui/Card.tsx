import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;        // active ou non l'effet hover
  glass?: boolean;        // active style glass
  padding?: string;       // p-6, p-8 etc.
}

export default function Card({
  children,
  className = "",
  hover = true,
  glass = true,
  padding = "p-8",
}: CardProps) {
  const base = `
    rounded-2xl
    ${padding}
    transition-all duration-300
    border border-white/10
  `;

  const glassStyle = glass
    ? "bg-1e293bb3/10 backdrop-blur-xl shadow-lg shadow-black/20"
    : "bg-white/5";

  const hoverStyle = hover
    ? `
      hover:-translate-y-2
      hover:border-blue-500
      hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]
      `
    : "";

  return (
    <div className={twMerge(base, glassStyle, hoverStyle, className)}>
      {children}
    </div>
  );
}