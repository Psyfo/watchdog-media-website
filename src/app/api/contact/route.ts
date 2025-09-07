import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_FROM_NAME,
  MAIL_FROM_EMAIL,
} = process.env;

function brandMailTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `
    <div style="background:linear-gradient(135deg,#f8f4ff 0%,#ece0fa 100%);padding:2rem;border-radius:1.5rem;font-family:'Myriad Pro',Arial,sans-serif;color:#2d1a3a;">
      <h2 style="font-family:'Noteworthy',cursive;font-size:2rem;color:#ec008c;margin-bottom:1rem;">New Contact Request</h2>
      <p style="font-size:1.1rem;margin-bottom:1.5rem;">You have received a new message from the Watchdog Media website:</p>
      <div style="background:#fff7fa;border-radius:1rem;padding:1rem 1.5rem;margin-bottom:1.5rem;border:1px solid #e0c7fa;">
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Message:</strong><br/>
        <span style="white-space:pre-line;">${message}</span>
      </div>
      <footer style="margin-top:2rem;font-size:0.95rem;color:#a47aff;">
        <strong>Watchdog Media</strong><br/>
        <span style="color:#ec008c;">Corporate-grade reliability. Artist-grade vision.</span>
      </footer>
    </div>
  `;
}

function confirmationMailTemplate({ name }: { name: string }) {
  return `
    <div style="background:linear-gradient(135deg,#f8f4ff 0%,#ece0fa 100%);padding:2rem;border-radius:1.5rem;font-family:'Myriad Pro',Arial,sans-serif;color:#2d1a3a;">
      <h2 style="font-family:'Noteworthy',cursive;font-size:2rem;color:#ec008c;margin-bottom:1rem;">Thank You for Contacting Us!</h2>
      <p style="font-size:1.1rem;margin-bottom:1.5rem;">Hi ${name},<br/>We’ve received your message and will get back to you soon.<br/>Thank you for reaching out to <span style="color:#ec008c;font-weight:bold;">Watchdog Media</span>.</p>
      <footer style="margin-top:2rem;font-size:0.95rem;color:#a47aff;">
        <strong>Watchdog Media</strong><br/>
        <span style="color:#ec008c;">Corporate-grade reliability. Artist-grade vision.</span>
      </footer>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      secure: MAIL_SECURE === 'true',
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
      },
    });

    // Send mail to Watchdog
    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
      to: MAIL_FROM_EMAIL,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: brandMailTemplate({ name, email, message }),
    });

    // Send confirmation mail to sender
    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
      to: email,
      subject: 'Thank you for contacting Watchdog Media',
      html: confirmationMailTemplate({ name }),
    });

    return NextResponse.json({
      success: true,
      message: 'Contact request received and confirmation sent.',
    });
  } catch (error) {
    const errorMessage =
      typeof error === 'object' && error !== null && 'message' in error
        ? (error as { message?: string }).message || 'Invalid request.'
        : 'Invalid request.';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 400 }
    );
  }
}
