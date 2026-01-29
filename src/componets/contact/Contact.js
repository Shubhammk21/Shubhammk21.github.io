import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in", // Use smtp.zoho.com if you're not in India
  port: 465,
  secure: true,
  auth: {
    user: "Shubham@webzova.com",
    pass: "DG1dDpEe7iPJ", // MUST be an APP PASSWORD, not your login pass
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: "Shubham@webzova.com",
      to: "recipient-email@example.com",
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
