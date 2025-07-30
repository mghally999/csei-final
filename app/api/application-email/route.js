import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import { promises as fsPromises } from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  // Create temporary directory if it doesn't exist
  const tmpDir = path.join(process.cwd(), "tmp");
  try {
    await fsPromises.mkdir(tmpDir, { recursive: true });
  } catch (err) {
    console.error("Error creating tmp directory:", err);
  }

  try {
    const formData = await request.formData();
    const form = formidable({
      multiples: true,
      maxFileSize: 30 * 1024 * 1024,
      uploadDir: tmpDir, // Use our temporary directory
      keepExtensions: true,
    });

    const files = {};
    const fields = {};

    for (const [key, value] of formData.entries()) {
      if (typeof value === "object" && "arrayBuffer" in value) {
        // Handle file upload
        if (!files[key]) files[key] = [];
        const buffer = await value.arrayBuffer();
        const tempFileName = `${Date.now()}-${value.name.replace(
          /[^a-z0-9.]/gi,
          "_"
        )}`;
        const tempFilePath = path.join(tmpDir, tempFileName);

        await fsPromises.writeFile(tempFilePath, Buffer.from(buffer));

        files[key].push({
          originalFilename: value.name,
          filepath: tempFilePath,
          mimetype: value.type,
          size: value.size,
        });
      } else {
        // Handle form field
        fields[key] = value;
      }
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      course,
      intake,
      address,
      city,
      country,
      postalCode,
      referralSource,
    } = fields;

    const fileKeys = [
      "academicFile",
      "experienceFile",
      "cvFile",
      "healthcareLicense",
    ];

    const attachments = [];

    for (const key of fileKeys) {
      const file = files[key]?.[0];
      if (file) {
        attachments.push({
          filename: file.originalFilename,
          path: file.filepath, // Using path instead of content for better handling
        });
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.titan.email",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // ADMIN EMAIL - FIXED RECIPIENT ADDRESS
    const adminMail = {
      from: `"CSEI Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || "hostel@cseiacademy.ae",
      subject: `📥 New Application - ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif; max-width:600px; padding:20px; border:1px solid #ddd;">
          <h2>📥 New Application Submitted</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address || ""}, ${city || ""}, ${
        postalCode || ""
      }, ${country || ""}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Intake:</strong> ${intake}</p>
          <p><strong>Referral Source:</strong> ${referralSource || "N/A"}</p>
          <p><strong>Attachments:</strong></p>
          <ul>
            ${attachments.map((a) => `<li>${a.filename}</li>`).join("")}
          </ul>
        </div>
      `,
      attachments,
    };

    // STUDENT CONFIRMATION EMAIL
    const studentMail = {
      from: `"CSEI Admissions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Your Application Has Been Received - CSEI Academy",
      html: `
        <div style="font-family:sans-serif; max-width:600px; padding:20px; border:1px solid #ddd;">
          <h2>Dear ${firstName},</h2>
          <p>Thank you for applying to <strong>CSEI Academy</strong>.</p>
          <p>We have successfully received your application and documents.</p>
          <h3>📄 Summary:</h3>
          <ul>
            <li><strong>Course:</strong> ${course}</li>
            <li><strong>Intake:</strong> ${intake}</li>
            <li><strong>Phone:</strong> ${phone}</li>
          </ul>
          <p>We will review your submission and get back to you within 3–5 business days.</p>
          <p>For urgent inquiries:</p>
          <ul>
            <li>📞 +971 4336 8064</li>
            <li>📧 admissions@cseiacademy.ae</li>
            <li>🏢 Building A, Level 2, Room 205</li>
          </ul>
          <p>Warm regards,<br/>CSEI Admissions Team</p>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(studentMail),
    ]);

    // Clean up temporary files
    const cleanupPromises = [];
    for (const key of fileKeys) {
      const file = files[key]?.[0];
      if (file) {
        cleanupPromises.push(
          fsPromises.unlink(file.filepath).catch((err) => {
            console.error(`Error deleting file ${file.filepath}:`, err);
          })
        );
      }
    }
    await Promise.all(cleanupPromises);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted and emails sent successfully.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error processing application:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error processing application",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
