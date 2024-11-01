import nodemailer from 'nodemailer';
import crypto from 'crypto';

const rateLimitStore = new Map();
const RATE_LIMIT_COUNT = 1;
const RATE_LIMIT_DURATION = 24 * 60 * 60 * 1000;

export async function POST(req) {
    try {
        const { reason, additionalFeedback } = await req.json();

        // Basic validation and sanitization
        if (!reason || typeof reason !== 'string' || reason.length > 500) {
            return new Response(JSON.stringify({ message: 'Invalid input.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || req.connection.remoteAddress;
        const hashedIp = crypto.createHash('sha256').update(clientIp).digest('hex');

        const now = Date.now();
        const rateLimitData = rateLimitStore.get(hashedIp) || { count: 0, lastAttempt: now };

        if (now - rateLimitData.lastAttempt > RATE_LIMIT_DURATION) {
            rateLimitData.count = 0;
            rateLimitData.lastAttempt = now;
        }

        rateLimitData.count += 1;
        rateLimitData.lastAttempt = now;
        rateLimitStore.set(hashedIp, rateLimitData);

        if (rateLimitData.count > RATE_LIMIT_COUNT) {
            return new Response(JSON.stringify({ message: 'Rate limit exceeded. Please try again tomorrow.' }), {
                status: 429,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const immediateResponse = new Response(JSON.stringify({ message: 'Feedback submitted successfully.' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

        sendFeedbackEmail(sanitizeInput(reason), sanitizeInput(additionalFeedback || 'N/A'));
        return immediateResponse;

    } catch (error) {
        console.error("Error processing feedback:", error);
        return new Response(JSON.stringify({ message: 'Failed to process feedback.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

async function sendFeedbackEmail(reason, additionalFeedback) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER,
            port: parseInt(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: true,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.FEEDBACK_EMAIL_RECIPIENT || 'hello@hackerwasii.com',
            subject: 'Uninstall Feedback',
            text: `Reason: ${reason}\nAdditional Feedback: ${additionalFeedback}`,
        };
        
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully.");
    } catch (error) {
        console.error("Failed to send feedback email:", error);
    }
}

// Input sanitization function
function sanitizeInput(input) {
    return input.replace(/<[^>]*>?/gm, ''); // Remove any HTML tags
}