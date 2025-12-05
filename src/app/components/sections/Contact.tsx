"use client";

import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="md:py-24 py-6 bg-[rgba(2,6,23,0.8)]">
      <div className="container mx-auto px-4 max-w-xl">

        {/* Intro */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à lancer votre projet ?
          </h2>
          <h3 className="text-2xl text-white mb-3">
            Réponse garantie sous 24h
          </h3>
          <p className="text-white/60">
            Expliquez-moi vos besoins en quelques lignes : je vous accompagne pour trouver la meilleure solution pour votre activité.          </p>
        </div>

        {/* Formulaire */}
        <div className="bg-blue/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg shadow-black/20 hover:border-blue-500 fade-in hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
          <form className="space-y-6">

            {/* Nom */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-white/80 font-medium">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="w-full p-4 rounded-xl bg-[rgba(30,41,59,0.5)] border border-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-[rgba(30,41,59,0.7)]" />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-white/80 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="true"
                placeholder="votre@email.com"
                className="w-full p-4 rounded-xl bg-[rgba(30,41,59,0.5)] border border-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-[rgba(30,41,59,0.7)]" />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-white/80 font-medium">
                Décrivez votre projet
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Parlez-moi de votre projet, vos besoins et vos objectifs..."
                className="w-full p-4 rounded-xl min-h-[150px] bg-[rgba(30,41,59,0.5)] border border-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-[rgba(30,41,59,0.7)] resize-vertical" />
            </div>

            {/* Bouton */}
            <Button variant="primary" type="submit" className="w-full cursor-pointer">
              Envoyer ma demande
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}