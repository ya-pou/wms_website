"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { projects, ProjectType } from "../datas/projects";
import Button from "../components/ui/Button";

interface PortfolioCarouselProps {
  filteredProjects: ProjectType[];
}
export default function PortfolioCarousel({ filteredProjects }: PortfolioCarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const list = filteredProjects.length ? filteredProjects : projects;
  const [current, setCurrent] = useState(0);
  const [openProject, setOpenProject] = useState<ProjectType | null>(null);

  const prev = () =>
    setCurrent((prev) => {
      const nextIndex = (prev - 1 + list.length) % list.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });

  const next = () =>
    setCurrent((prev) => {
      const nextIndex = (prev + 1) % list.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const children = container.children;
    if (!children.length) return;

    const target = children[index] as HTMLElement;

    container.scrollTo({
      left: target.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  };

  const getPosition = (i: number) => {
    if (i === current) return "center";
    if (i === (current - 1 + list.length) % list.length) return "left";
    if (i === (current + 1) % list.length) return "right";
    return "hidden";
  };

  return (
    <>
      {/* Left Button */}
      <div className="hidden md:block">
        <div className="h-[100%] w-full absolute top-0 left-0 right-0 z-1 overflow-hidden">
          {/* Ground */}
          <div id="ground" className="absolute h-[29%] bottom-0 w-full z-1"></div>
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
            w-[260px] h-[180px] sm:w-[220px] sm:h-[240px] md:w-[380px] md:h-[240px]
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
                  onClick={() => {
                    if (i === current) {
                      setOpenProject(project)
                    } else {
                      setCurrent(i)
                    }
                  }
                  }
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
      </div>
      {/* MOBILE VERSION - Horizontal Carousel */}
      <div className="md:hidden w-full relative py-4 mt-5 overflow-hidden">

        {/* Buttons on mobile */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-blue-500/40 hover:bg-blue-500 p-3 rounded-full text-white"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-blue-500/40 hover:bg-blue-500 p-3 rounded-full text-white"
        >
          →
        </button>

        {/* Scrollable row */}
        <div
          ref={carouselRef}
          className="flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {list.map((project: ProjectType) => (
            <div
              key={project.id}
              onClick={() => setOpenProject(project)}
              className={`
                min-w-[85%] 
                h-[420px]
                snap-center
                bg-black/40 backdrop-blur-md rounded-2xl border border-white/10
                overflow-hidden cursor-pointer shadow-xl
              `}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-1/2 object-cover"
              />

              <div className="h-[50%] p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-semibold">{project.type}</p>
                </div>
                <p className="text-white-100 text-sm mb-5">{project.short_description}</p>
                <Button>En savoir +</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MODAL */}
      {
        openProject && (
          <div
            className={`
              fixed inset-0 z-[999]
              bg-black/70 backdrop-blur-xl
              flex items-center justify-center
              animate-fadeIn
            `}
          >
            {/* CARD FULLSCREEN */}
            <div
              className={`
              w-[95%] max-w-5xl h-[85vh] z-[1000]
              bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl
              shadow-2xl overflow-hidden
              flex flex-col md:flex-row animate-grow relative
            `}
            >
              {/* LEFT IMAGE */}
              <div className="w-full md:w-1/3hidden md:block">
                <Image
                  src={openProject.image}
                  className="w-full h-full object-contain"
                  alt={openProject.title}
                  width={1000}
                  height={500}
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full md:w-2/3 p-8 overflow-y-auto scrollbar-hide">
                <h2 className="text-3xl font-bold text-white mb-3">
                  {openProject.title}
                </h2>

                <p className="text-blue-400 font-semibold mb-6 uppercase tracking-wide">
                  {openProject.type}
                </p>

                {openProject.link ? (
                  <p className="text-blue-300 mb-2"><a href={`${openProject.link}`} target="_blank" rel="noopener noreferrer">Voir le site</a></p>
                ) : ''}

                <p className="text-white/70 leading-relaxed mb-6">
                  {openProject.description}
                </p>

                {/* Stack */}
                {openProject.stacks && (
                  <div className="mt-4 mb-8">
                    <h3 className="text-white font-semibold text-xl mb-2">Stacks utilisée</h3>
                    <ul className="list-disc list-inside text-white/60">
                      {openProject.stacks.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* BUTTONS */}
                <button
                  className="px-4 py-2 absolute top-0 right-0 rounded-xl bg-white text-black hover:bg-blue-500/40 cursor-pointer hover:text-white"
                  onClick={() => setOpenProject(null)}
                >
                  X
                </button>

              </div>
            </div>
          </div>
        )
      }
    </>
  );
}