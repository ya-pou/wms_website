import Navbar from "./components/Navbar";
import Image from "next/image";
import Button from "./components/ui/Button";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Method from "./components/sections/Method";

export default function Home() {
  return (
    <header>
      <Navbar />
      {/* HERO GLOW */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full hero-glow animate-pulse-smooth -z-10"></div>
        <h1 className="max-w-6xl mx-auto text-10xl md:text-6xl font-extrabold leading-tight bg-gradient-to-br from-white to-blue-500 bg-clip-text text-transparent">
          Transformez votre présence digitale <br /> avec des solutions web modernes
        </h1>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-fadeInUp">
          <div className="max-w-3xl mx-auto relative z-10">
            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              Transformez votre paysage numérique avec WebMate Services. Nous élaborons des solutions innovantes adaptées à vos besoins uniques, en stimulant la croissance et en maximisant votre impact en ligne. Construisons le succès ensemble !
            </p>
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
      <Services />
      <About />
      <Method />
    </header >
  );
}
