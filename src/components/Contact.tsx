import { useState } from 'react';
import { Mail, Linkedin, Phone, Send, CircleCheck as CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Ready to Scale?</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Let's Build Your Next <span className="gradient-text">Success Story</span>
          </h2>
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-base leading-relaxed">
            Whether you need a production-ready backend, a full-stack product, or AI-powered features, let's discuss how I can accelerate your product development and drive measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <div className="animate-slide-left flex flex-col" style={{ animationDelay: '0.2s' }}>
            <div className="mb-10 space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/50 flex items-center justify-center text-sky-400 text-xs">✓</span>
                  Production-Ready Solutions
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-8">
                  APIs and backend systems built to scale to millions of users with clean, maintainable code.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-xs">✓</span>
                  Full-Stack Expertise
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-8">
                  From database architecture to React UIs, I build complete products that users love.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 text-xs">✓</span>
                  AI-Powered Features
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-8">
                  Integrate LLMs and voice agents into your product seamlessly and securely.
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              {/* Email */}
              <a
                href="mailto:zahramumtaz60@gmail.com"
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 transition-all flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-medium mb-0.5">Email</div>
                  <div className="text-slate-300 group-hover:text-white text-sm transition-colors break-all">
                    zahramumtaz60@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/zahra-mumtaz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all flex-shrink-0">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-medium mb-0.5">LinkedIn</div>
                  <div className="text-slate-300 group-hover:text-white text-sm transition-colors">
                    linkedin.com/in/zahra-mumtaz
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-medium mb-0.5">Phone</div>
                  <div className="text-slate-300 text-sm">+92 336 4578573</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Form */}
          <div
            className="animate-slide-right flex flex-col"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-8 card-hover relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="relative mb-6 animate-bounce">
                    <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl" />
                    <CheckCircle2 size={64} className="text-emerald-400 relative" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-slate-400 text-base mb-2">
                    Thanks for reaching out, {form.name.split(' ')[0]}.
                  </p>
                  <p className="text-slate-500 text-sm">
                    I'll review your message and get back to you within 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-300 text-xs mb-3 font-semibold uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Your name"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none transition-all duration-300 ${
                        errors.name
                          ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/5 focus:ring-2 focus:ring-red-500/20'
                          : 'border-white/10 focus:border-sky-500 focus:bg-white/10 focus:ring-2 focus:ring-sky-500/20'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-2 flex items-center gap-1">✕ {errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs mb-3 font-semibold uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="your@email.com"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none transition-all duration-300 ${
                        errors.email
                          ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/5 focus:ring-2 focus:ring-red-500/20'
                          : 'border-white/10 focus:border-sky-500 focus:bg-white/10 focus:ring-2 focus:ring-sky-500/20'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-2 flex items-center gap-1">✕ {errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs mb-3 font-semibold uppercase tracking-wide">Message</label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell me about your project or opportunity..."
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none transition-all duration-300 resize-none ${
                        errors.message
                          ? 'border-red-500/50 focus:border-red-500 focus:bg-red-500/5 focus:ring-2 focus:ring-red-500/20'
                          : 'border-white/10 focus:border-sky-500 focus:bg-white/10 focus:ring-2 focus:ring-sky-500/20'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-2 flex items-center gap-1">✕ {errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:from-sky-600 disabled:to-emerald-600 disabled:shadow-sky-500/10 group mt-8"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending your message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                        <ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    I typically respond within 12 hours during business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
