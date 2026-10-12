import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Utensils, Store, HardHat, House, ArrowUpRight } from "lucide-react";
import { pageHead } from "@/lib/site-content";
import { useLanguage, PageIntro, Reveal, ContactBand } from "@/components/site/site-shell";
export const Route = createFileRoute("/secteurs")({
  head: () =>
    pageHead(
      "Secteurs d’activité",
      "Des solutions de nettoyage adaptées aux bureaux, restaurants, commerces, chantiers et résidences à Drummondville.",
    ),
  component: Sectors,
});
function Sectors() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro label={t.sectorsLabel} title={t.sectorsTitle} text={t.sectorIntro} />
      <section className="container sector-detail-grid">
        {[Building2, Utensils, Store, HardHat, House].map((Icon, i) => (
          <Reveal key={i}>
            <article className="sector-detail">
              <Icon />
              <h2>{t.sectors[i]}</h2>
              <p>{t.sectorDescriptions[i]}</p>
              <Link to="/contact" className="text-link">
                {t.quote}
                <ArrowUpRight size={16} />
              </Link>
            </article>
          </Reveal>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
