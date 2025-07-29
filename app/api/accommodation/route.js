import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import os from "os";

// Helper function to clean up temporary files
async function cleanupFiles(filePaths) {
  await Promise.all(
    filePaths.map(async (filePath) => {
      try {
        await fs.access(filePath);
        await fs.unlink(filePath);
      } catch (err) {
        console.warn(`Cleanup warning: Could not delete ${filePath}`);
      }
    })
  );
}

export async function POST(request) {
  const tempFiles = [];

  try {
    const formData = await request.formData();
    const files = {};
    const fields = {};

    // Process form data
    for (const [key, value] of formData.entries()) {
      if (value instanceof Blob && value.size > 0) {
        const buffer = Buffer.from(await value.arrayBuffer());
        const tempDir = os.tmpdir();
        const tempFileName = `file-${Date.now()}-${value.name.replace(
          /\s+/g,
          "-"
        )}`;
        const tempFilePath = path.join(tempDir, tempFileName);

        await fs.writeFile(tempFilePath, buffer);
        tempFiles.push(tempFilePath);

        files[key] = {
          filepath: tempFilePath,
          originalFilename: value.name,
          mimetype: value.type,
          size: value.size,
        };
      } else {
        fields[key] = value;
      }
    }

    // Validate required fields
    const requiredFields = [
      "fullName",
      "studentId",
      "contactNumber",
      "email",
      "accommodationType",
      "moveInDate",
    ];

    const missingFields = requiredFields.filter((field) => !fields[field]);
    if (missingFields.length > 0) {
      await cleanupFiles(tempFiles);
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
          error: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    // Email configuration with improved error handling
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.titan.email",
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === "production", // Only reject in production
      },
      logger: true, // Enable logging
      debug: true, // Enable debug output
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log("Server is ready to take our messages");
    } catch (verifyError) {
      console.error("SMTP connection verification failed:", verifyError);
      await cleanupFiles(tempFiles);
      return NextResponse.json(
        {
          success: false,
          message: "Email service configuration error",
          error: "EMAIL_CONFIG_ERROR",
          details: verifyError.message,
        },
        { status: 500 }
      );
    }

    // Prepare attachments
    const attachments = Object.values(files).map((file) => ({
      filename: file.originalFilename,
      path: file.filepath,
      contentType: file.mimetype,
    }));

    // Admin email with improved formatting
    const adminMailOptions = {
      from: `"CSEI Hostel App" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || "hostel@cseiacademy.ae",
      subject: `🏠 New Accommodation Application - ${fields.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">NEW APPLICATION RECEIVED</h1>
          </div>
          
          <div style="padding: 20px;">
            <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
              <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px;">📌 PERSONAL DETAILS</h2>
              <p><strong>Full Name:</strong> ${fields.fullName}</p>
              <p><strong>Student ID:</strong> ${fields.studentId}</p>
              <p><strong>Contact:</strong> ${fields.contactNumber}</p>
              <p><strong>Email:</strong> ${fields.email}</p>
            </div>
            
            <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
              <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px;">🏠 ACCOMMODATION DETAILS</h2>
              <p><strong>Type:</strong> ${fields.accommodationType}</p>
              <p><strong>Move-in:</strong> ${fields.moveInDate}</p>
              <p><strong>Move-out:</strong> ${
                fields.moveOutDate || "Not specified"
              }</p>
              <p><strong>Length of Stay:</strong> ${
                fields.lengthOfStay || "Not specified"
              }</p>
            </div>
            
            <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
              <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px;">🚨 EMERGENCY CONTACT</h2>
              <p><strong>Name:</strong> ${
                fields.emergencyContactName || "Not provided"
              }</p>
              <p><strong>Relationship:</strong> ${
                fields.emergencyContactRelationship || "Not provided"
              }</p>
              <p><strong>Number:</strong> ${
                fields.emergencyContactNumber || "Not provided"
              }</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px;">💳 PAYMENT & ADDITIONAL INFO</h2>
              <p><strong>Payment Method:</strong> ${
                fields.paymentMethod || "Not specified"
              }</p>
              <p><strong>Special Requirements:</strong> ${
                fields.specialRequirements || "None"
              }</p>
              <p><strong>Additional Notes:</strong> ${
                fields.additionalNotes || "None"
              }</p>
              <p><strong>Attachments:</strong> ${
                attachments.length
              } file(s) included</p>
            </div>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            <p>This email was automatically generated by the CSEI Hostel Application System</p>
          </div>
        </div>
      `,
      attachments,
    };

    // Student confirmation email with HTML formatting
    const studentMailOptions = {
      from: `"CSEI Hostel Office" <${process.env.EMAIL_USER}>`,
      to: fields.email,
      subject: "✅ Accommodation Application Received - CSEI Academy",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">ACCOMMODATION APPLICATION RECEIVED</h1>
          </div>
          
          <div style="padding: 20px;">
            <p>Dear ${fields.fullName},</p>
            
            <p>Thank you for submitting your accommodation application to CSEI Academy.</p>
            
            <div style="background-color: #f8f9fa; border-left: 4px solid #2c3e50; padding: 15px; margin: 15px 0;">
              <p style="font-weight: bold; margin: 0 0 10px 0;">▫️ APPLICATION STATUS: RECEIVED</p>
              <p style="margin: 5px 0;">✅ We have successfully received your application and all supporting documents.</p>
              <p style="margin: 5px 0;">🕒 Processing time: 3-5 business days</p>
            </div>
            
            <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">📋 APPLICATION SUMMARY</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Full Name:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${fields.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Student ID:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${fields.studentId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Accommodation:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${fields.accommodationType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Move-in Date:</strong></td>
                <td style="padding: 8px 0;">${fields.moveInDate}</td>
              </tr>
            </table>
            
            <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">📞 CONTACT INFORMATION</h2>
            <p>For urgent inquiries:</p>
            <ul style="padding-left: 20px; margin: 10px 0;">
              <li><strong>Phone:</strong> +971 4336 8064 (9AM-5PM, Sun-Thu)</li>
              <li><strong>Email:</strong> admission@cseiacademy.ae</li>
              <li><strong>Office:</strong> Building A, Level 2, Room 205</li>
            </ul>
            
            <p>We will notify you via email once your application has been processed. Please ensure your contact information remains current.</p>
            
            <p>Best regards,<br>
            The Accommodation Team<br>
            CSEI Academy</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            <p>📍 Dubai Knowledge Park, Dubai, UAE | 🌐 <a href="https://www.cseiacademy.ae" style="color: #2c3e50;">www.cseiacademy.ae</a></p>
            <p style="margin-top: 10px;"><em>This is an automated message. Please do not reply directly to this email.</em></p>
          </div>
        </div>
      `,
    };

    // Send both emails with error handling
    const sendResults = await Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(studentMailOptions),
    ]);

    // Check for email sending errors
    const emailErrors = sendResults.filter(
      (result) => result.status === "rejected"
    );
    if (emailErrors.length > 0) {
      console.error("Email sending errors:", emailErrors);
      throw new Error(
        `Failed to send ${emailErrors.length} email(s). First error: ${emailErrors[0].reason.message}`
      );
    }

    await cleanupFiles(tempFiles);

    return NextResponse.json(
      {
        success: true,
        message:
          "Application submitted successfully! Check your email for confirmation.",
        data: {
          applicant: fields.fullName,
          studentId: fields.studentId,
          emailSent: true,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ API Error:", error);
    await cleanupFiles(tempFiles);
    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later.",
        error: error.message || "SERVER_ERROR",
        code: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}
