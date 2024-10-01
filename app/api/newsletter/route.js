import nodemailer from "nodemailer";
import mongoose from "mongoose";

// MongoDB connection
const mongoUri = process.env.MONGO_URI; // Your MongoDB Atlas connection string

// Connect to MongoDB (ensure it's connected only once)
if (!mongoose.connections[0].readyState) {
  mongoose.connect(mongoUri); // Removed deprecated options
}

// Define a schema for subscribers
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

// Create a model for the subscribers
const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

// Nodemailer transporter setup
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
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if the email already exists in MongoDB
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return new Response(
        JSON.stringify({ message: "Email already exists" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Save the new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send a thank-you email to the subscriber
    const sendThankYouEmail = transporter.sendMail({
      from: `"Your Website" <${process.env.EMAIL_USER}>`, // sender address
      to: email, // subscriber's email
      subject: "Thank you for subscribing!", // subject line
      text: "Thank you for subscribing to our newsletter. We appreciate your support!", // plain text body
      html: "<p>Thank you for subscribing to our newsletter. We appreciate your support!</p>", // HTML body
    });

    // Notify the admin about the new subscriber
    const sendAdminNotification = transporter.sendMail({
      from: `"Your Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Subscriber!",
      text: `New subscriber: ${email}`,
      html: `<p>New subscriber: ${email}</p>`,
    });

    // Send both emails in parallel
    await Promise.all([sendThankYouEmail, sendAdminNotification]);

    return new Response(
      JSON.stringify({ message: "Subscription successful!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error handling subscription:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Allow": "POST, OPTIONS",
    },
  });
}
