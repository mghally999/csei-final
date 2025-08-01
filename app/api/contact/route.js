import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
      company,
      proposal,
      formType, // 'student' or 'partner'
      toEmail, // optional custom recipient
    } = data;

    // 🔒 Basic validation
    if (!name || !email || !formType) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: name, email, or form type.",
        },
        { status: 400 }
      );
    }

    // 📬 SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.titan.email",
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === "production",
      },
    });

    const isStudent = formType === "student";
    const recipient =
      toEmail || process.env.ADMIN_EMAIL || "hostel@cseiacademy.ae";

    // ========================
    // ADMIN NOTIFICATION EMAIL
    // ========================
    const adminSubject = isStudent
      ? `📩 Student Inquiry | ${name} | ${subject || "No Subject"}`
      : `🤝 Partner Proposal | ${name} | ${company || "No Company"}`;

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">
            ${isStudent ? "🎓 NEW STUDENT INQUIRY" : "🤝 PARTNERSHIP REQUEST"}
          </h1>
        </div>
        
        <div style="padding: 20px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 30%;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>

            ${
              !isStudent
                ? `
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company}</td>
                </tr>
              `
                : ""
            }

            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td>
            </tr>

            ${
              isStudent
                ? `
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${
                    phone || "N/A"
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${
                    subject || "N/A"
                  }</td>
                </tr>
              `
                : ""
            }

            <tr>
              <td style="padding: 8px 0;"><strong>${
                isStudent ? "Message" : "Proposal"
              }:</strong></td>
              <td style="padding: 8px 0;">${isStudent ? message : proposal}</td>
            </tr>
          </table>

          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; font-size: 13px; color: #555;">
              <strong>Form Type:</strong> ${formType}<br>
              <strong>Received:</strong> ${new Date().toLocaleString()}<br>
              <strong>Reply To:</strong> <a href="mailto:${email}">${email}</a>
            </p>
          </div>
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #777; border-radius: 0 0 8px 8px;">
          <p>This message was sent via the CSEI Academy contact form</p>
        </div>
      </div>
    `;

    // ========================
    // AUTOMATED REPLY TO SENDER
    // ========================
    const confirmationSubject = isStudent
      ? "✅ Thank you for contacting CSEI Academy"
      : "✅ Thank you for your partnership interest";

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">
            ${
              isStudent
                ? "🎓 THANK YOU FOR CONTACTING US"
                : "🤝 PARTNERSHIP REQUEST RECEIVED"
            }
          </h1>
        </div>
        
        <div style="padding: 20px;">
          <p>Dear ${name},</p>
          
          <p>${
            isStudent
              ? "Thank you for reaching out to CSEI Academy. We have received your inquiry and our team will get back to you shortly."
              : "Thank you for your interest in partnering with CSEI Academy. We have received your proposal and our partnerships team will review it carefully."
          }</p>
          
          <div style="background-color: #f8f9fa; border-left: 4px solid #2c3e50; padding: 15px; margin: 15px 0;">
            <p style="font-weight: bold; margin: 0 0 10px 0;">▫️ REQUEST STATUS: RECEIVED</p>
            <p style="margin: 5px 0;">✅ We have successfully received your ${
              isStudent ? "inquiry" : "proposal"
            }</p>
            <p style="margin: 5px 0;">🕒 Typical response time: 2-3 business days</p>
          </div>
          
          <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">📋 REQUEST SUMMARY</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 30%;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            ${
              !isStudent
                ? `
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company}</td>
                </tr>
              `
                : ""
            }
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
          </table>
          
          <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">📞 CONTACT INFORMATION</h2>
          <p>For urgent inquiries:</p>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li><strong>Phone:</strong> +971 4336 8064 (9AM-5PM, Sun-Thu)</li>
            <li><strong>Email:</strong> admission@cseiacademy.ae</li>
            <li><strong>Office:</strong> Building A, Level 2, Room 205</li>
          </ul>
          
          <p>We appreciate your interest in CSEI Academy and look forward to connecting with you soon.</p>
          
          <p>Best regards,<br>
          The ${isStudent ? "Admissions" : "Partnerships"} Team<br>
          CSEI Academy</p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #777; border-radius: 0 0 8px 8px;">
          <p>📍 Dubai Knowledge Park, Dubai, UAE | 🌐 <a href="https://www.cseiacademy.ae" style="color: #2c3e50;">www.cseiacademy.ae</a></p>
          <p style="margin-top: 10px;"><em>This is an automated message. Please do not reply directly to this email.</em></p>
        </div>
      </div>
    `;

    // Send both emails in parallel
    const sendResults = await Promise.allSettled([
      // Admin notification
      transporter.sendMail({
        from: `"CSEI Form" <${process.env.EMAIL_USER}>`,
        to: recipient,
        replyTo: email,
        subject: adminSubject,
        html: adminHtml,
      }),

      // Automated confirmation to sender
      transporter.sendMail({
        from: `"CSEI Academy" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: confirmationSubject,
        html: confirmationHtml,
      }),

      // Optional dev copy
      process.env.DEV_COPY
        ? transporter.sendMail({
            from: `"CSEI Form Copy" <${process.env.EMAIL_USER}>`,
            to: process.env.DEV_COPY,
            subject: `📬 Copy: ${adminSubject}`,
            html: adminHtml,
          })
        : Promise.resolve(),
    ]);

    // Check for any email sending errors
    const emailErrors = sendResults.filter(
      (result) => result.status === "rejected"
    );
    if (emailErrors.length > 0) {
      console.error("Email sending errors:", emailErrors);
      throw new Error(
        `Failed to send ${emailErrors.length} email(s). First error: ${emailErrors[0].reason.message}`
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "✅ Message sent successfully! Check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
