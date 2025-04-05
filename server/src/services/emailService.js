import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmail({ to, subject, html }) {
  try {
    const res = await transporter.sendMail({
      from: `"FuturBlink" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
    });
    if (!res) {
      new Error("Error sending email");
    }

    console.log(`Email sent to ${to}`);
    // return true;
  } catch (error) {
    console.error("Error sending email:", error);
    // return false;
  }
}

export default sendEmail;
