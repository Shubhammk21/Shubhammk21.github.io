import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

// Load template (synchronously during dev; in prod pre-compile or cache)
const templatePath = path.join(
  process.cwd(),
  "emails",
  "polished-email-template.html"
);
let htmlTemplate = fs.readFileSync(templatePath, "utf8");

// Prepare data & replace placeholders
function renderTemplate(data = {}) {
  let out = htmlTemplate;
  // Basic replacements - ensure values are HTML-escaped
  Object.entries(data).forEach(([key, val]) => {
    const safe = String(val ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
    out = out.replaceAll(`{{${key}}}`, safe);
  });
  return out;
}

async function sendContactEmail(payload) {
  const html = renderTemplate({
    LOGO_URL: payload.logoUrl || "https://example.com/logo.png",
    NAME: payload.name,
    EMAIL: payload.email,
    PHONE: payload.number || "—",
    MESSAGE: payload.message,
    TIMESTAMP: new Date().toLocaleString(),
    DASHBOARD_URL: payload.dashboardUrl || "https://yourdashboard.example.com",
    EMAIL_TO: process.env.EMAIL_TO,
    UNSUBSCRIBE_URL: payload.unsubscribeUrl || "#",
    PRIVACY_URL: payload.privacyUrl || "https://yourdomain.com/privacy",
    ADDRESS_LINE: payload.address || "Your Company • City, Country",
  });

  const text = `
New contact from WebZova

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.number || "—"}

Message:
${payload.message}

Received: ${new Date().toLocaleString()}
`;

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `New contact — ${payload.name}`,
    text,
    html,
  });

  return info;
}
