"use client"

import { useState } from "react";
import PortfolioFilters from "./PortfolioFilters";
import { projects } from "../datas/projects";
import Navbar from "../components/layouts/Navbar";
import PortfolioCarousel from "./PortfolioCarousel";
import Footer from "../components/layouts/Footer";

export default function PortfolioPage() {
  const [type, setType] = useState("Tous");

  const filtered = type === "Tous"
    ? projects
    : projects.filter((p) => p.type === type);

  return (
    <>
      <Navbar />
      <section className="w-full h-[calc(100vh_-_80px)] relative">
        <h1 className="pt-4 text-center text-5xl font-bold text-white mb-8">
          Portfolio
        </h1>

        <PortfolioFilters onFilterChange={setType} />
        <PortfolioCarousel filteredProjects={filtered} />
      </section>
      <Footer />
    </>
  );
}