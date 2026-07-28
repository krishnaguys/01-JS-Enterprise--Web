"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  PhoneCall,
  Map,
} from "lucide-react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };
  const handleWhatsApp = () => {
    const phoneNumber = "919876543210";
    const text = encodeURIComponent("Hello JC Enterprises, I'm reaching out from your website contact page.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };
  return (
    <div className="flex flex-col gap-16 py-10 overflow-hidden">
      
      {/* Banner */}
      <section className="relative bg-bg-subtle border-b border-card-border py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F2247] dark:text-white mt-3">
            Contact JC Enterprises
          </h1>
          <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Have questions about pricing lists, minimum orders, fabric customization, or sample requests? Get in touch with our B2B accounts team.
          </p>
        </div>
      </section>
      {/* Main Split Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Information & Cards */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">B2B Sales Head Office</h2>
            <p className="text-xs text-text-muted mt-1">Connect directly with our customer support teams.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="bg-card-bg border border-card-border p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">Call Direct</h4>
                <p className="text-xs text-text-muted mt-1">+91 98765 43210</p>
                <p className="text-xs text-text-muted">+91 79 1234 5678</p>
              </div>
            </div>
            {/* Email Card */}
            <div className="bg-card-bg border border-card-border p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">Email Enquiries</h4>
                <p className="text-xs text-text-muted mt-1">info@jcenterprises.in</p>
                <p className="text-xs text-text-muted">sales@jcenterprises.in</p>
              </div>
            </div>
            {/* Address Card */}
            <div className="bg-card-bg border border-card-border p-6 rounded-2xl flex flex-col gap-4 shadow-sm sm:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">Manufacturing Factory Address</h4>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  Plot No. 42, Industrial Area, Sector 5, Gandhinagar, Gujarat, India - 382006
                </p>
              </div>
            </div>
            {/* Business Hours Card */}
            <div className="bg-card-bg border border-card-border p-6 rounded-2xl flex flex-col gap-4 shadow-sm sm:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">Business Operations Hours</h4>
                <p className="text-xs text-text-muted mt-1">Monday - Saturday: 9:00 AM to 6:00 PM</p>
                <p className="text-xs text-accent font-semibold">Closed on Sundays & National Holidays</p>
              </div>
            </div>
          </div>
          {/* High-visibility direct action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleWhatsApp}
              className="flex-grow flex items-center justify-center gap-2 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-2xl shadow-md transition-colors cursor-pointer text-sm"
            >
              <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
              Chat on WhatsApp
            </button>
            <a
              href="tel:+919876543210"
              className="flex-grow flex items-center justify-center gap-2 py-4 bg-[#0F2247] hover:bg-slate-800 text-white font-bold rounded-2xl shadow-md transition-colors text-sm"
            >
              <PhoneCall className="w-5 h-5" />
              Call Sales Executive
            </a>
          </div>
        </div>
        {/* Right Side: Contact Form */}
        <div className="bg-card-bg border border-card-border p-8 rounded-2xl shadow-xl">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-foreground">Message Dispatched!</h3>
              <p className="text-text-muted mt-2 max-w-sm">
                Thank you for contacting JC Enterprises. Our corporate sourcing head will reach out to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-2.5 bg-primary text-white hover:bg-slate-800 rounded-xl font-bold transition-all text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-bold text-foreground mb-4">Send a Direct Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 bg-bg-subtle border border-card-border rounded-xl text-xs focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground uppercase mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enter your company name"
                    className="w-full px-4 py-2 bg-bg-subtle border border-card-border rounded-xl text-xs focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground uppercase mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2 bg-bg-subtle border border-card-border rounded-xl text-xs focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="98765 43210"
                    className="w-full px-4 py-2 bg-bg-subtle border border-card-border rounded-xl text-xs focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground uppercase mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Sizing trials request"
                  className="w-full px-4 py-2 bg-bg-subtle border border-card-border rounded-xl text-xs focus:ring-2 focus:ring-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground uppercase mb-1">
                  Message Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your workforce requirements here..."
                  className="w-full px-4 py-2 bg-bg-subtle border border-card-border rounded-xl text-xs focus:ring-2 focus:ring-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 bg-accent text-white hover:bg-red-650 rounded-xl font-bold shadow-lg shadow-accent/15 cursor-pointer disabled:opacity-75 transition-all text-sm"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Dispatching...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
      {/* Stylized Google Maps Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
        <div className="bg-bg-subtle border border-card-border rounded-2xl overflow-hidden shadow-md flex flex-col">
          <div className="p-5 border-b border-card-border bg-card-bg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-accent" />
              <span className="font-bold text-foreground text-sm">Visual Factory Location Map</span>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent font-bold hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
          
          {/* Stylized Vector Grid Placeholder for Map */}
          <div className="relative h-[320px] bg-slate-100 dark:bg-slate-900 overflow-hidden flex items-center justify-center">
            {/* Abstract Roads Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_2px,transparent_2px),linear-gradient(to_bottom,#0000000a_2px,transparent_2px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff05_2px,transparent_2px),linear-gradient(to_bottom,#ffffff05_2px,transparent_2px)]" />
            <div className="absolute w-full h-[6px] bg-accent/20 dark:bg-accent/10 top-1/2 left-0 rotate-12" />
            <div className="absolute w-[6px] h-full bg-primary/20 dark:bg-primary/10 left-1/3 top-0 -rotate-45" />
            <div className="absolute w-full h-[4px] bg-blue-500/10 bottom-1/4 left-0" />
            
            {/* Marker Pin */}
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-4 h-4 bg-accent rounded-full animate-ping absolute top-0" />
              <MapPin className="w-10 h-10 text-accent relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
              <div className="mt-2 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-card-border shadow-xl text-center">
                JC Enterprises head office <br />
                <span className="text-text-muted font-medium">Gandhinagar, Gujarat</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
