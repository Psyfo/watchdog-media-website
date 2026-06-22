import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Contact endpoint — provider-agnostic SMTP.
 *
 * Works with ZeptoMail out of the box: set
 *   MAIL_HOST=smtp.zeptomail.com   (or smtp.zeptomail.eu / .in for your region)
 *   MAIL_PORT=587
 *   MAIL_USER=emailapikey
 *   MAIL_PASSWORD=<ZeptoMail "Send Mail" token>
 *   MAIL_FROM_EMAIL=<a verified domain sender>
 *   MAIL_FROM_NAME=Watchdog Media
 *   MAIL_TO=<inbox that should receive enquiries>   (defaults to MAIL_FROM_EMAIL)
 *
 * If mail isn't configured (or a send fails) the submission is logged to the
 * server console as JSON and the request still succeeds — so local/preview
 * never blocks on infrastructure we don't have yet.
 */

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_FROM_NAME,
  MAIL_FROM_EMAIL,
  MAIL_TO,
} = process.env;

const FROM_NAME = MAIL_FROM_NAME || 'Watchdog Media';
const TO_ADDRESS = MAIL_TO || MAIL_FROM_EMAIL;

function validateName(v: unknown): string | null {
  if (typeof v !== 'string') return 'Name is required';
  const t = v.trim();
  if (t.length < 2) return 'Name must be at least 2 characters';
  if (t.length > 60) return 'Name must be under 60 characters';
  if (!/^[\p{L}\s'.-]+$/u.test(t)) return 'Name contains invalid characters';
  return null;
}

function validateEmail(v: unknown): string | null {
  if (typeof v !== 'string') return 'Email is required';
  const t = v.trim();
  if (t.length > 254) return 'Email is too long';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return 'Email is invalid';
  return null;
}

function validateMessage(v: unknown): string | null {
  if (typeof v !== 'string') return 'Message is required';
  const t = v.trim();
  if (t.length < 10) return 'Message must be at least 10 characters';
  if (t.length > 1500) return 'Message must be under 1500 characters';
  return null;
}

function clean(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

interface Submission {
  name: string;
  email: string;
  project: string;
  message: string;
}

function notificationEmail({ name, email, project, message }: Submission) {
  const received = new Date().toLocaleString('en-ZA', {
    timeZone: 'Africa/Johannesburg',
  });
  return `
  <div style="background:#08080a;padding:32px;font-family:Helvetica,Arial,sans-serif;color:#eceaef;">
    <div style="max-width:560px;margin:0 auto;">
      <p style="font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:#ec008c;margin:0 0 6px;">New enquiry</p>
      <h1 style="font-family:Georgia,serif;font-size:30px;color:#ffffff;margin:0 0 24px;">Watchdog Media</h1>
      <table style="width:100%;border-collapse:collapse;background:#0d0d11;border:1px solid #222;">
        <tr><td style="padding:16px;border-bottom:1px solid #1c1c22;width:120px;color:#6f6c75;font-size:11px;text-transform:uppercase;letter-spacing:.1em;">Name</td><td style="padding:16px;border-bottom:1px solid #1c1c22;color:#eceaef;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #1c1c22;color:#6f6c75;font-size:11px;text-transform:uppercase;letter-spacing:.1em;">Email</td><td style="padding:16px;border-bottom:1px solid #1c1c22;"><a href="mailto:${encodeURIComponent(email)}" style="color:#ec008c;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #1c1c22;color:#6f6c75;font-size:11px;text-transform:uppercase;letter-spacing:.1em;">Interest</td><td style="padding:16px;border-bottom:1px solid #1c1c22;color:#eceaef;">${escapeHtml(project) || '—'}</td></tr>
        <tr><td style="padding:16px;color:#6f6c75;font-size:11px;text-transform:uppercase;letter-spacing:.1em;vertical-align:top;">Message</td><td style="padding:16px;color:#eceaef;white-space:pre-line;line-height:1.6;">${escapeHtml(message)}</td></tr>
      </table>
      <p style="color:#6f6c75;font-size:12px;margin-top:16px;">Received ${received} (SAST)</p>
    </div>
  </div>`;
}

function confirmationEmail(name: string) {
  return `
  <div style="background:#08080a;padding:32px;font-family:Helvetica,Arial,sans-serif;color:#eceaef;">
    <div style="max-width:560px;margin:0 auto;">
      <h1 style="font-family:Georgia,serif;font-size:30px;color:#ffffff;margin:0 0 8px;">Watchdog Media</h1>
      <p style="font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:#ec008c;margin:0 0 24px;">Corporate-grade reliability. Artist-grade vision.</p>
      <div style="background:#0d0d11;border:1px solid #222;padding:28px;">
        <p style="margin:0 0 16px;line-height:1.6;">Hi ${escapeHtml(name)},</p>
        <p style="margin:0 0 16px;line-height:1.6;color:#a4a1aa;">Thank you for reaching out. Your message has landed with our team and we typically reply within one business day.</p>
        <p style="margin:0;line-height:1.6;color:#a4a1aa;">In the meantime, if anything is time-sensitive, just call the studio.</p>
      </div>
      <p style="color:#6f6c75;font-size:12px;margin-top:20px;">17 Howick Drive, Waterfall · Durban · KwaZulu-Natal</p>
    </div>
  </div>`;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }

  // Honeypot — silently accept and drop bot submissions.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ success: true });
  }

  const nameError = validateName(body.name);
  const emailError = validateEmail(body.email);
  const messageError = validateMessage(body.message);
  const firstError = nameError || emailError || messageError;
  if (firstError) {
    return NextResponse.json(
      { success: false, error: firstError },
      { status: 400 }
    );
  }

  const submission: Submission = {
    name: clean(body.name as string),
    email: (body.email as string).trim().toLowerCase(),
    project:
      typeof body.project === 'string' ? clean(body.project).slice(0, 80) : '',
    message: clean(body.message as string),
  };

  const configured = Boolean(
    MAIL_HOST && MAIL_USER && MAIL_PASSWORD && MAIL_FROM_EMAIL && TO_ADDRESS
  );

  if (!configured) {
    // No mail provider wired up yet — capture the lead in the server log.
    console.log(
      '[contact] mail not configured — submission captured:\n' +
        JSON.stringify({ ...submission, receivedAt: new Date().toISOString() }, null, 2)
    );
    return NextResponse.json({ success: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT) || 587,
      secure: MAIL_SECURE === 'true',
      auth: { user: MAIL_USER, pass: MAIL_PASSWORD },
    });

    await transporter.sendMail({
      from: `"${FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
      to: TO_ADDRESS,
      replyTo: submission.email,
      subject: `New enquiry from ${submission.name}${submission.project ? ` — ${submission.project}` : ''}`,
      html: notificationEmail(submission),
    });

    // Confirmation to the sender — best effort, never fail the request on it.
    try {
      await transporter.sendMail({
        from: `"${FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
        to: submission.email,
        subject: 'We received your message — Watchdog Media',
        html: confirmationEmail(submission.name),
      });
    } catch (confErr) {
      console.warn('[contact] confirmation email failed:', confErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    // Don't lose the lead — log it so it can be recovered, then succeed.
    console.error(
      '[contact] send failed — submission captured:\n' +
        JSON.stringify({ ...submission, receivedAt: new Date().toISOString() }, null, 2),
      err
    );
    return NextResponse.json({ success: true });
  }
}
