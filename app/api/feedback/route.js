import nodemailer from 'nodemailer';

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
