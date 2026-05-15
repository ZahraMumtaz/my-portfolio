import { useState } from 'react';
import { Mail, Linkedin, Phone, Send, CircleCheck as CheckCircle2, MessageSquare, Globe } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-base">
            Open to freelance projects, collaborations, and innovative ideas. Let's create something impactful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <div className="animate-slide-left" style={{ animationDelay: '0.2s' }}>
            <p className="text-slate-400 leading-relaxed mb-10 text-base">
              Whether you need a scalable backend API, a complete full-stack product, or AI-powered features — I'm ready to bring your vision to life with clean architecture and measurable results. Let's connect and explore possibilities.
            </p>

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

              {/* Availability */}
              <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400 text-sm font-bold">Available Now</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Currently taking on new freelance projects and collaborations. Typical response time: within 12 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="animate-slide-right"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-8 card-hover relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl" />
                    <CheckCircle2 size={56} className="text-emerald-400 relative" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Thanks for reaching out. I'll get back to you shortly with next steps.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', message: '' });
                    }}
                    className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <MessageSquare size={14} />
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-300 text-xs mb-2.5 font-semibold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:bg-white/10 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs mb-2.5 font-semibold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:bg-white/10 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs mb-2.5 font-semibold">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:bg-white/10 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:from-sky-600 disabled:to-emerald-600 disabled:shadow-sky-500/10 group"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
