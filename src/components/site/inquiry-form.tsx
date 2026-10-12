import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./site-shell";
import { services } from "@/lib/site-content";
export function InquiryForm() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [fields, setFields] = useState<Record<string, string>>({
    province: "Québec",
    country: "Canada",
  });
  const change = (name: string, value: string) =>
    setFields((previous) => ({ ...previous, [name]: value }));
  const input = (name: string, label: string, type = "text") => (
    <label className="field" key={name}>
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={fields[name] ?? ""}
        onChange={(event) => change(name, event.target.value)}
      />
    </label>
  );
  const select = (name: string, label: string, options: string[]) => (
    <label className="field">
      <span>{label}</span>
      <select
        aria-label={label}
        name={name}
        value={fields[name] ?? ""}
        onChange={(event) => change(name, event.target.value)}
      >
        <option value="">{t.selected}</option>
        {options.map((option, i) => (
          <option value={String(i)} key={i}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
  return (
    <div className="inquiry-form">
      {done ? (
        <div className="form-result" role="status">
          <div className="result-icon">
            <Check />
          </div>
          <h2>{t.formDone}</h2>
          <p>{t.formDoneText}</p>
          <Button variant="brand" asChild>
            <a href="tel:+18194617020">
              <Phone />
              819 461 7020
            </a>
          </Button>
          <Button
            variant="link"
            onClick={() => {
              setDone(false);
              setStep(0);
              setFields({ province: "Québec", country: "Canada" });
            }}
          >
            {t.restart}
          </Button>
        </div>
      ) : (
        <>
          <div className="form-progress">
            {t.steps.map((label, index) => (
              <div key={label} className={index <= step ? "step-current" : ""}>
                <span>
                  {index < step ? <Check size={14} /> : String(index + 1).padStart(2, "0")}
                </span>
                <small>{label}</small>
              </div>
            ))}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (step < 3) setStep(step + 1);
              else setDone(true);
            }}
          >
            <span className="eyebrow">
              {language === "fr" ? "ÉTAPE" : "STEP"} {step + 1} / 4
            </span>
            <h2>{t.steps[step]}</h2>
            <div className="form-fields">
              {step === 0 && (
                <>
                  {select("request", t.request, t.requestOptions)}
                  {select(
                    "service",
                    t.service,
                    services.map((service) => service[language]),
                  )}
                </>
              )}
              {step === 1 && (
                <>
                  {input("first", t.first)}
                  {input("last", t.last)}
                  {input("company", t.company)}
                  {input("sqft", t.sqft, "number")}
                  {input("phone", t.phoneField, "tel")}
                  {input("email", t.email, "email")}
                </>
              )}
              {step === 2 && (
                <>
                  {input("street", t.street)}
                  {input("city", t.city)}
                  {input("province", t.province)}
                  {input("postal", t.postal)}
                  {input("country", t.country)}
                </>
              )}
              {step === 3 && (
                <>
                  {select("source", t.source, t.sources)}
                  <label className="field field-wide">
                    <span>{t.notes}</span>
                    <textarea
                      name="notes"
                      rows={5}
                      value={fields["notes"] ?? ""}
                      onChange={(event) => change("notes", event.target.value)}
                    />
                  </label>
                </>
              )}
            </div>
            <div className="form-actions">
              {step > 0 ? (
                <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>
                  <ArrowLeft />
                  {t.prev}
                </Button>
              ) : (
                <span />
              )}
              <Button variant="brand" type="submit">
                {step === 3 ? t.submit : t.next}
                <ArrowRight />
              </Button>
            </div>
            <p className="form-notice">{t.formNotice}</p>
          </form>
        </>
      )}
    </div>
  );
}
