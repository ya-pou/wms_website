"use client";
import Navbar from "./components/layouts/Navbar";
import Image from "next/image";
import Button from "./components/ui/Button";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Method from "./components/sections/Method";
import Contact from "./components/sections/Contact";
import Footer from "./components/layouts/Footer";
import useFadeInOnScroll from "./hooks/useFadeInScroll";
import Portfolio from "./components/sections/Portfolio";

export default function Home() {
  useFadeInOnScroll();

  return (
    <>
      <header>
        <Navbar />
        {/* HERO GLOW */}
        <section className="relative overflow-hidden md:py-24 py-6 px-6 fade-in">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full hero-glow animate-pulse-smooth -z-10"></div>
          <h1 className="max-w-6xl mx-auto text-10xl md:text-6xl text-4xl font-extrabold leading-tight bg-gradient-to-br from-white to-blue-500 bg-clip-text text-transparent">
            Des sites performants & des outils internes sur mesure.
          </h1>
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl mx-auto relative z-10">
              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                Je conçois des solutions web fiables, rapides et adaptées aux besoins réels des entreprises.<br />
                Site vitrine, outil interne, automatisation ou dashboard : je vous aide à gagner du temps, structurer vos processus et améliorer votre efficacité.            </p>
              {/* CTA GROUP */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
                <Button href="#contact" variant="primary">
                  Demander un devis gratuit
                </Button>
                <Button href="#services" variant="secondary">
                  En savoir +
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center  sm:justify-center">
              <div className="logo-wrapper flex align-center justify-center">
                <Image src="/logo-wms.svg" width={300} height={300} alt="Logo" className="logo opacity-70" />
                <div className="particles">
                  <div className="layer3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header >
      <Services />
      <Portfolio />
      <About />
      <Method />
      <Contact />
      <Footer />
    </>
  );
}
