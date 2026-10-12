import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { services, pageHead } from "@/lib/site-content";
import { useLanguage, PageIntro, Reveal, ContactBand } from "@/components/site/site-shell";
export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "Nos services de nettoyage",
      "Découvrez nos services d’entretien commercial, grand ménage résidentiel, après-construction, vitres, tapis et rénovation de planchers.",
    ),
  component: Services,
});
function Services() {
  const { language, t } = useLanguage();
  return (
    <>
      <PageIntro label={t.servicesLabel} title={t.servicesTitle} text={t.servicesIntro} />
      <section className="service-list container">
        {services.map((service, i) => (
          <Reveal key={i}>
            <article
              className="service-detail"
              id={i === 0 ? "commercial" : i === 6 ? "residentiel" : `service-${i}`}
            >
              <span className="service-index">0{i + 1}</span>
              <div>
                <h2>{service[language]}</h2>
                <p>{language === "fr" ? service.frDesc : service.enDesc}</p>
                <Link to="/contact" className="text-link">
                  {t.quote}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              <ul>
                {(language === "fr" ? service.frItems : service.enItems).map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
