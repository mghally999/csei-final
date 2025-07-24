// app/api/zoho/callback/route.js

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return new Response("Missing authorization code", { status: 400 });
  }

  const { ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REDIRECT_URI } = process.env;

  try {
    // Step 1: Exchange code for tokens
    const tokenRes = await fetch("https://accounts.zoho.com/oauth/v2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        redirect_uri: ZOHO_REDIRECT_URI, // Must match what's in Zoho + this file path
      }),
    });

    const tokenData = await tokenRes.json();

    if (tokenData.refresh_token) {
      console.log(
        "✅ Copy & save this refresh token securely:",
        tokenData.refresh_token
      );
      return new Response("Refresh token generated. Check your logs!", {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to get refresh token", tokenData }),
        {
          status: 500,
        }
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "OAuth callback error", message: err.message }),
      {
        status: 500,
      }
    );
  }
}
