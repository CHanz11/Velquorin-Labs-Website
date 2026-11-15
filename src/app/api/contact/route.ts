
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import pool from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (
      name.length > 150 ||
      email.length > 255 ||
      company.length > 200 ||
      service.length > 100 ||
      message.length > 10000
    ) {
      return NextResponse.json(
        { success: false, message: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    // Save submission to TiDB
    await pool.execute(
    `INSERT INTO contact_submissions
        (name, email, company, service, message)
    VALUES (?, ?, ?, ?, ?)`,
    [name, email, company || null, service, message]
    );

    // Send email notification
    try {
    const emailResult = await resend.emails.send({
        from: `Velquorin Labs <${process.env.RESEND_FROM_EMAIL}>`,
        to: [process.env.CONTACT_NOTIFICATION_EMAIL!],
        subject: `New Website Inquiry: ${name}`,
        text: `
    New contact form submission received.

    Name: ${name}
    Email: ${email}
    Company: ${company || "Not provided"}
    Service: ${service}

    Message:
    ${message}
        `,
    });

    if (emailResult.error) {
        console.error("Resend email error:", emailResult.error);
    } else {
        console.log("Contact notification email sent successfully.");
    }
    } catch (emailError) {
    console.error("Email notification failed:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been submitted successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
