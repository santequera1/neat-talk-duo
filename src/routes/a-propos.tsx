import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site-content";
import { useLanguage, PageIntro, Reveal, ContactBand } from "@/components/site/site-shell";
import office from "@/assets/commercial.jpg";
export const Route = createFileRoute("/a-propos")({
  head: () =>
    pageHead(
      "À propos de notre entreprise familiale",
      "Rencontrez Solution d’entretien JR10, une entreprise familiale fondée en 2019 à Drummondville. Honnêteté, professionnalisme et respect.",
    ),
  component: About,
});
function About() {
  const { t, language } = useLanguage();
  return (
    <>
      <PageIntro
        label={language === "fr" ? "À PROPOS DE JR10" : "ABOUT JR10"}
        title={t.aboutTitle}
        text={t.aboutIntro}
      />
      <section className="container about-content">
        <Reveal className="about-story">
          <div>
            <span className="eyebrow">{language === "fr" ? "NOTRE HISTOIRE" : "OUR STORY"}</span>
            <h2>{t.whyTitle.split("\n")[0]}</h2>
            <p>{t.aboutText}</p>
          </div>
          <img src={office} loading="lazy" alt={t.commercial} width={1280} height={960} />
        </Reveal>
        <Reveal className="mission-grid">
          <div>
            <h2>{t.mission}</h2>
            <p>{t.missionText}</p>
          </div>
          <div>
            <h2>{t.vision}</h2>
            <p>{t.visionText}</p>
          </div>
        </Reveal>
        <Reveal className="timeline">
          {["2019", "2024", "2026"].map((year, i) => (
            <div key={year}>
              <h3>{year}</h3>
              <p>{t.timeline[i]}</p>
            </div>
          ))}
        </Reveal>
      </section>
      <section className="team-section">
        <Reveal className="container">
          <span className="eyebrow">
            {language === "fr" ? "UNE ENTREPRISE FAMILIALE" : "A FAMILY-OWNED BUSINESS"}
          </span>
          <h2 className="section-title">{t.team}</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Jose Ricardo Marin</h3>
              <p>{t.owner}</p>
            </div>
            <div className="team-member">
              <h3>Yalile Egurrola Ibarra</h3>
              <p>{t.admin}</p>
            </div>
          </div>
        </Reveal>
      </section>
      <ContactBand />
    </>
  );
}
