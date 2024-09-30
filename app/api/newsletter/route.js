import nodemailer from "nodemailer";

// Create the transporter once and reuse it
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER, // Using env variables
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email from env
    pass: process.env.EMAIL_PASS, // Your email password from env
  },
});

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ message: "Email is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Send a thank-you email to the subscriber
  const sendThankYouEmail = transporter.sendMail({
    from: `"Your Website" <${process.env.EMAIL_USER}>`, // sender address
    to: email, // subscriber's email
    subject: "Thank you for subscribing!", // subject line
    text: "Thank you for subscribing to our newsletter. We appreciate your support!", // plain text body
    html: "<p>Thank you for subscribing to our newsletter. We appreciate your support!</p>", // HTML body
  });

  // Send an email to yourself (admin) about the new subscriber
  const sendAdminNotification = transporter.sendMail({
    from: `"Your Website" <${process.env.EMAIL_USER}>`, // sender address
    to: process.env.EMAIL_USER, // your email
    subject: "New Subscriber!", // subject line
    text: `New subscriber: ${email}`, // plain text body
    html: `<p>New subscriber: ${email}</p>`, // HTML body
  });

  // Send both emails in parallel
  Promise.all([sendThankYouEmail, sendAdminNotification])
    .then(() => {
      console.log("Emails sent successfully");
    })
    .catch((error) => {
      console.error("Error sending emails:", error);
    });

  // Respond to the client immediately
  return new Response(JSON.stringify({ message: "Subscription successful!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Allow": "POST, OPTIONS",
    },
  });
}