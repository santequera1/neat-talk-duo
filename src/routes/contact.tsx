import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Plus } from "lucide-react";
import { pageHead } from "@/lib/site-content";
import { useLanguage, PageIntro, Reveal } from "@/components/site/site-shell";
import { InquiryForm } from "@/components/site/inquiry-form";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact et demande de soumission",
      "Parlons de vos besoins en entretien. Contactez Solution d’entretien JR10 au 819 461 7020 à Drummondville ou préparez votre demande de soumission.",
    ),
  component: Contact,
});
function Contact() {
  const { t } = useLanguage();
  return (
    <>
      <PageIntro label={t.contact.toUpperCase()} title={t.contactTitle} text={t.contactIntro} />
      <section className="container contact-layout">
        <div className="contact-details">
          <div>
            <h2>{t.phone}</h2>
            <a href="tel:+18194617020">819 461 7020</a>
          </div>
          <div>
            <h2>{t.address}</h2>
            <p>
              426 rue Cormier
              <br />
              Drummondville, QC
              <br />
              J2C 7L9, Canada
            </p>
          </div>
          <p className="contact-location">
            <MapPin size={18} />
            {t.location}
          </p>
        </div>
        <InquiryForm />
      </section>
      <section className="faq-section">
        <Reveal className="container faq-grid">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2>{t.faq}</h2>
          </div>
          <div className="faq-list">
            {t.faqQuestions.map((question, i) => (
              <details key={question}>
                <summary>
                  {question}
                  <Plus size={17} />
                </summary>
                <p>{t.faqAnswers[i]}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
