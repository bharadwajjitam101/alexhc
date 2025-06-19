// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // Use environment variables for security, fallback to actual values
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'WHiLhZul7x8QpEsgt',
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_ai6a2ij',
  ADMIN_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || 'template_11vqrah',
  USER_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID || 'template_smeuvxj',
};

// Email Templates
export const EMAIL_TEMPLATES = {
  // Template for email sent to admin
  ADMIN_TEMPLATE: `Dear Alex Healthcare System Team,

A new inquiry has been received through the website contact form. Please find the details below:

Contact Information:
------------------
Name: {{user_name}}
Email: {{user_email}}

Message:
------------------
{{message}}

------------------`,

  // Template for thank you email sent to user
  USER_TEMPLATE: `Dear {{user_name}},

We have successfully received your message through the website contact form.

Thank you for reaching out! Our team will get back to you shortly.

⸻

Contact Information:
Name: {{user_name}}
Email: {{user_email}}

Message:

{{message}}

⸻

This is an automated message from our website's contact form system. Please expect a response within 24 business hours.

⸻

Best regards,
Alex Healthcare System
📞 +91 7002394679
📧 alexhealthcare10@gmail.com

⸻

Confidentiality Notice:
This email and any attachments are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this email in error, please notify the sender immediately and delete this email from your system.`,
}; 