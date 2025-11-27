"use client";

import { useState } from "react";
import { projects, ProjectType } from "../datas/projects";
interface PortfolioCarouselProps {
  filteredProjects: ProjectType[];
}
export default function PortfolioCarousel({ filteredProjects }: PortfolioCarouselProps) {
  const list = filteredProjects.length ? filteredProjects : projects;
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + list.length) % list.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % list.length);

  const getPosition = (i: number) => {
    if (i === current) return "center";
    if (i === (current - 1 + list.length) % list.length) return "left";
    if (i === (current + 1) % list.length) return "right";
    return "hidden";
  };

  return (
    <div className="h-[100%] w-full absolute top-0 left-0 right-0 z-1 overflow-hidden">
      {/* Ground */}
      <div id="ground" className="absolute h-[29%] bottom-0 w-full z-1"></div>
      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-5 top-[50%] z-100 bg-blue-500/30 hover:bg-blue-500 p-3 rounded-full text-white cursor-pointer"
      >
        ←
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-5 top-[50%] z-100 bg-blue-500/30 hover:bg-blue-500 p-3 rounded-full text-white cursor-pointer"
      >
        →
      </button>

      {/* Cards Container */}
      <div className="w-full perspective-1200">
        {list.map((project: ProjectType, i: number) => {
          const pos = (list.length > 1) ? getPosition(i) : 'center';
          const base = `
            transition-all duration-[0.8s] transform-style-preserve-3d
            absolute top-[35%] rounded-2xl left-1/2 -translate-x-1/2
            w-[380px] h-[240px]
            cursor-pointer hover:mt-[-10px]
          `;

          let transform = "";

          if (pos === "center") transform = "translate-z-[100px] scale-125 z-50";
          else if (pos === "left")
            transform = "left-[18%] -translate-z-[150px] translate-y-[-5px] z-21";
          else if (pos === "right")
            transform = "left-[82%] -translate-z-[150px] translate-y-[-5px] z-21";
          else transform = "opacity-0 pointer-events-none";

          return (
            <div
              key={project.id}
              // className={`${base} ${transform} p-card`}
              className={`${base} ${transform} p-card`}
              onClick={() => setCurrent(i)}
              style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* IMAGE BACKGROUND */}
              {/* <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-90"
              /> */}


              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end rounded-2xl">
                <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                <p className="text-blue-400 text-sm font-semibold">{project.type}</p>
              </div>

              {/* MIRROR */}
              {/* <div
                  className={`p-card-mirror absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end ${pos}`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-semibold">{project.type}</p>
                </div> */}
              {/* MIRROR */}
              {/* Mirror card */}
              <div className={`p-card-mirror rounded-2xl  ${pos}`} style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}        >
                {/* Overlay */}
                <div
                  className={`absolute inset-0 to-transparent p-4 flex flex-col justify-end`}>
                  <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-semibold">{project.type}</p>
                </div>
              </div>
            </div >
          );
        })}
      </div>
    </div >
  );
}