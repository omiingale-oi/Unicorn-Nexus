import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      service,
      message,
    } = body;

    // Basic validation
    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Name can contain only letters and spaces.",
        },
        { status: 400 }
      );
    }

    // Phone validation — exactly 10 digits
    if (!/^\d{10}$/.test(phone.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number must contain exactly 10 digits.",
        },
        { status: 400 }
      );
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanService = service.trim();
    const cleanMessage = message?.trim() || null;

    // --------------------------------------------------
    // 1. SAVE ENQUIRY TO SUPABASE
    // --------------------------------------------------

    const { error: supabaseError } = await supabase
      .from("contact_enquiries")
      .insert([
        {
          name: cleanName,
          phone: cleanPhone,
          email: cleanEmail,
          service: cleanService,
          message: cleanMessage,
        },
      ]);

    if (supabaseError) {
      console.error("Supabase insert error:", supabaseError);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to save your enquiry. Please try again.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // 2. SEND EMAIL THROUGH RESEND
    // --------------------------------------------------

    const { error: resendError } = await resend.emails.send({
      from: "Unicorn Nexus <onboarding@resend.dev>",
      to: ["unicornnexus360@gmail.com"],
      replyTo: cleanEmail,
      subject: `New Enquiry - ${cleanService}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2 style="margin-bottom: 20px;">
            New Contact Enquiry
          </h2>

          <p>
            You have received a new enquiry through the Unicorn Nexus website.
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />

          <p>
            <strong>Name:</strong><br />
            ${cleanName}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${cleanPhone}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${cleanEmail}
          </p>

          <p>
            <strong>Service:</strong><br />
            ${cleanService}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${cleanMessage || "No message provided."}
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />

          <p style="color: #666; font-size: 13px;">
            This enquiry was submitted from the Unicorn Nexus 360 website.
          </p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend email error:", resendError);

      return NextResponse.json(
        {
          success: false,
          message:
            "Your enquiry was saved, but the notification email could not be sent.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // 3. SUCCESS
    // --------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}