export const scheduleEmailTemplate = (data: {
  name: string;
  email: string;
  date: string;
  phone: string;
  message: string;
}) => {
  const subject = `New Schedule Created - ${data.name}`;
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Schedule Created</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 40px auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <div style="background: linear-gradient(135deg, #FF7600); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Schedule Created</h1>
      </div>
      <div style="padding: 20px;">
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Date:</b> ${data.date}</p>
        <p><b>Message:</b> ${data.message}</p>
        <hr style="margin: 20px 0;">
        <p style="font-size: 13px; color: #666;">This is an automated message confirming the new schedule entry.</p>
      </div>
      <div style="background: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; color: #777;">
        © ${new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
  return { subject, html };
};
