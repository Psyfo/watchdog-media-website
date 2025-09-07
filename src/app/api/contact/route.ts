import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// import { ratelimit } from '@/lib/ratelimit'; // Optional: Add rate limiting

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_FROM_NAME,
  MAIL_FROM_EMAIL,
} = process.env;

// Validation functions
function validateName(name: string): string | null {
  if (!name || typeof name !== 'string') return 'Name is required';
  const trimmed = name.trim();
  if (trimmed.length < 2) return 'Name must be at least 2 characters';
  if (trimmed.length > 50) return 'Name must be less than 50 characters';
  if (!/^[a-zA-Z\s'-]+$/.test(trimmed))
    return 'Name contains invalid characters';
  return null;
}

function validateEmail(email: string): string | null {
  if (!email || typeof email !== 'string') return 'Email is required';
  const trimmed = email.trim();
  if (trimmed.length > 254) return 'Email address is too long';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return 'Please enter a valid email address';
  return null;
}

function validateMessage(message: string): string | null {
  if (!message || typeof message !== 'string') return 'Message is required';
  const trimmed = message.trim();
  if (trimmed.length < 10) return 'Message must be at least 10 characters';
  if (trimmed.length > 1000) return 'Message must be less than 1000 characters';
  return null;
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

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
    <div style="background:linear-gradient(135deg,#f8f4ff 0%,#ece0fa 100%);padding:2rem;border-radius:1.5rem;font-family:'Myriad Pro',Arial,sans-serif;color:#2d1a3a;max-width:600px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:2rem;">
        <h1 style="font-family:'Noteworthy',cursive;font-size:2.5rem;color:#ec008c;margin:0;">Watchdog Media</h1>
        <p style="color:#a47aff;margin:0.5rem 0 0 0;">New Contact Request</p>
      </div>
      
      <div style="background:#fff;border-radius:1rem;padding:2rem;margin-bottom:1.5rem;border:1px solid #e0c7fa;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color:#ec008c;margin-top:0;font-size:1.5rem;">Contact Details</h2>
        <div style="margin-bottom:1rem;">
          <strong style="color:#510051;">Name:</strong> ${sanitizeInput(name)}
        </div>
        <div style="margin-bottom:1rem;">
          <strong style="color:#510051;">Email:</strong> <a href="mailto:${email}" style="color:#ec008c;">${email}</a>
        </div>
        <div>
          <strong style="color:#510051;">Message:</strong>
          <div style="background:#f8f4ff;padding:1rem;border-radius:0.5rem;margin-top:0.5rem;white-space:pre-line;line-height:1.6;">
            ${sanitizeInput(message)}
          </div>
        </div>
      </div>
      
      <footer style="text-align:center;font-size:0.9rem;color:#a47aff;">
        <strong>Watchdog Media</strong><br/>
        <span style="color:#ec008c;">Corporate-grade reliability. Artist-grade vision.</span><br/>
        <small style="color:#9ca3af;">Received: ${new Date().toLocaleString(
          'en-ZA',
          { timeZone: 'Africa/Johannesburg' }
        )}</small>
      </footer>
    </div>
  `;
}

function confirmationMailTemplate({ name }: { name: string }) {
  return `
    <div style="background:linear-gradient(135deg,#f8f4ff 0%,#ece0fa 100%);padding:2rem;border-radius:1.5rem;font-family:'Myriad Pro',Arial,sans-serif;color:#2d1a3a;max-width:600px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:2rem;">
        <h1 style="font-family:'Noteworthy',cursive;font-size:2.5rem;color:#ec008c;margin:0;">Watchdog Media</h1>
        <p style="color:#a47aff;margin:0.5rem 0 0 0;">Thank you for reaching out!</p>
      </div>
      
      <div style="background:#fff;border-radius:1rem;padding:2rem;margin-bottom:1.5rem;border:1px solid #e0c7fa;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color:#ec008c;margin-top:0;">Hi ${sanitizeInput(
          name
        )}! 👋</h2>
        <p style="line-height:1.6;margin-bottom:1rem;">
          Thank you for contacting <strong style="color:#ec008c;">Watchdog Media</strong>. We've received your message and will review it promptly.
        </p>
        <p style="line-height:1.6;margin-bottom:1rem;">
          Our team typically responds within <strong>24 hours</strong> during business days. We're excited to learn more about your project and explore how we can bring your vision to life.
        </p>
        <div style="background:#f8f4ff;padding:1rem;border-radius:0.5rem;border-left:4px solid #ec008c;">
          <strong style="color:#510051;">What happens next?</strong><br/>
          <small style="color:#6b7280;">• We'll review your message<br/>• Schedule a consultation if needed<br/>• Provide a detailed proposal</small>
        </div>
      </div>
      
      <footer style="text-align:center;font-size:0.9rem;color:#a47aff;">
        <strong>Watchdog Media</strong><br/>
        <span style="color:#ec008c;">Corporate-grade reliability. Artist-grade vision.</span><br/>
        <small style="color:#9ca3af;">17 Howick Drive, Waterfall, Durban, KZN 3652</small>
      </footer>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    // Optional: Rate limiting (implement if needed)
    // const identifier = req.ip ?? "127.0.0.1";
    // const { success } = await ratelimit.limit(identifier);
    // if (!success) {
    //   return NextResponse.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 });
    // }

    const body = await req.json();
    const { name, email, message } = body;

    // Validate all fields
    const nameError = validateName(name);
    if (nameError) {
      return NextResponse.json(
        { success: false, error: nameError },
        { status: 400 }
      );
    }

    const emailError = validateEmail(email);
    if (emailError) {
      return NextResponse.json(
        { success: false, error: emailError },
        { status: 400 }
      );
    }

    const messageError = validateMessage(message);
    if (messageError) {
      return NextResponse.json(
        { success: false, error: messageError },
        { status: 400 }
      );
    }

    // Check required environment variables
    if (!MAIL_HOST || !MAIL_USER || !MAIL_PASSWORD || !MAIL_FROM_EMAIL) {
      console.error('Missing email configuration');
      return NextResponse.json(
        {
          success: false,
          error:
            'Email service is temporarily unavailable. Please try again later.',
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT) || 587,
      secure: MAIL_SECURE === 'true',
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        {
          success: false,
          error:
            'Email service is temporarily unavailable. Please try again later.',
        },
        { status: 500 }
      );
    }

    const sanitizedName = sanitizeInput(name.trim());
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = sanitizeInput(message.trim());

    // Send notification email to Watchdog
    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
      to: MAIL_FROM_EMAIL,
      replyTo: sanitizedEmail,
      subject: `New Contact Request from ${sanitizedName}`,
      html: brandMailTemplate({
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage,
      }),
    });

    // Send confirmation email to sender
    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
      to: sanitizedEmail,
      subject: 'Thank you for contacting Watchdog Media',
      html: confirmationMailTemplate({ name: sanitizedName }),
    });

    return NextResponse.json({
      success: true,
      message:
        'Message sent successfully. Confirmation email sent to your inbox.',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred. Please try again later.';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
