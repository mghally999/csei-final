// app/api/zoho/route.js

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, course } = body;

    const {
      ZOHO_CLIENT_ID,
      ZOHO_CLIENT_SECRET,
      ZOHO_REFRESH_TOKEN,
      ZOHO_API_DOMAIN = "https://www.zohoapis.com",
    } = process.env;

    if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
      return new Response(
        JSON.stringify({ error: "Missing Zoho credentials in environment" }),
        { status: 500 }
      );
    }

    // 🔑 Step 1: Get Access Token from Refresh Token
    const tokenRes = await fetch(`https://accounts.zoho.com/oauth/v2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        refresh_token: ZOHO_REFRESH_TOKEN,
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok || !tokenData.access_token) {
      console.error("❌ Failed to get access token", tokenData);
      return new Response(
        JSON.stringify({ error: "Invalid access token", details: tokenData }),
        { status: 401 }
      );
    }

    // 📤 Step 2: Submit lead to Zoho CRM
    const leadData = {
      data: [
        {
          First_Name: firstName,
          Last_Name: lastName,
          Email: email,
          Phone: phone,
          Company: "Website Visitor",
          Lead_Source: "Website Enquiry",
          Description: course ? `Course Enquiry: ${course}` : undefined,
          Program_of_Interest: course || undefined, // ✅ This is the key fix!
        },
      ],
      trigger: ["workflow"],
    };

    const crmRes = await fetch(`${ZOHO_API_DOMAIN}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${tokenData.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const crmResult = await crmRes.json();

    if (crmRes.ok && crmResult?.data?.[0]?.code === "SUCCESS") {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      console.error("❌ Zoho CRM submission failed:", crmResult);
      return new Response(
        JSON.stringify({ error: "Zoho CRM error", details: crmResult }),
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("❌ Zoho API Unexpected Error:", err);
    return new Response(
      JSON.stringify({
        error: "Unhandled exception",
        message: err.message,
        stack: err.stack,
      }),
      { status: 500 }
    );
  }
}
