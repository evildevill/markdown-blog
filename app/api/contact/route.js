// app/api/contact/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON body

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Please fill in all the fields.' }, { status: 400 });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_USE_SSL === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,    // Stored in .env
        pass: process.env.EMAIL_PASS,    // Stored in .env
      },
    });

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.EMAIL_USER, // Your email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Your message has been sent!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}