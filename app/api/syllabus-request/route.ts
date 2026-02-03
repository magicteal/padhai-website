import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RequestBody = Record<string, unknown> & { source?: string };

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatValue(value: unknown) {
  if (value === null) return "null";
  if (value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

async function sendNotificationEmail(data: RequestBody) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM || smtpUser;
  const notifyEmail = process.env.NOTIFY_EMAIL || smtpUser; // Where to send lead notifications

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("SMTP not configured. Skipping email notification.");
    console.log("Syllabus request data:", data);
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const source = typeof data.source === "string" && data.source.trim() ? data.source.trim() : "Website Form";
  const at = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const email = typeof data.email === "string" ? data.email : "";
  const phone = typeof (data as any).phoneNumber === "string" ? (data as any).phoneNumber : (typeof (data as any).phone === "string" ? (data as any).phone : "");
  const parentName = typeof (data as any).parentName === "string" ? (data as any).parentName : "";

  const entries = Object.entries(data)
    .filter(([key]) => key !== "source")
    .map(([key, value]) => ({ key, value: formatValue(value) }));

  const rowsHtml = entries
    .map(({ key, value }, idx) => {
      const bg = idx % 2 === 0 ? "#f3f4f6" : "#ffffff";
      return `
        <tr style="background: ${bg};">
          <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold; width: 40%;">${escapeHtml(key)}</td>
          <td style="padding: 10px; border: 1px solid #e5e7eb;">${escapeHtml(value)}</td>
        </tr>
      `;
    })
    .join("\n");

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 680px; margin: auto;">
      <h2 style="color: #7c3aed;">New Form Submission</h2>
      <p style="margin: 8px 0 0; color: #444;">Source: <strong>${escapeHtml(source)}</strong></p>
      <p style="margin: 4px 0 0; color: #666; font-size: 12px;">Received at ${escapeHtml(at)}</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        ${rowsHtml || "<tr><td style=\"padding:10px;border:1px solid #e5e7eb;\">(no fields)</td></tr>"}
      </table>
    </div>
  `;

  const subjectParts = ["New Form:", source];
  const who = [parentName, email, phone].filter(Boolean).join(" | ");
  if (who) subjectParts.push("—", who);
  const subject = subjectParts.join(" ");

  const textLines = [
    "New Form Submission",
    "",
    `Source: ${source}`,
    `Received at: ${at}`,
    "",
    ...entries.map((e) => `${e.key}: ${e.value}`),
  ];

  await transporter.sendMail({
    from: `"PadhAi Club" <${fromEmail}>`,
    to: notifyEmail,
    subject,
    text: textLines.join("\n"),
    html: htmlContent,
  });

  return true;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as RequestBody | null;

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  try {
    await sendNotificationEmail(body);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Failed to send notification email:", e);
    // Don't fail the request — log and continue
    return NextResponse.json({ ok: true, emailSent: false });
  }
}
