import nodemailer from "nodemailer";

export async function POST(req) {
    const data = await req.json();

    // Configure your SMTP transport
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "admin@priorityconst.com.au",
            pass: "onut nnvd onou pbuc",
        },
    });

    const mailOptions = {
        from: data.email,
        to: "initialstarry2002@gmail.com",
        // to: "shunda@priorityconst.com.au",
        subject: `Contact Form Submission from ${data.fullName}`,
        text: `
            Name: ${data.fullName}
            Email: ${data.email}
            Phone: ${data.phone}
            Company: ${data.company}
            Location: ${data.location}
            Message: ${data.message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}