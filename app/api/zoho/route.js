// app/api/zoho/route.js
export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, course } = body;

    // Step 1: Get fresh access token
    const tokenRes = await fetch(
      `${process.env.ZOHO_API_DOMAIN}/oauth/v2/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          refresh_token: process.env.ZOHO_REFRESH_TOKEN,
          client_id: process.env.ZOHO_CLIENT_ID,
          client_secret: process.env.ZOHO_CLIENT_SECRET,
          grant_type: "refresh_token",
        }),
      }
    );

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Step 2: Create a lead in Zoho CRM
    const res = await fetch(`${process.env.ZOHO_API_DOMAIN}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            First_Name: firstName,
            Last_Name: lastName,
            Email: email,
            Phone: phone,
            Lead_Source: "Website",
            Description: `Enquiry for course: ${course}`,
            Course: course, // Only if your Zoho CRM has a custom field "Course"
          },
        ],
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
