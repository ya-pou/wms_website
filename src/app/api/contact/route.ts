import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log(process.env.SMTP_PASS);

  try {
    const { name, email, message } = await req.json();

    // --- Basic validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    // --- Nodemailer transport ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // --- Email ---
    await transporter.sendMail({
      from: `"Formulaire site" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email, // pratique
      subject: `Nouveau contact: ${name}`,
      html: `
        <h2>Nouvelle demande depuis le site WebMate Services</h2>
        <p><strong>Nom : </strong> ${name}</p>
        <p><strong>Email : </strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e: unknown) {
    console.error("Mail error:", e);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}