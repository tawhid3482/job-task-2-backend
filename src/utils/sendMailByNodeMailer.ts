import nodemailer from "nodemailer";
import { envVars } from "../config/env";

const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  text?: string
) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587, 
    secure: false, 
    auth: {
      user: envVars.EMAIL,
      pass: envVars.APP_PASS, 
    },
  });

  // Email options
  const mailOptions = {
    from: `"Your Company" <${envVars.EMAIL}>`,
    to: `${envVars.EMAIL}`,
    subject,
    html,
    text,
  };
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
