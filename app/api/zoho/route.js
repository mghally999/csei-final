// app/api/zoho/route.js

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, course } = body;

    const {
      ZOHO_CLIENT_ID,
      ZOHO_CLIENT_SECRET,
      ZOHO_REFRESH_TOKEN,
      ZOHO_API_DOMAIN,
    } = process.env;

    // Step 1: Get access token
    const tokenRes = await fetch(`${ZOHO_API_DOMAIN}/oauth/v2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        refresh_token: ZOHO_REFRESH_TOKEN,
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    const tokenText = await tokenRes.text();
    let tokenData;
    try {
      tokenData = JSON.parse(tokenText);
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: "Zoho token response not valid JSON",
          response: tokenText,
        }),
        { status: 500 }
      );
    }

    const accessToken = tokenData.access_token;
    if (!accessToken) {
      return new Response(
        JSON.stringify({
          error: "Access token missing",
          tokenData,
        }),
        { status: 401 }
      );
    }

    // Step 2: Prepare CRM payload
    const leadData = {
      First_Name: firstName,
      Last_Name: lastName,
      Email: email,
      Phone: phone,
      Company: "Website Visitor",
      Lead_Source: "Website Enquiry",
      Description: course ? `Course Enquiry: ${course}` : undefined,
    };

    // Optional custom field
    if (course) leadData.Course = course;

    const payload = {
      data: [leadData],
      trigger: ["workflow"],
    };

    // Step 3: Send to Zoho CRM
    const crmRes = await fetch(`${ZOHO_API_DOMAIN}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await crmRes.json();

    if (crmRes.ok && result.data?.[0]?.code === "SUCCESS") {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(
        JSON.stringify({
          error: "Zoho CRM error",
          status: crmRes.status,
          result,
        }),
        { status: 500 }
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Unhandled error",
        message: err.message,
      }),
      { status: 500 }
    );
  }
}
