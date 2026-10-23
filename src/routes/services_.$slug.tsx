import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, pageHead } from "@/lib/site-content";
import { serviceDetails, type DetailItem } from "@/lib/service-details";
import { serviceImages } from "@/lib/service-images";
import { useLanguage, Reveal, ContactBand } from "@/components/site/site-shell";
export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    if (!services.some((service) => service.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    return service ? pageHead(service.fr, service.frDesc) : {};
  },
  component: ServicePage,
});
function Item({ item }: { item: DetailItem }) {
  if (typeof item === "string") return <>{item}</>;
  return (
    <span>
      <strong>{item.t}</strong>
      {item.d && <> {item.d}</>}
      {item.sub && (
        <ul className="detail-sublist">
          {item.sub.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      )}
    </span>
  );
}
function ServicePage() {
  const { slug } = Route.useParams();
  const { language, t } = useLanguage();
  const index = services.findIndex((service) => service.slug === slug);
  const service = services[index];
  const detail = serviceDetails[slug]?.[language];
  const previous = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  if (!service || !detail || !previous || !next) return null;
  return (
    <>
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <Link to="/services" className="detail-back">
              <ArrowLeft size={15} />
              {language === "fr" ? "Tous nos services" : "All our services"}
            </Link>
            <span className="eyebrow">SERVICE {String(index + 1).padStart(2, "0")}</span>
            <h1>{service[language]}</h1>
            {detail.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {detail.highlights && (
              <div className="detail-highlights">
                {detail.highlights.map((highlight) => (
                  <span key={highlight}>
                    <Sparkles size={15} />
                    {highlight}
                  </span>
                ))}
              </div>
            )}
            <Button asChild variant="brand">
              <Link to="/" hash="soumission">
                {t.quote}
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <img
            src={serviceImages[slug]}
            alt={service[language]}
            width={1280}
            height={960}
            fetchPriority="high"
          />
        </div>
      </section>
      {detail.blocks.length > 0 && (
        <section className="container detail-blocks">
          {detail.blocks.map((block, i) => (
            <Reveal className="detail-block" key={block.title ?? i}>
              <div>{block.title && <h2>{block.title}</h2>}</div>
              <div>
                {block.lead && <p className="detail-lead">{block.lead}</p>}
                {block.text?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {block.lists?.map((list, j) => (
                  <div className="detail-list" key={list.title ?? j}>
                    {list.title && <h3>{list.title}</h3>}
                    <ul>
                      {list.items.map((item, k) => (
                        <li key={k}>
                          <Check size={15} />
                          <Item item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {block.after?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </section>
      )}
      <nav
        className="container detail-pager"
        aria-label={language === "fr" ? "Autres services" : "Other services"}
      >
        <Link to="/services/$slug" params={{ slug: previous.slug }}>
          <ArrowLeft size={16} />
          <span>
            <small>{language === "fr" ? "Service précédent" : "Previous service"}</small>
            {previous[language]}
          </span>
        </Link>
        <Link to="/services/$slug" params={{ slug: next.slug }}>
          <span>
            <small>{language === "fr" ? "Service suivant" : "Next service"}</small>
            {next[language]}
          </span>
          <ArrowRight size={16} />
        </Link>
      </nav>
      <ContactBand />
    </>
  );
}
