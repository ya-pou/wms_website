import Link from "next/link";
import Button from "../ui/Button"

export default function Footer() {
  return (
    <footer className="bg-[rgba(2,6,23,0.8)] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">

        {/* CONTENT */}
        <div className="grid gap-24 sm:grid-cols-2 lg:grid-cols-3 mb-12">

          {/* À propos */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">À propos</h3>
            <p className="text-white/60 leading-relaxed">
              WebMate Services est une entreprise de développement Web, basée à Amiens, spécialisée dans la création de sites Internet et le développement sur mesure.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/#services" className="text-white/60 hover:text-blue-400 transition">Sites vitrines</Link></li>
              <li><Link href="/#services" className="text-white/60 hover:text-blue-400 transition">Automatisation métier</Link></li>
              <li><Link href="/#services" className="text-white/60 hover:text-blue-400 transition">Maintenance & support</Link></li>
              <li><Link href="/portfolio" className="text-white/60 hover:text-blue-400 transition">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Contacts</h3>
            <ul className="space-y-3">
              <li><a href="mailto:contact@webmate-services.com" className="text-white/60 hover:text-blue-400 transition">contact@webmate-services.com</a></li>
              <li><a href="tel:0749127483" className="text-white/60 hover:text-blue-400 transition">Téléphone : 07.49.12.74.83</a></li>
              <li className="mt-6"><Button href="/#contact" >Nous contacter</Button></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-center border-t border-white/10 pt-6 text-white/60 text-sm">
          <p>
            &copy; 2025 WebMate Services. Tous droits réservés. |
            <Link href="/mentions-legales" className="ml-2 text-white/60 hover:text-blue-400 transition">Mentions légales</Link> |
            <Link href="/cgv" className="ml-2 text-white/60 hover:text-blue-400 transition">CGV</Link>
          </p>
        </div>
      </div>
    </footer >
  );
}