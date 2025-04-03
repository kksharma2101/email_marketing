import { Schema, model } from "mongoose";

const emailSchema = new Schema(
  {
    subject: String,
    body: String,
    recipient: String,
    scheduledTime: Date,
  },
  { timestamps: true }
);
// time, email body, subject and an email address
const Email = model("Email", emailSchema);
export default Email;
