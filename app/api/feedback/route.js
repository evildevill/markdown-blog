// app/api/feedback/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// In-memory rate limit store
const rateLimitStore = new Map();
const RATE_LIMIT_COUNT = 1; // Max submissions per day
const RATE_LIMIT_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds

export async function POST(req) {
    try {
        const { reason, additionalFeedback } = await req.json();

        // Validate input
        if (!reason) {
            return NextResponse.json({ message: 'Reason is required.' }, { status: 400 });
        }

        // Get client IP address
        const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || req.connection.remoteAddress;

        // Rate limit check
        const now = Date.now();
        const rateLimitData = rateLimitStore.get(clientIp) || { count: 0, lastAttempt: now };

        // Reset rate limit if duration has passed
        if (now - rateLimitData.lastAttempt > RATE_LIMIT_DURATION) {
            rateLimitData.count = 0;
            rateLimitData.lastAttempt = now;
        }

        // Increment count and set new timestamp
        rateLimitData.count += 1;
        rateLimitData.lastAttempt = now;
        rateLimitStore.set(clientIp, rateLimitData);

        if (rateLimitData.count > RATE_LIMIT_COUNT) {
            return NextResponse.json({ message: 'Rate limit exceeded.' }, { status: 429 });
        }

        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER,
            port: parseInt(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_USE_SSL === 'true', // true for port 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Define mail options
        const mailOptions = {
            from: `"Feedback Form" <${process.env.EMAIL_USER}>`,
            to: 'hello@hackerwasii.com',
            subject: 'Uninstall Feedback',
            text: `Reason: ${reason}\nAdditional Feedback: ${additionalFeedback || 'N/A'}`,
        };

        // Send email and respond
        await transporter.sendMail(mailOptions);
        console.log("Feedback email sent successfully.");
        return NextResponse.json({ message: 'Feedback submitted successfully.' }, { status: 200 });

    } catch (error) {
        console.error("Failed to send feedback email:", error);
        return NextResponse.json({ message: 'Failed to process feedback.' }, { status: 500 });
    }
}
