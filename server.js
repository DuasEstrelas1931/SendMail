import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

app.post('/send', async (req, res) => {
    const { to, subject, message } = req.body;

    try {
        await transporter.sendMail({
            from: `"Sistema" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text: message,
        });

        res.send('✅ E-mail enviado com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('❌ Falha ao enviar o e-mail.');
    }
});

app.listen(3001, () => {
    console.log("Servidor rodando em http://localhost:3001");
});
