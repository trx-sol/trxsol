import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const emailConfig = {
            fromEmail: process.env.NEXT_PUBLIC_FROM_EMAIL || "your-email@example.com",
            smtpHost: process.env.NEXT_PUBLIC_SMTP_HOST || "smtp.gmail.com",
            smtpUser: process.env.NEXT_PUBLIC_SMTP_USER || "your-email@gmail.com",
            smtpPassword: process.env.NEXT_PUBLIC_SMTP_PASSWORD || "your-password",
            domain: process.env.NEXT_PUBLIC_DOMAIN || "https://trxsol.com",
        };

        const { name, email, phone, message, websiteType, submissionTime } = await request.json();

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: emailConfig.smtpHost,
            port: 587,
            secure: false,
            auth: {
                user: emailConfig.smtpUser,
                pass: emailConfig.smtpPassword,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Admin notification email
        const mailOptions = {
            from: `"TRX Sol Support" <${emailConfig.fromEmail}>`,
            to: emailConfig.fromEmail,
            replyTo: email,
            subject: `🌟 New Website Inquiry from ${name} - TRX Sol`,
            headers: {
                "X-Priority": "1",
                "X-MSMail-Priority": "High",
                Importance: "high",
            },
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Website Inquiry - TRX Sol</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #000000;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%); padding: 0; text-align: center;">
            <div style="background: #fff; padding: 24px 0 10px 0; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <img src="https://trxsol.com/logo.png" alt="TRX Sol Logo" style="width: 120px; height: auto; margin-bottom: 0;">
            </div>
            <div style="padding: 20px 30px 10px 30px;">
                <h1 style="color: white; margin: 0; font-size: 24px;">🌟 New Website Inquiry</h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">TRX Sol Web Development</p>
            </div>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
            <div style="background-color: rgba(124, 58, 237, 0.1); border-left: 4px solid #7C3AED; padding: 20px; margin-bottom: 25px;">
                <h2 style="color: white; margin: 0 0 15px 0; font-size: 20px;">📋 Client Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-weight: bold; width: 120px;">👤 Name:</td>
                        <td style="padding: 8px 0; color: white;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-weight: bold;">📧 Email:</td>
                        <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #7C3AED; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-weight: bold;">📱 Phone:</td>
                        <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #7C3AED; text-decoration: none;">${phone}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-weight: bold;">🌐 Website:</td>
                        <td style="padding: 8px 0; color: white;">${websiteType}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-weight: bold;">⏰ Submitted:</td>
                        <td style="padding: 8px 0; color: white;">${submissionTime}</td>
                    </tr>
                </table>
            </div>
            
            <div style="background-color: rgba(6, 182, 212, 0.1); border-left: 4px solid #06B6D4; padding: 20px; margin-bottom: 25px;">
                <h3 style="color: white; margin: 0 0 15px 0; font-size: 18px;">💬 Project Requirements</h3>
                <div style="background-color: #1a1a1a; padding: 15px; border-radius: 5px; border: 1px solid #333;">
                    <p style="margin: 0; line-height: 1.6; color: white; white-space: pre-wrap;">${message}</p>
                </div>
            </div>
            
            <!-- Quick Actions -->
            <div style="text-align: center; margin: 25px 0;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 0 10px;">✉️ Reply via Email</a>
                <a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 0 10px;">📞 Call Now</a>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #1a1a1a; padding: 20px; text-align: center; border-top: 1px solid #333;">
            <p style="margin: 0; font-size: 12px; color: #888;">
                📅 Received: ${new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            })} IST
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #888;">
                🌐 Sent from TRX Sol website contact form
            </p>
        </div>
    </div>
</body>
</html>`
        };

        // Auto-reply email for customer
        const autoReplyOptions = {
            from: `"TRX Sol Team" <${emailConfig.fromEmail}>`,
            to: email,
            subject: "🌟 Thank you for contacting TRX Sol - We'll respond within 24 hours",
            headers: {
                "X-Auto-Response-Suppress": "OOF, DR, RN, NRN",
            },
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Thank You - TRX Sol</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #000000;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #111111; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <!-- Header with Logo Area -->
        <div style="background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%); padding: 0; text-align: center;">
            <div style="background: #fff; padding: 32px 0 12px 0; border-top-left-radius: 15px; border-top-right-radius: 15px;">
                <img src="https://trxsol.com/logo.png" alt="TRX Sol Logo" style="width: 120px; height: auto; margin: 0 auto;">
            </div>
            <div style="padding: 28px 30px 10px 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Thank You!</h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">We've received your inquiry</p>
            </div>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px;">
            <!-- Greeting -->
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: white; margin: 0 0 10px 0; font-size: 24px;">Dear ${name},</h2>
                <p style="color: #888; font-size: 16px; line-height: 1.6; margin: 0;">
                    Thank you for reaching out to <strong style="color: #7C3AED;">TRX Sol</strong>.
                    We have received your inquiry and our expert team will get back to you within
                    <strong style="color: #06B6D4;">24 hours</strong>.
                </p>
            </div>

            <!-- Message Summary Card -->
            <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%); border-radius: 12px; padding: 25px; margin: 25px 0; border: 1px solid #333;">
                <h3 style="color: white; margin: 0 0 20px 0; font-size: 20px; text-align: center;">📝 Your Inquiry Summary</h3>

                <div style="background-color: #1a1a1a; border-radius: 8px; padding: 20px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #333;">
                            <td style="padding: 12px 0; color: #888; font-weight: bold; width: 120px;">👤 Name:</td>
                            <td style="padding: 12px 0; color: white; font-size: 16px;">${name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #333;">
                            <td style="padding: 12px 0; color: #888; font-weight: bold;">📧 Email:</td>
                            <td style="padding: 12px 0; color: #7C3AED; font-size: 16px;">${email}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #333;">
                            <td style="padding: 12px 0; color: #888; font-weight: bold;">📱 Phone:</td>
                            <td style="padding: 12px 0; color: white; font-size: 16px;">${phone}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #333;">
                            <td style="padding: 12px 0; color: #888; font-weight: bold;">🌐 Website:</td>
                            <td style="padding: 12px 0; color: white; font-size: 16px;">${websiteType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #888; font-weight: bold; vertical-align: top;">💬 Message:</td>
                            <td style="padding: 12px 0; color: white; font-size: 16px; line-height: 1.5;">${message}</td>
                        </tr>
                    </table>
                </div>
            </div>


            <!-- Call to Action -->
            <div style="text-align: center; margin: 30px 0;">
                <div style="background-color: rgba(6, 182, 212, 0.1); border-radius: 8px; padding: 20px; border-left: 4px solid #06B6D4;">
                    <p style="margin: 0; color: white; font-size: 16px;">
                        <strong>⚡ Response Time:</strong> Our web development experts typically respond within 2-4 hours during business hours.
                    </p>
                </div>
            </div>

            <!-- Social Proof -->
            <div style="text-align: center; margin: 25px 0;">
                <p style="color: #888; margin: 0; font-size: 14px;">
                    ⭐ Trusted by businesses worldwide for web development solutions
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #1a1a1a; padding: 25px; text-align: center; border-top: 1px solid #333;">
            <p style="margin: 0 0 10px 0; color: white; font-size: 18px; font-weight: bold;">
                Best regards,<br>
                <span style="background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">TRX Sol Team</span>
            </p>
            <p style="margin: 0; font-size: 12px; color: #888;">
                📅 Sent: ${new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            })} IST
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #888;">
                🌐 This is an automated response from TRX Sol website
            </p>
        </div>
    </div>
</body>
</html>`
        };

        try {
            // First send notification to admin
            const mainEmailResult = await transporter.sendMail(mailOptions);

            // Then send auto-reply to customer
            const autoReplyResult = await transporter.sendMail(autoReplyOptions);

            return NextResponse.json(
                {
                    message: "Email sent successfully!",
                    details: `Inquiry from ${name} forwarded to ${emailConfig.fromEmail} and confirmation sent to ${email}`,
                },
                { status: 200 }
            );
        } catch (error) {
            console.error("❌ Error sending email:", error);
            throw new Error("Failed to send email");
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again." },
            { status: 500 }
        );
    }
}
