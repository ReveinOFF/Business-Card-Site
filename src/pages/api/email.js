const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

export default function handler(req, res) {
  if (req.method === "POST") {
    transporter.sendMail(
      {
        from: "sender@example.com",
        to: "recipient@example.com",
        subject: "Message",
        text: "I hope this message gets delivered!",
        html: "<h1>hello</h1>",
      },
      (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
      }
    );
    res.status(200).json({ message: "This is a POST request" });
  }
}
