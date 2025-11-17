export default function Method() {

  const steps = [
    {
      title: "Découverte & Analyse",
      text:
        "Appel gratuit pour comprendre vos besoins, vos objectifs et les défis de votre activité. J'analyse votre contexte pour proposer la meilleure solution."
    },
    {
      title: "Proposition & Devis",
      text:
        "Je vous présente une solution sur mesure avec un devis détaillé et transparent. Nous validons ensemble le périmètre et le planning du projet."
    },
    {
      title: "Développement",
      text:
        "Développement de votre projet avec des points réguliers pour vous tenir informé. Vous validez les fonctionnalités au fur et à mesure de l'avancement."
    },
    {
      title: "Livraison & Support",
      text:
        "Mise en ligne de votre projet et formation si nécessaire. Je reste disponible pour le support et les évolutions futures de votre solution."
    }
  ];

  return (
    <section id="methode" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Notre méthode de travail</h2>
          <p className="text-white/60 text-lg">
            Une méthode éprouvée pour garantir votre succès
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 relative fade-in">

                {/* Ligne verticale */}
                {i !== steps.length - 1 && (
                  <div
                    className="absolute left-8 top-16 w-[2px] h-[calc(100%+16px)] bg-gradient-to-b from-blue-500 to-transparent"
                  />
                )}

                {/* Numéro */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_8px_24px_rgba(59,130,246,0.3)]"
                >
                  {i + 1}
                </div>

                {/* Contenu */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.text}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}