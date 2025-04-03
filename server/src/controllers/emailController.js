// import Agenda from "@hokify/agenda";
import sendEmail from "../services/emailService.js";
import Email from "../models/emailSchema.js";

import Agenda from '@hokify/agenda';

const agenda = new Agenda({
    db: { address: 'mongodb://127.0.0.1/Email_marketing' }
});

agenda.define("send email", async (job) => {
  const { recipient, subject, body } = job.attrs.data;
  await sendEmail({
    from: process.env.EMAIL_USER,
    to: recipient,
    subject,
    text: body,
  });
  console.log(`Email sent to ${recipient}`);
});

(async function () {
  await agenda.start();
})();

export const sendSchedualEmail = async (req, res) => {
  try {
    const { recipient, subject, body } = req.body;
    const scheduledTime = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
    console.log(scheduledTime);
    const email = new Email({ recipient, subject, body, scheduledTime });
    await email.save();
    await agenda.schedule(scheduledTime, "send email", {
      recipient,
      subject,
      body,
    });
    res
      .status(201)
      .json({ message: "Email Scheduled to be sent after 1 hour" });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error send schedual email",
      error,
    });
  }
};
