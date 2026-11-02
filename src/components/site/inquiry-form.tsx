import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./site-shell";
import { services, whatsappNumber } from "@/lib/site-content";
import { sendInquiry } from "@/lib/send-inquiry";
export function InquiryForm() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [fields, setFields] = useState<Record<string, string>>({
    province: "Québec",
    country: "Canada",
  });
  const requestLines = () => {
    const option = (name: string, options: string[]) => options[Number(fields[name])] ?? "";
    const lines: [string, string][] = [
      [t.request, fields["request"] ? option("request", t.requestOptions) : ""],
      [
        t.service,
        fields["service"]
          ? option(
              "service",
              services.map((service) => service[language]),
            )
          : "",
      ],
      [
        language === "fr" ? "Nom" : "Name",
        [fields["first"], fields["last"]].filter(Boolean).join(" "),
      ],
      [t.company, fields["company"] ?? ""],
      [t.sqft, fields["sqft"] ?? ""],
      [t.phoneField, fields["phone"] ?? ""],
      [t.email, fields["email"] ?? ""],
      [
        language === "fr" ? "Adresse" : "Address",
        ["street", "city", "province", "postal", "country"]
          .map((name) => fields[name])
          .filter(Boolean)
          .join(", "),
      ],
      [t.source, fields["source"] ? option("source", t.sources) : ""],
      [t.notes, fields["notes"] ?? ""],
    ];
    return lines.filter(([, value]) => value.trim());
  };
  const requestText = () =>
    [
      t.whatsappGreeting,
      "",
      ...requestLines().map(([label, value]) => `• ${label}: ${value}`),
    ].join("\n");
  const submit = async () => {
    setSending(true);
    let ok = false;
    try {
      const result = await sendInquiry({
        data: {
          lines: requestLines(),
          name: [fields["first"], fields["last"]].filter(Boolean).join(" "),
          replyTo: fields["email"] ?? "",
          website: fields["website"] ?? "",
        },
      });
      ok = result.ok;
    } catch {
      ok = false;
    }
    setEmailSent(ok);
    setSending(false);
    setDone(true);
  };
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
          <h2>{emailSent ? t.formSent : t.formDone}</h2>
          <p>{emailSent ? t.formSentText : t.formDoneText}</p>
          <div className="form-result-actions">
            <Button variant="whatsapp" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(requestText())}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle />
                {t.whatsapp}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+18194617020">
                <Phone />
                819 461 7020
              </a>
            </Button>
          </div>
          <Button
            variant="link"
            onClick={() => {
              setDone(false);
              setEmailSent(false);
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
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              if (sending) return;
              if (step === 1 && !fields["phone"]?.trim() && !fields["email"]?.trim()) {
                setContactError(true);
                return;
              }
              setContactError(false);
              if (step < 3) setStep(step + 1);
              else void submit();
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
                  {fields["request"] !== "1" &&
                    fields["request"] !== "2" &&
                    select(
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
                  {contactError && (
                    <p className="field-error field-wide" role="alert">
                      {t.contactRequired}
                    </p>
                  )}
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
            <label className="form-honeypot" aria-hidden="true">
              Website
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={fields["website"] ?? ""}
                onChange={(event) => change("website", event.target.value)}
              />
            </label>
            <div className="form-actions">
              {step > 0 ? (
                <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>
                  <ArrowLeft />
                  {t.prev}
                </Button>
              ) : (
                <span />
              )}
              <Button variant="brand" type="submit" disabled={sending}>
                {sending ? t.sending : step === 3 ? t.submit : t.next}
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
