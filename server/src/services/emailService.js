import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmail({ to, subject, html }) {
  try {
    const info = await transporter.sendMail({
      from: `"Email Sequence" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
    });

    const res = nodemailer.getTestMessageUrl(info);
    console.log("Response from Nodemailer", res);

    console.log(`Email sent to ${to}`);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

export default sendEmail;
