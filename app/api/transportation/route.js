// File: app/api/transportation/route.js

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const fields = {};

    for (const [key, value] of formData.entries()) {
      fields[key] = value;
    }

    const requiredFields = [
      "Full Name",
      "Student ID / Identity Number",
      "Contact Number",
      "Email Address",
      "Pick-up Location",
      "Drop-off Location",
      "Date of Travel",
      "Time of Pick-up",
      "Type of Transportation",
    ];

    const missingFields = requiredFields.filter((field) => !fields[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

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

    const adminMailOptions = {
      from: '"CSEI Transport Request" <hostel@cseiacademy.ae>',
      to: "hostel@cseiacademy.ae",
      subject: `🚐 New Transportation Request - ${fields["Full Name"]}`,
      text: `
NEW TRANSPORTATION REQUEST RECEIVED

Name: ${fields["Full Name"]}
ID: ${fields["Student ID / Identity Number"]}
Contact: ${fields["Contact Number"]}
Email: ${fields["Email Address"]}

Pick-up: ${fields["Pick-up Location"]}
Drop-off: ${fields["Drop-off Location"]}
Date: ${fields["Date of Travel"]}
Time: ${fields["Time of Pick-up"]}
Type: ${fields["Type of Transportation"]}

Special Notes: ${fields["Special Requirements"] || "None"}
`,
    };

    const studentMailOptions = {
      from: '"CSEI Academy" <hostel@cseiacademy.ae>',
      to: fields["Email Address"],
      subject: "✅ Transportation Request Received - CSEI",
      text: `Dear ${fields["Full Name"]},

Your transportation request has been received and is being processed.

Pick-up: ${fields["Pick-up Location"]}
Drop-off: ${fields["Drop-off Location"]}
Date: ${fields["Date of Travel"]}
Time: ${fields["Time of Pick-up"]}

You will be contacted shortly if any further details are needed.

Regards,
CSEI Academy Transport Team
📞 +971 4336 8064
`,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(studentMailOptions),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Transportation request submitted successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Transport API error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
