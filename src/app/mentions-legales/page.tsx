import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Web."
};
export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <section className="pt-16 pb-8 container mx-auto px-4">
        <h1 className="pt-4 text-center text-5xl font-bold text-blue-500 mb-8">Mentions légales</h1>
        <p className="mb-4 text-blue-500">En vigueur au 01/04/2023</p>
        <p className="mb-8">Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l &#39;«Utilisateur», du site webmate-services.com , ci-après le «Site» , les présentes mentions légales. La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique «Mentions légales».</p>
        <h2 className="text-3xl font-bold text-blue-500 mb-4">ARTICLE 1 - L’EDITEUR</h2>
        <p className="mb-8">L’édition et la direction de la publication du Site est assurée par Haag Alexis, domiciliée 6 rue d’artagnan - 80090, Amiens, dont le numéro de téléphone est 0749127483, et l’adresse e-mail alexis.h@webmate-services.com. ci-après l’«Editeur».</p>
        <h2 className="text-3xl font-bold text-blue-500 mb-4">ARTICLE 2 - L’HEBERGEUR</h2>
        <p className="mb-8">L’hébergeur du Site est la société OVH SAS, immatriculée au RCS de Lille sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix.</p>
        <h2 className="text-3xl font-bold text-blue-500 mb-4">ARTICLE 3 - ACCES AU SITE</h2>
        <p className="mb-8">Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l’Editeur ne saurait être tenu responsable.</p>
        <h2 className="text-3xl font-bold text-blue-500 mb-4">ARTICLE 4 - COLLECTE DES DONNEES</h2>
        <p className="mb-8">Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs. Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil. Pour plus d’informations, se reporter aux CGV du site webmate-services.com accessible à la rubrique «CGV»</p>
      </section>
      <Footer />
    </>
  )
}