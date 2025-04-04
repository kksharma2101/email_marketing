import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const auth = {
  auth: {
    api_key:
      "6c570893e930a0b5a3e232e879053845-24bda9c7-9eb76465" ||
      process.env.EMAIL_PASSWORD, // From Mailgun dashboard
    domain:
      "sandboxdfbd873ae0e542358456bf0122551413.mailgun.org?" ||
      process.env.EMAIL_USER, // Your Mailgun domain
  },
};
const transporter = nodemailer.createTransport(mg(auth));

// const transporter = nodemailer.createTransport({
//   service: process.env.EMAIL_SERVICE || "api.mailgun.net",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "sandboxdfbd873ae0e542358456bf0122551413.mailgun.org" || process.env.EMAIL_USER,
//     pass: "9c3f0c68-f85ddb08" || process.env.EMAIL_PASSWORD,
//   },
// });

async function sendEmail({ to, subject, html }) {
  try {
    await transporter.sendMail({
      from: `"Email Sequence" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
    });

    console.log(`Email sent to ${to}`);
    // return true;
  } catch (error) {
    console.error("Error sending email:", error);
    // return false;
  }
}

export default sendEmail;
