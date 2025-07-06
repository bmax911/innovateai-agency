import type { Handler, HandlerEvent } from "@netlify/functions";

// In a real app, you would use an email service like SendGrid, Resend, or AWS SES.
// Example: import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ message: "Method Not Allowed" }) };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { name, email, message } = data;

    // --- Basic Validation ---
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields." }),
      };
    }

    // --- REAL-WORLD ACTION ---
    // Here you would integrate your email sending service.
    // This console.log will show up in your Netlify Function logs for debugging.
    console.log("Received a submission:", { name, email, message });
    
    // --- Example with an email service ---
    // await resend.emails.send({
    //   from: 'onboarding@yourdomain.com',
    //   to: 'your.email@gmail.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    // });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully!" }),
    };
  } catch (error) {
    console.error("Error processing form:", error);
    return { 
        statusCode: 500, 
        body: JSON.stringify({ message: "Internal Server Error." }) 
    };
  }
};

export { handler };