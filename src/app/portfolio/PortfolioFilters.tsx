"use client";

import { useState } from "react";
import { projects } from "../datas/projects";

interface PortfolioFiltersProps {
  onFilterChange: (type: string) => void;
}

export default function PortfolioFilters({ onFilterChange }: PortfolioFiltersProps) {
  const types = ["Tous", ...new Set(projects.map((p) => p.type))];
  const [active, setActive] = useState("Tous");

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-16">
      {types.map((t) => (
        <button
          key={t}
          onClick={() => {
            setActive(t);
            onFilterChange(t);
          }}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all z-99
            ${active === t
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white/10 text-white/60 border border-white/10 hover:bg-white/20"
            }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}