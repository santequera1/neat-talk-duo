import { createServerFn } from "@tanstack/react-start";

// Emails each completed inquiry to the business inbox. SMTP settings come from the
// server environment (see .env.example); nothing is sent if they are missing.
type InquiryPayload = {
  lines: [string, string][];
  name: string;
  replyTo: string;
  website: string;
};

const MAX_PER_HOUR = 30;
let sentTimestamps: number[] = [];

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export const sendInquiry = createServerFn({ method: "POST" })
  .validator((data: InquiryPayload) => {
    const text = (value: unknown, max: number) =>
      typeof value === "string" ? value.slice(0, max) : "";
    const lines = Array.isArray(data?.lines) ? data.lines.slice(0, 20) : [];
    return {
      lines: lines.map((line) => [text(line?.[0], 120), text(line?.[1], 3000)] as [string, string]),
      name: text(data?.name, 120),
      replyTo: text(data?.replyTo, 200),
      website: text(data?.website, 200),
    };
  })
  .handler(async ({ data }) => {
    // Honeypot field filled in: a bot. Pretend it worked.
    if (data.website) return { ok: true };

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;
    if (!SMTP_USER || !SMTP_PASS) {
      console.error("[inquiry] SMTP_USER / SMTP_PASS not configured; email not sent");
      return { ok: false };
    }

    const now = Date.now();
    sentTimestamps = sentTimestamps.filter((time) => now - time < 3_600_000);
    if (sentTimestamps.length >= MAX_PER_HOUR) {
      console.error("[inquiry] hourly limit reached; email not sent");
      return { ok: false };
    }

    const lines = data.lines.filter(([, value]) => value.trim());
    const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.replyTo) ? data.replyTo : undefined;
    try {
      const { createTransport } = await import("nodemailer");
      const port = Number(SMTP_PORT || 587);
      const transport = createTransport({
        host: SMTP_HOST || "mail.solutionentretienjr10.ca",
        port,
        secure: port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      await transport.sendMail({
        from: `"Site web JR10" <${MAIL_FROM || SMTP_USER}>`,
        to: MAIL_TO || "info@solutionentretienjr10.ca",
        replyTo,
        subject: `Nouvelle demande de soumission${data.name ? ` – ${data.name}` : ""}`,
        text: lines.map(([label, value]) => `${label}: ${value}`).join("\n"),
        html: `<h2 style="font-family:sans-serif;color:#1d4e89">Nouvelle demande de soumission</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${lines
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#5b6b7d;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}</table>`,
      });
      sentTimestamps.push(now);
      return { ok: true };
    } catch (error) {
      console.error("[inquiry] email failed:", error);
      return { ok: false };
    }
  });
