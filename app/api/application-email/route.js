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
      "firstName",
      "lastName",
      "email",
      "phone",
      "course",
      "intake",
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
      from: '"CSEI Admissions" <hostel@cseiacademy.ae>',
      to: "admissions@cseiacademy.ae",
      subject: `📄 New Application Received - ${fields.firstName} ${fields.lastName}`,
      text: `
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                NEW APPLICATION RECEIVED
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

👤 PERSONAL DETAILS
───────────────────
• Full Name: ${fields.firstName} ${fields.lastName}
• Email: ${fields.email}
• Phone: ${fields.phone}
• Address: ${fields.address || "Not provided"}
• City: ${fields.city || "Not provided"}
• Country: ${fields.country || "Not provided"}
• Postal Code: ${fields.postalCode || "Not provided"}

🎓 ACADEMIC DETAILS
───────────────────
• Program: ${fields.course}
• Intake: ${fields.intake}
• Referral Source: ${fields.referralSource || "Not specified"}

📎 ATTACHMENTS
──────────────
• Academic File: ${files.academicFile ? "✅ Included" : "❌ Missing"}
• Experience File: ${files.experienceFile ? "✅ Included" : "❌ Not provided"}
• CV: ${files.cvFile ? "✅ Included" : "❌ Missing"}
• Healthcare License: ${
        files.healthcareLicense ? "✅ Included" : "❌ Not provided"
      }

Attachments: ${attachments.length} file(s) included
`,
      attachments,
    };

    // Student confirmation email
    const studentMailOptions = {
      from: '"CSEI Admissions Office" <admissions@cseiacademy.ae>',
      to: fields.email,
      subject: "✅ Application Received - CSEI Academy",
      text: `Dear ${fields.firstName} ${fields.lastName},

Thank you for submitting your application to CSEI Academy.

▫️ APPLICATION STATUS: RECEIVED
──────────────────────────────
✅ We have successfully received your application and all supporting documents.
🕒 Processing time: 3-5 business days

📋 APPLICATION SUMMARY
─────────────────────
• Full Name:    ${fields.firstName} ${fields.lastName}
• Email:        ${fields.email}
• Phone:        ${fields.phone}
• Program:      ${fields.course}
• Intake:       ${fields.intake}
• Request Date: ${new Date().toLocaleDateString()}

📞 CONTACT INFORMATION
─────────────────────
For inquiries about your application:
• Phone: +971 4336 8064 (9AM-5PM, Sun-Thu)
• Email: admission@cseiacademy.ae
• Office: Building A, Level 2, Room 205

We will notify you via email once your application has been processed. Please ensure your contact information remains current.

Best regards,
The Admissions Team
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
          applicant: `${fields.firstName} ${fields.lastName}`,
          email: fields.email,
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
