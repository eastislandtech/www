// lib/email.ts
export async function sendEmail(data: any) {
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "East Island Tech <noreply@eastislandtech.ca>",
      to: ["joe@eastislandtech.ca"],
      subject: `New Service Request (${data.service})`,
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    }),
  });
}
