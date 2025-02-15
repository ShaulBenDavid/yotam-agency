import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactData } from '@/constants';

export async function POST(req: Request) {
  try {
    const { name, email, message, purpose, tel } = await req.json();

    if (!name || !email || !message || !purpose || !tel) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST as string,
      port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT as string, 10),
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: contactData.email, // Replace with your email
      subject: `Flysan Contact-us: ${purpose} - ${Date.now()}`,
      text: `שם: ${name}\nאימייל: ${email} \n טלפון: ${tel} \nמטרה: ${purpose}\nהודעה: ${message} `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'איימל נשלח בהצלחה:)',
    });
  } catch (error) {
    console.error('❌ SMTP Error:', error);
    return NextResponse.json(
      { success: false, error: 'מצטערים משהו נכשל, תנסה בבקשה מאוחר יותר..' },
      { status: 500 }
    );
  }
}
