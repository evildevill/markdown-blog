import nodemailer from "nodemailer";
import mongoose from "mongoose";
import validator from "validator"; // Import the validator package

// MongoDB connection
const mongoUri = process.env.MONGO_URI;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const connection = await mongoose.connect(mongoUri);
  cachedDb = connection;
  return connection;
}

// Define a schema for subscribers
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

// Create a model for the subscribers
const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
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

    // Validate email format
    if (!validator.isEmail(email)) {
      return new Response(JSON.stringify({ message: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Check if the email already exists
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

    // Send a quick response
    const response = new Response(
      JSON.stringify({ message: "Subscription successful!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

    // Handle emails asynchronously
    setImmediate(async () => {
      try {
        // Send a thank-you email to the subscriber
        await transporter.sendMail({
          from: `"Your Website" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Thank you for subscribing!",
          text: "Thank you for subscribing to our newsletter. We appreciate your support!",
          html: "<p>Thank you for subscribing to our newsletter. We appreciate your support!</p>",
        });

        // Notify the admin about the new subscriber
        await transporter.sendMail({
          from: `"Your Website" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: "New Subscriber!",
          text: `New subscriber: ${email}`,
          html: `<p>New subscriber: ${email}</p>`,
        });
      } catch (error) {
        console.error("Error sending emails:", error);
      }
    });

    // Return the response immediately
    return response;
  } catch (error) {
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
