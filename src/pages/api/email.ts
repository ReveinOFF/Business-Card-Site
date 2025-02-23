require("dotenv").config();
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      // await transporter.sendMail({
      //   from: `"${name}" <${email}>`,
      //   to: process.env.EMAIL_USER,
      //   subject: subject,
      //   text: message,
      //   html: `<h1>${name}</h1><p>${message}</p><p>Email: ${email}</p>`,
      // });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
