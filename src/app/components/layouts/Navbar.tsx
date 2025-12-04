"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react"

const links = [
  { href: "/", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "À propos" },
  { href: "/#methode", label: "Méthode" },
  { href: "/portfolio", label: "Portfolio" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setVisible(true);
    });
  }, []);

  return (
    <div className={`navbar-anim ${visible ? " visible" : ""} fixed top-0 left-0 z-50 w-full bg-[#050507]/40 backdrop-blur-lg border-b border-white/5`} >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          WebMate Services
        </Link>

        {/* Centre : pill nav (desktop / tablette) */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="relative group rounded-full border border-white/10 bg-black/40 px-10 py-3 z-10 hover:bg-black">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-70 transition duration-300 blur-lg bg-blue-500/40"></div>
            {/* Contenu */}
            <div className="relative z-10 flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-200 hover:text-blue-400 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* CTA desktop / tablette */}
        <div className="hidden lg:flex">
          <Link
            href="/#contact"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white  shadow-lg hover:bg-blue-400 transition"
          >
            Contactez-nous
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          className="lg:hidden inline-flex flex-col gap-[4px] p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Ouvrir le menu"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>
      </div>

      {/* Menu mobile */}
      {
        open && (
          <div className="lg:hidden border-t border-white/10 bg-[#050507]/95">
            <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-sm text-gray-100 hover:text-blue-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                className="mt-2 rounded-full bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-400 transition"
                onClick={() => setOpen(false)}
              >
                Contactez-nous
              </Link>
            </nav>
          </div>
        )
      }
    </div >
  )
}