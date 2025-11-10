import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, country } = await req.json();

    if (!name || !email || !phone || !country) {
      return Response.json({ message: 'All fields are required' }, { status: 400 });
    }

     const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }, 
        });
    
        const Mails = [
          'info@praviivf.in',
          'ritshukla@gmail.com',
          'deepakbaradwaj933@gmail.com'
        ]

    await transporter.sendMail({
      from: `"Pravi IVF Clinic" <${process.env.SMTP_USER}>`,
      to: Mails, // or your recipient email
      subject: 'New Online Consultation Booking',
      html: `
        <h2>New Consultation Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
      `,
    });
 
    return NextResponse.json(
      { 
        success: true,
        message: 'Consultation booked successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Consultation API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
