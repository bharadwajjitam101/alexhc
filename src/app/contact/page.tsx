'use client';
import { useState } from 'react';
import Image from "next/image";

const faqs = [
  {
    question: "Donec rutrum congue leo eget malesuada?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.",
  },
  {
    question: "Vivamus suscipit tortor eget felis porttitor volutpat?",
    answer: "Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt.",
  },
  {
    question: "Curabitur non nulla sit amet nisl tempus?",
    answer: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
  },
  {
    question: "Pellentesque in ipsum id orci porta dapibus?",
    answer: "Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.",
  },
  {
    question: "Curabitur non nulla sit amet nisl?",
    answer: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
  },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
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
            src="/contact-bg.jpg" // Replace with your actual image path
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.
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
            <div className="text-sm text-black">1234 Divi St. #1000, San Francise, CA 93251</div>
          </div>
          <div className="mb-4 sm:mb-6">
            <div className="font-bold mb-1 text-black">Open Office Hours</div>
            <div className="text-sm text-black">M-F: 9am – 6pm<br/>S-S: 10am – 4pm</div>
          </div>
          <div className="mb-4 sm:mb-6">
            <div className="font-bold mb-1 text-black">Get in Touch</div>
            <div className="text-sm text-black">constructioninc.com<br/>(346) 426-2351</div>
          </div>
          <div className="w-full flex flex-row flex-wrap gap-4 sm:gap-6 mt-0 sm:mt-4 justify-start">
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Bar (pixel-perfect) */}
      <section className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 sm:py-10 border-b border-gray-200">
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <span className="text-xl sm:text-2xl md:text-[2.5rem] font-extrabold text-[#5B9DED] leading-tight mb-2" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Call: (541) 931-3526
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
            <form className="flex flex-col gap-4 sm:gap-5">
              <input type="text" placeholder="Name" className="bg-white border border-gray-200 rounded-none px-4 sm:px-5 py-3 text-sm sm:text-[1rem] font-medium text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400" style={{ fontFamily: 'Montserrat, Arial, sans-serif', height: 44 }} />
              <input type="email" placeholder="Email" className="bg-white border border-gray-200 rounded-none px-4 sm:px-5 py-3 text-sm sm:text-[1rem] font-medium text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400" style={{ fontFamily: 'Montserrat, Arial, sans-serif', height: 44 }} />
              <textarea placeholder="Message" rows={4} className="bg-white border border-gray-200 rounded-none px-4 sm:px-5 py-3 text-sm sm:text-[1rem] font-medium text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 resize-none" style={{ fontFamily: 'Montserrat, Arial, sans-serif', minHeight: 90 }} />
              <div className="flex justify-start mt-2">
                <button type="submit" className="bg-white border-2 border-black px-6 sm:px-8 py-2 font-bold text-xs tracking-widest shadow-[0_8px_16px_0_rgba(0,0,0,0.18)] hover:bg-gray-100 transition-all uppercase text-black" style={{ fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em', boxShadow: '8px 12px 16px 0 rgba(0,0,0,0.18)' }}>
                  Send Message
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