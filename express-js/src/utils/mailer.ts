import nodemailer from "nodemailer"

export const sendActivationEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

const activationLink = `http://localhost:3000/api/users/activate/${token}`
  const mailOptions = {
    from: `"Aldo Site" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Aktivasi Akun",
    html: `
      <h2>Halo 👋</h2>
      <p>Terima kasih telah mendaftar. Silakan klik link berikut untuk mengaktifkan akun kamu:</p>
      <a href="${activationLink}">Aktivasi Akun</a>
      <p>Link ini berlaku selama 1 hari.</p>
    `,
  }

  await transporter.sendMail(mailOptions)
}
