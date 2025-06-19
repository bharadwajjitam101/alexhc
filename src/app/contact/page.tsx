'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const faqs = [
  {
    question: "1. What services does Alex Healthcare System provide?",
    answer:
      "We offer turnkey hospital construction, medical gas pipeline systems, modular OT & ICU setups, hospital furniture, surgical equipment, licensing support, and hospital architectural design.",
  },
  {
    question: "2. Do you provide end-to-end hospital project execution?",
    answer:
      "Yes, we specialize in complete project management—from planning and design to construction, equipment installation, and regulatory compliance.",
  },
  {
    question: "3. Where do you operate?",
    answer:
      "Our primary operations are based in Northeast India, with a growing presence across multiple states.",
  },
  {
    question: "4. Are your products certified and compliant?",
    answer:
      "Yes, all our medical devices and infrastructure solutions comply with industry standards and are sourced from certified manufacturers.",
  },
  {
    question: "5. How do I get started with a project?",
    answer:
      "You can reach us via our contact form, phone, or email. Our team will guide you through a consultation and project evaluation process.",
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openIndex, setOpenIndex] = useState(0);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email to admin
      const adminTemplateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        subject: formData.subject || 'Contact Form Inquiry'
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        adminTemplateParams
      );

      // Send thank you email to user
      const userTemplateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.USER_TEMPLATE_ID,
        userTemplateParams
      );

      console.log('Emails sent successfully');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending emails:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F7F7]">
      {/* Hero Section with Contact Info Split */}
      <section className="w-full flex flex-col md:flex-row h-[520px] sm:h-[400px]">
        {/* Left: Background image with overlay and content */}
        <div className="relative flex-1 flex items-center min-h-[260px]">
          <Image
            src="/contactu-bg.jpg" // Replace with your actual image path
            alt="Construction Site"
            fill
            className="object-cover object-center z-0"
            style={{ filter: "brightness(0.5)" }}
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="relative z-20 flex flex-col items-start px-4 sm:pl-10 md:pl-30 pr-0 max-w-xl w-full py-10 sm:py-0">
            <div className="flex items-start mb-4">
              <div className="w-2 h-[40px] sm:h-[60px] bg-[#3376C8] mr-4 rounded" />
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
                Contact Us
              </h1>
            </div>
            <p className="text-white text-sm sm:text-base mb-4" style={{fontFamily: 'Arial, sans-serif'}}>
            Reach out to us today. Whether it's a query, consultation, or collaboration, our team at Alex Healthcare System is ready to assist you every step of the way.
            </p>
            <button className="bg-[#3376C8] text-white font-bold px-6 sm:px-8 py-3 rounded shadow hover:bg-blue-600 transition-all text-xs tracking-widest uppercase w-max" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
              Send a Message
            </button>
          </div>
        </div>
        {/* Right: Blue contact info box */}
        <div className="w-full md:w-[400px] bg-[#5B9DED] flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-black" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Contact Info</h2>
          <div className="mb-4 sm:mb-6">
            <div className="font-bold mb-1 text-black">Our Office</div>
            <div className="text-sm text-black">Alex Healthcare System House No. 06, Jayanagar Road, Six Mile, Guwahati, <br/>Assam – 781022</div>
          </div>
          <div className="mb-4 sm:mb-6">
            <div className="font-bold mb-1 text-black">Open Office Hours</div>
            <div className="text-sm text-black">Mon – Fri: 9:00 AM – 6:00 PM<br/>Sat: 10:00 AM – 4:00 PM</div>
          </div>
          <div className="mb-4 sm:mb-6">
            <div className="font-bold mb-1 text-black">Get in Touch</div>
            <div className="text-sm text-black">alexhealthcare10@gmail.com<br/>+91 7002394679</div>
          </div>
          {/* <div className="w-full flex flex-row flex-wrap gap-4 sm:gap-6 mt-0 sm:mt-4 justify-start">
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
          </div> */}
        </div>
      </section>

      {/* Call to Action Bar (pixel-perfect) */}
      <section className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 sm:py-10 border-b border-gray-200">
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <span className="text-xl sm:text-2xl md:text-[2.5rem] font-extrabold text-[#5B9DED] leading-tight mb-2" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Call: +91 7002394679
          </span>
          <span className="text-base sm:text-lg md:text-[1.6rem] font-bold text-[#222] mt-6 mb-4 md:mb-0 block" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            We Can't Wait to Make Your Ideas a Reality
          </span>
        </div>
        <div className="flex-1 flex justify-end w-full md:mt-0">
          <button
            className="bg-white border-4 border-black px-6 sm:px-10 py-3 font-bold text-xs sm:text-sm tracking-widest shadow-[6px_8px_16px_0_rgba(0,0,0,0.18)] hover:bg-gray-100 transition-all uppercase text-[#5B9DED]"
            style={{ fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em', boxShadow: '8px 12px 16px 0 rgba(0,0,0,0.18)' }}
          >
            Online Estimate Form
          </button>
        </div>
      </section>

      {/* Get In Touch + FAQ Section */}
      <section className="w-full flex flex-col md:flex-row justify-center items-start py-10 sm:py-16 bg-[#F7F7F7]">
        <div className="flex flex-col md:flex-row w-full max-w-[1200px] gap-6 sm:gap-12 items-start px-2 sm:px-4">
          {/* Left: Form */}
          <div className="flex-1 bg-white px-4 sm:px-8 md:px-10 py-8 sm:py-10 flex flex-col justify-start min-w-0 max-w-[540px] w-full" style={{ boxSizing: 'border-box' }}>
            <h2 className="text-xl sm:text-2xl md:text-[2.1rem] font-extrabold mb-2 text-[#222] leading-tight" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Get In Touch</h2>
            <div className="w-10 sm:w-16 h-1 bg-blue-600 mb-6 sm:mb-8" />
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <p className="font-medium">Thank you! Your message has been sent successfully. We'll get back to you within 24 business hours.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <p className="font-medium">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                required
                className="bg-white border border-gray-200 rounded-none px-4 sm:px-5 py-3 text-sm sm:text-[1rem] font-medium text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400" 
                style={{ fontFamily: 'Montserrat, Arial, sans-serif', height: 44 }} 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                required
                className="bg-white border border-gray-200 rounded-none px-4 sm:px-5 py-3 text-sm sm:text-[1rem] font-medium text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400" 
                style={{ fontFamily: 'Montserrat, Arial, sans-serif', height: 44 }} 
              />
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject" 
                className="bg-white border border-gray-200 rounded-none px-4 sm:px-5 py-3 text-sm sm:text-[1rem] font-medium text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400" 
                style={{ fontFamily: 'Montserrat, Arial, sans-serif', height: 44 }} 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message" 
                rows={4} 
                required
                className="bg-white border border-gray-200 rounded-none px-4 sm:px-5 py-3 text-sm sm:text-[1rem] font-medium text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 resize-none" 
                style={{ fontFamily: 'Montserrat, Arial, sans-serif', minHeight: 90 }} 
              />
              <div className="flex justify-start mt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-white border-2 border-black px-6 sm:px-8 py-2 font-bold text-xs tracking-widest shadow-[0_8px_16px_0_rgba(0,0,0,0.18)] transition-all uppercase text-black ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`} 
                  style={{ fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em', boxShadow: '8px 12px 16px 0 rgba(0,0,0,0.18)' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
          {/* Right: FAQ/Accordion */}
          <div className="flex-1 bg-white px-4 sm:px-8 md:px-10 py-8 sm:py-10 min-w-0 max-w-[540px] w-full flex flex-col justify-start mt-8 md:mt-0" style={{ boxSizing: 'border-box' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={"border-b border-gray-200 " + (idx === 0 ? "pt-0" : "pt-2") + (idx === faqs.length - 1 ? " border-b-0" : "")}>
                <button
                  className={`w-full text-left font-extrabold text-base sm:text-[1.15rem] py-4 sm:py-5 text-[#222] focus:outline-none flex justify-between items-center`}
                  style={{ fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: '1.2' }}
                  onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                  aria-expanded={openIndex === idx}
                >
                  {faq.question}
                  <span className="ml-2 text-gray-400">{openIndex === idx ? '-' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className="text-gray-500 text-sm sm:text-[1rem] leading-relaxed pb-4 sm:pb-5 pl-1 pr-2" style={{ fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: '1.6' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (iframe, full width, muted overlay) */}
      <section className="w-full bg-[#F7F7F7]">
        <div className="w-full h-[200px] sm:h-[260px] md:h-[340px] relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.005870453494!2d91.80183777567493!3d26.13135157712152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a58ce65555555%3A0xa440dc23a848e44c!2sAlex%20Health%20Care%20System!5e0!3m2!1sen!2sin!4v1747765014866!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, width: '100%', height: '100%', filter: 'brightness(0.6)' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alex Health Care System Map"
          ></iframe>
        </div>
      </section>
      
    </div>
  );
} 