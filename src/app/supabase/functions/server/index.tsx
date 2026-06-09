import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-af9cbe8a/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-af9cbe8a/contact", async (c) => {
  try {
    const { name, email, message } = await c.req.json();
    
    // Validate input
    if (!name || !email || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }
    
    // Create a unique ID for this submission
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    // Store the submission in the key-value store
    const submissionData = {
      id: submissionId,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    await kv.set(submissionId, submissionData);
    
    console.log(`Contact form submission received from ${name} (${email})`);
    
    // Send email notification using Resend API
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: 'rhythmchheda@gmail.com',
            subject: `New Portfolio Contact from ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
            `,
          }),
        });
        
        if (!emailResponse.ok) {
          const errorData = await emailResponse.text();
          console.error(`Failed to send email notification: ${errorData}`);
        } else {
          console.log(`Email notification sent successfully to rhythmchheda@gmail.com`);
        }
      } catch (emailError) {
        console.error(`Error sending email notification: ${emailError}`);
      }
    } else {
      console.log('RESEND_API_KEY not configured. Email notification not sent.');
    }
    
    return c.json({ 
      success: true, 
      message: "Your message has been received. Thank you!" 
    });
    
  } catch (error) {
    console.error(`Error processing contact form submission: ${error}`);
    return c.json({ error: "Failed to submit message" }, 500);
  }
});

// Get all contact submissions (for you to view)
app.get("/make-server-af9cbe8a/contact/submissions", async (c) => {
  try {
    const submissions = await kv.getByPrefix('contact_');
    
    // Sort by timestamp, newest first
    submissions.sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    
    return c.json({ submissions });
  } catch (error) {
    console.error(`Error fetching contact submissions: ${error}`);
    return c.json({ error: "Failed to fetch submissions" }, 500);
  }
});

Deno.serve(app.fetch);