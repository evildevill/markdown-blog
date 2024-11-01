import nodemailer from 'nodemailer';

// Create an in-memory rate limit store
const rateLimitStore = new Map();
const RATE_LIMIT_COUNT = 1; // Max submissions per day
const RATE_LIMIT_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds

export async function POST(req) {
    try {
        const { reason, additionalFeedback } = await req.json();
        // Validate input
        if (!reason) {
            return new Response(JSON.stringify({ message: 'Reason is required.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // Get IP from request headers (assuming a reverse proxy is not involved; adjust if necessary)
        const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || req.connection.remoteAddress;
        // Check rate limit
        const now = Date.now();
        const rateLimitData = rateLimitStore.get(clientIp) || { count: 0, lastAttempt: now };

        // Reset the count if the last attempt was more than a day ago
        if (now - rateLimitData.lastAttempt > RATE_LIMIT_DURATION) {
            rateLimitData.count = 0;
            rateLimitData.lastAttempt = now;
        }
        // Increment the count
        rateLimitData.count += 1;
        rateLimitData.lastAttempt = now;
        rateLimitStore.set(clientIp, rateLimitData);
        // Check if the rate limit has been exceeded
        if (rateLimitData.count > RATE_LIMIT_COUNT) {
            return new Response(JSON.stringify({ message: 'Rate limit exceeded. Please try again tomorrow.' }), {
                status: 429,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // Respond immediately to the client
        const immediateResponse = new Response(JSON.stringify({ message: 'Feedback submitted successfully.' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
        // Run email sending in a separate asynchronous process
        sendFeedbackEmail(reason, additionalFeedback);

        return immediateResponse;
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Failed to process feedback.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// Background function to send the email
async function sendFeedbackEmail(reason, additionalFeedback) {
    try {
        // Configure email transport
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER,
            port: parseInt(process.env.EMAIL_PORT), // Convert port to number
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'hello@hackerwasii.com', // Your email to receive feedback
            subject: 'Uninstall Feedback',
            text: `Reason: ${reason}\nAdditional Feedback: ${additionalFeedback || 'N/A'}`,
        };

        // Send email in the background
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully.");
    } catch (error) {
        console.error("Failed to send feedback email:", error);
    }
}
