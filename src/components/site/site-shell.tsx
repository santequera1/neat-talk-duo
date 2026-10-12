import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy, paths, type Language } from "@/lib/site-content";
import logo from "@/assets/jr10-logo.png.asset.json";
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "fr", setLanguage: () => {} });
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return { ...context, t: copy[context.language] };
};
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
export function SiteShell({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const t = copy[language];
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = menuRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const nodes = menuRef.current?.querySelectorAll<HTMLElement>("a,button");
        if (!nodes?.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const closeMenu = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="site">
        <header className="site-header">
          <Link to="/" className="brand" aria-label="Solution d’entretien JR10 — accueil">
            <img src={logo.url} alt="Solution d’entretien JR10" width="78" height="80" />
          </Link>
          <nav className="desktop-nav" aria-label="Navigation">
            {paths.slice(1).map((path, i) => (
              <Link key={path} to={path} className={pathname === path ? "active" : ""}>
                {t.nav[i + 1]}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <div className="language-switch" aria-label="Language">
              <Button
                variant="ghost"
                size="sm"
                aria-pressed={language === "fr"}
                onClick={() => setLanguage("fr")}
              >
                FR
              </Button>
              <span>/</span>
              <Button
                variant="ghost"
                size="sm"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
              >
                EN
              </Button>
            </div>
            <Button asChild variant="brand" className="desktop-quote">
              <Link to="/contact">
                {t.quote}
                <ArrowUpRight />
              </Link>
            </Button>
            <Button
              ref={toggleRef}
              variant="ghost"
              size="icon"
              className="mobile-trigger"
              aria-label={language === "fr" ? "Ouvrir le menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </Button>
          </div>
        </header>
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`mobile-menu ${open ? "menu-open" : ""}`}
          role="dialog"
          aria-modal={open ? true : undefined}
          aria-label={language === "fr" ? "Menu de navigation" : "Navigation menu"}
          aria-hidden={!open}
          inert={!open}
        >
          <div className="mobile-menu-top">
            <img src={logo.url} alt="JR10" width="78" height="80" />
            <Button
              variant="outline"
              size="icon"
              aria-label={language === "fr" ? "Fermer le menu" : "Close menu"}
              onClick={closeMenu}
            >
              <X />
            </Button>
          </div>
          <nav>
            {paths.map((path, i) => (
              <Link key={path} to={path} onClick={closeMenu}>
                <span className="menu-number">0{i + 1}</span>
                {t.nav[i]}
                <ArrowUpRight />
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-bottom">
            <p>{t.location}</p>
            <a href="tel:+18194617020">819 461 7020</a>
            <div className="language-switch">
              <Button
                variant="ghost"
                aria-pressed={language === "fr"}
                onClick={() => setLanguage("fr")}
              >
                FR
              </Button>
              <span>/</span>
              <Button
                variant="ghost"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
              >
                EN
              </Button>
            </div>
          </div>
        </div>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-main">
            <div className="footer-brand">
              <img
                src={logo.url}
                alt="Solution d’entretien JR10"
                loading="lazy"
                width="110"
                height="112"
              />
              <p>{t.footerText}</p>
            </div>
            <div>
              <h3>{t.navigation}</h3>
              {paths.slice(1).map((path, i) => (
                <Link key={path} to={path}>
                  {t.nav[i + 1]}
                </Link>
              ))}
            </div>
            <div>
              <h3>{t.contact}</h3>
              <a href="tel:+18194617020">
                <Phone size={16} />
                819 461 7020
              </a>
              <p>
                <MapPin size={16} />
                <span>
                  426 rue Cormier
                  <br />
                  Drummondville, QC J2C 7L9
                </span>
              </p>
              <span className="footer-local">{t.location}</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Solution d’entretien JR10. {t.rights}</span>
            <span>
              {language === "fr"
                ? "Honnêteté · Professionnalisme · Respect"
                : "Honesty · Professionalism · Respect"}
            </span>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}
export function ContactBand() {
  const { t } = useLanguage();
  return (
    <section className="contact-band">
      <Reveal className="contact-band-inner">
        <div>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
        </div>
        <Button variant="light" size="lg" asChild>
          <Link to="/contact">
            {t.quote}
            <ArrowUpRight />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
export function PageIntro({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <section className="page-intro">
      <div className="container">
        <span className="eyebrow">{label}</span>
        <h1 className="multiline">{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
