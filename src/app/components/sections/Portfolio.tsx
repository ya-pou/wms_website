"use client";

import { projects } from "@/app/datas/projects";
import Image from "next/image";
import Button from "../ui/Button";
export default function Portfolio() {
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="methode" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl"></div>

      {/* Header */}
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl font-bold text-white mb-4">Réalisations</h2>
        <p className="text-white/60 text-lg">
          Quelques projets réalisés pour des entreprises qui m’ont fait confiance.
        </p>
      </div>

      {/* Cards */}
      <div className="px-4 max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 fade-in">
        {previewProjects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg shadow-black/20 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/30"
          >

            {/* IMAGE */}
            <div className="relative w-full h-54">
              {/* IMAGE */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between bg-black/50 backdrop-blur-[2px] transition-all duration-700 group-hover:bg-black/20 group-hover:backdrop-blur-[0px]">

                {/* TEXT TOP */}
                <div
                  className="transition-all duration-700 group-hover:-translate-y-6 group-hover:opacity-0"
                >
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-semibold uppercase tracking-wide drop-shadow-lg">
                    {project.type}
                  </p>
                </div>

                {/* CTA BUTTON (hidden until hover) */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
                >
                  <Button
                    className="cursor-pointer px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 transition"
                    href={`/portfolio/#${project.id}`}
                  >
                    Voir le projet
                  </Button>
                </div>

                {/* TEXT BOTTOM */}
                <p
                  className="text-white/70 text-sm leading-relaxed drop-shadow-lg transition-all duration-700  group-hover:translate-y-6 group-hover:opacity-0"
                >
                  {project.short_description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className="text-center mt-16 fade-in">
        <Button
          href={`/portfolio/`}
        >
          Voir tous les projets
        </Button>
      </div>
    </section>
  )
}