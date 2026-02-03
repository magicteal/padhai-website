import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RequestBody = {
  childName: string;
  childAge: string;
  parentName: string;
  email: string;
  phoneNumber: string;
  source?: string;
};

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

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
      <h2 style="color: #7c3aed;">New Syllabus Download Request</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr style="background: #f3f4f6;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Child's Name</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.childName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Child's Age</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.childAge}</td>
        </tr>
        <tr style="background: #f3f4f6;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Parent Name</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.parentName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone Number</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.phoneNumber}</td>
        </tr>
        <tr style="background: #f3f4f6;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.email}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Source</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.source || "Syllabus Download"}</td>
        </tr>
      </table>
      <p style="margin-top: 24px; color: #666; font-size: 12px;">
        Sent from PadhAi Club website at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"PadhAi Club" <${fromEmail}>`,
    to: notifyEmail,
    subject: `📚 New Syllabus Request: ${data.parentName} (${data.phoneNumber})`,
    text: `
New Syllabus Download Request

Child's Name: ${data.childName}
Child's Age: ${data.childAge}
Parent Name: ${data.parentName}
Phone Number: ${data.phoneNumber}
Email: ${data.email}
Source: ${data.source || "Syllabus Download"}

Sent at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `,
    html: htmlContent,
  });

  return true;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as RequestBody | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { childName, childAge, parentName, email, phoneNumber, source } = body;

  if (!childName || !childAge || !parentName || !email || !phoneNumber) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendNotificationEmail({
      childName,
      childAge,
      parentName,
      email,
      phoneNumber,
      source,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Failed to send notification email:", e);
    // Don't fail the request — log and continue
    return NextResponse.json({ ok: true, emailSent: false });
  }
}
