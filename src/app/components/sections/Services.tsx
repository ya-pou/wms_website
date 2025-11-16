import Card from "../ui/Card";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-white/60 text-lg">
            Des solutions web complètes pour propulser votre activité vers le succès
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Card key={i} className="text-center">
              <div
                className="
                  w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-blue-600 to-cyan-400
                "
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-white/60 leading-relaxed mb-6">
                {service.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: "Sites Vitrines Modernes",
    text:
      "Création et refonte de sites web rapides, responsives et optimisés pour le référencement. Design moderne qui convertit vos visiteurs en clients.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    title: "Automatisation Métier",
    text:
      "Générateurs de devis, connecteurs API, workflows automatisés et outils personnalisés pour optimiser vos processus et gagner un temps précieux.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
  },
  {
    title: "Dashboards & Data Visualisation",
    text:
      "Tableaux de bord interactifs et visualisations de données pour piloter votre activité avec des métriques claires et actionnables.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
];