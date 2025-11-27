import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("../ThreeBackground"))
import Card from "../ui/Card";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[rgba(2,6,23,0.5)]">
      <div className="py-24 container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Libérez votre potentiel numérique</h2>
          <p className="text-white/60 text-lg m-auto max-w-xl">
            WebMate Services fournit des solutions de pointes adaptées à vos besoins uniques, garantissant que votre présence en ligne se démarque et génère des résultats tangibles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 -z-100 fade-in">
          {whyItems.map((item, i) => (
            <Card glass={false} key={i} padding="p-8">
              <div className="text-blue-500 mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {item.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <ThreeBackground />
    </section>
  )
}

const whyItems = [
  {
    title: "Transparence",
    text:
      "Communication claire à chaque étape du projet. Vous savez exactement ce qui est fait et pourquoi.",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    title: "Code propre & maintenable",
    text:
      "Développement structuré, documenté et évolutif. Vous pouvez faire évoluer votre projet sans coûts cachés.",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: "Communication fluide",
    text:
      "Écoute, réactivité et conseils personnalisés. Vous avez un interlocuteur unique.",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Respect des délais",
    text:
      "Planification précise et livraisons dans les temps. Pas de surprises.",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
];