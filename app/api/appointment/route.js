import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      service, 
      doctor, 
      preferredDate, 
      preferredTime, 
      message 
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate date is not in the past
    const appointmentDate = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (appointmentDate < today) {
      return NextResponse.json(
        { error: 'Appointment date cannot be in the past' },
        { status: 400 }
      );
    }

     // Create transporter
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

    // Log the appointment request (in production, you'd save to database)
    console.log('Appointment Request:', {
      name,
      email,
      phone,
      service,
      doctor: doctor || 'Any available',
      preferredDate,
      preferredTime,
      message: message || 'No additional message',
      timestamp: new Date().toISOString()
    });

    const mailOptions = {
      from: `"Pravi IVF Clinic" <${process.env.SMTP_USER}>`, // Sender address
      to: Mails, // Where you receive contact emails
      subject: `New Appointment Request - ${name}`,
      html: `
          <h2>New Appointment Request</h2>
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Doctor:</strong> ${doctor || 'Any available'}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p><strong>Message:</strong> ${message || 'None'}</p>
        `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // In production, you would:
    // 1. Save to database with status: 'pending'
    // 2. Check doctor availability
    // 3. Send confirmation email to patient
    // 4. Send notification to admin/doctor
    // 5. Create calendar event
    // 6. Send SMS confirmation

    // Example: Send appointment confirmation email
    // await sendEmail({
    //   to: email,
    //   subject: 'Appointment Request Received - Pravi IVF',
    //   html: `
    //     <h2>Thank you for booking an appointment</h2>
    //     <p>Dear ${name},</p>
    //     <p>We have received your appointment request with the following details:</p>
    //     <ul>
    //       <li><strong>Service:</strong> ${service}</li>
    //       <li><strong>Doctor:</strong> ${doctor || 'Any available'}</li>
    //       <li><strong>Preferred Date:</strong> ${preferredDate}</li>
    //       <li><strong>Preferred Time:</strong> ${preferredTime}</li>
    //     </ul>
    //     <p>Our team will contact you within 24 hours to confirm your appointment.</p>
    //     <p>If you have any urgent questions, please call us at +91 9301522255</p>
    //   `
    // });

    // Send notification to admin
    // await sendEmail({
    //   to: 'info@praviivf.in',
    //   subject: `New Appointment Request - ${name}`,
    //   html: `
    //     <h2>New Appointment Request</h2>
    //     <p><strong>Patient Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Doctor:</strong> ${doctor || 'Any available'}</p>
    //     <p><strong>Preferred Date:</strong> ${preferredDate}</p>
    //     <p><strong>Preferred Time:</strong> ${preferredTime}</p>
    //     <p><strong>Message:</strong> ${message || 'None'}</p>
    //   `
    // });

    return NextResponse.json(
      { 
        success: true,
        message: 'Appointment request received successfully. We will contact you within 24 hours.',
        appointmentDetails: {
          name,
          service,
          preferredDate,
          preferredTime
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Appointment booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later or call us directly.' },
      { status: 500 }
    );
  }
}