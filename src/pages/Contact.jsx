import { useState } from 'react';
import useInView from '../hooks/useInView';

const contactInfo = [
  { label: 'Email', value: 'hello@linkframe.tech', href: 'mailto:hello@linkframe.tech' },
  { label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [heroRef, heroInView] = useInView();
  const [formRef, formInView] = useInView();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend integration pending
    console.log('Form submitted:', form);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-brand-orange/8 rounded-full blur-[100px] pointer-events-none" />
        <div ref={heroRef} className="container-max section-padding relative z-10 pt-40 text-center lg:text-left">
          <p className={`fade-up ${heroInView ? 'in-view' : ''} text-brand-orange text-sm font-medium uppercase tracking-widest mb-4`}>Contact</p>
          <h1 className={`fade-up delay-100 ${heroInView ? 'in-view' : ''} heading-xl text-text-light max-w-2xl mx-auto lg:mx-0`}>Let's start a conversation.</h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="container-max">
          <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className={`fade-up ${formInView ? 'in-view' : ''} lg:col-span-3 flex flex-col gap-6 text-center lg:text-left`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-text-muted text-sm text-left">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-text-light text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.06] transition-all duration-300 ease-out"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-text-muted text-sm text-left">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-text-light text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.06] transition-all duration-300 ease-out"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-text-muted text-sm text-left">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-text-light text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.06] transition-all duration-300 ease-out resize-none"
                />
              </div>
              <button type="submit" className="btn-primary mx-auto lg:mx-0 lg:self-start">
                Send Message
              </button>
            </form>

            {/* Info */}
            <div className={`fade-up delay-200 ${formInView ? 'in-view' : ''} lg:col-span-2 flex flex-col gap-10 text-center lg:text-left`}>
              <div>
                <h2 className="heading-sm text-text-light mb-4">Get in touch</h2>
                <p className="text-body mx-auto lg:mx-0">
                  Have a project in mind? We'd love to hear about it. Reach out and we'll get back to you within 24 hours.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {contactInfo.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-text-muted text-xs uppercase tracking-widest mb-1">{label}</p>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-text-light text-sm hover:text-brand-orange transition-colors duration-200"
                    >
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
