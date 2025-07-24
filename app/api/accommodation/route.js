import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import os from "os";

export const config = {
  api: {
    bodyParser: false,
  },
};

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

    // Email configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || "hostel@cseiacademy.ae",
        pass: process.env.EMAIL_PASS || "K/e2~OHx3=jO0p:",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Prepare attachments
    const attachments = Object.values(files).map((file) => ({
      filename: file.originalFilename,
      path: file.filepath,
      contentType: file.mimetype,
    }));

    // Admin email with professional formatting
    const adminMailOptions = {
      from: '"CSEI Hostel App" <hostel@cseiacademy.ae>',
      to: "hostel@cseiacademy.ae",
      subject: `🏠 New Accommodation Application - ${fields.fullName}`,
      text: `
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                NEW APPLICATION RECEIVED
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

📌 PERSONAL DETAILS
───────────────────
• Full Name: ${fields.fullName}
• Student ID: ${fields.studentId}
• Contact: ${fields.contactNumber}
• Email: ${fields.email}

🏠 ACCOMMODATION DETAILS
───────────────────────
• Type: ${fields.accommodationType}
• Move-in: ${fields.moveInDate}
• Move-out: ${fields.moveOutDate || "Not specified"}
• Length of Stay: ${fields.lengthOfStay || "Not specified"}

🚨 EMERGENCY CONTACT
────────────────────
• Name: ${fields.emergencyContactName || "Not provided"}
• Relationship: ${fields.emergencyContactRelationship || "Not provided"}
• Number: ${fields.emergencyContactNumber || "Not provided"}

💳 PAYMENT & ADDITIONAL INFO
───────────────────────────
• Payment Method: ${fields.paymentMethod || "Not specified"}
• Special Requirements: ${fields.specialRequirements || "None"}
• Additional Notes: ${fields.additionalNotes || "None"}

Attachments: ${attachments.length} file(s) included
`,
      attachments,
    };

    // Student confirmation email
    const studentMailOptions = {
      from: '"CSEI Hostel Office" <hostel@cseiacademy.ae>',
      to: fields.email,
      subject: "✅ Accommodation Application Received - CSEI Academy",
      text: `Dear ${fields.fullName},

Thank you for submitting your accommodation application to CSEI Academy.

▫️ APPLICATION STATUS: RECEIVED
──────────────────────────────
✅ We have successfully received your application and all supporting documents.
🕒 Processing time: 3-5 business days

📋 APPLICATION SUMMARY
─────────────────────
• Full Name:    ${fields.fullName}
• Student ID:   ${fields.studentId}
• Accommodation: ${fields.accommodationType}
• Move-in Date: ${fields.moveInDate}
• Request Date: ${new Date().toLocaleDateString()}

📞 CONTACT INFORMATION
─────────────────────
For urgent inquiries:
• Phone: +971 4336 8064 (9AM-5PM, Sun-Thu)
• Email: admission@cseiacademy.ae
• Office: Building A, Level 2, Room 205

We will notify you via email once your application has been processed. Please ensure your contact information remains current.

Best regards,
The Accommodation Team
CSEI Academy
━━━━━━━━━━━━━━━━━━━━━━━
📍 Dubai Knowledge Park, Dubai, UAE
🌐 www.cseiacademy.ae

[This is an automated message. Please do not reply directly to this email.]`,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(studentMailOptions),
    ]);

    await cleanupFiles(tempFiles);

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: {
          applicant: fields.fullName,
          studentId: fields.studentId,
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
