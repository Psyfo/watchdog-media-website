import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // TODO: Handle contact form submission (e.g., send email, save to DB)
    return NextResponse.json({
      success: true,
      message: 'Contact request received.',
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
