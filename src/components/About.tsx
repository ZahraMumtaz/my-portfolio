import { CircleCheck as CheckCircle2, Zap } from 'lucide-react';

const highlights = [
  'RESTful & GraphQL API design',
  'Microservices architecture',
  'Database optimization',
  'Third-party integrations',
  'Team leadership',
  'Full lifecycle ownership',
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with enhanced styling */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0 group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500 group-hover:blur-3xl animate-blob" />

              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-sky-500/30 to-emerald-500/10 border border-sky-500/20 group-hover:border-sky-500/40 transition-all duration-500">
                <img
                  src="/WhatsApp_Image_2026-05-05_at_11.34.45_PM.jpeg"
                  alt="Zahra Mumtaz - Software Engineer at work"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform group-hover:blur-sm duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-transparent group-hover:from-[#0a0f1e]/60 transition-all duration-500" />

                {/* Floating accent */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-sky-500/10 rounded-3xl backdrop-blur-sm" />
                </div>
              </div>

              {/* Status badge with animation */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl p-1 shadow-2xl shadow-emerald-500/30 animate-float">
                <div className="bg-[#0a0f1e] rounded-xl px-5 py-3 flex items-center gap-3">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Status</div>
                    <div className="text-sm font-bold gradient-text">Freelancing</div>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-1 shadow-2xl shadow-sky-500/30">
                <div className="bg-[#0a0f1e] rounded-xl px-4 py-3 text-center">
                  <div className="font-display text-3xl font-bold gradient-text">6+</div>
                  <div className="text-sky-300 text-xs font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content with enhanced typography */}
          <div className="lg:max-w-xl animate-slide-right" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={16} className="text-sky-400" />
              <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">About Me</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Building Scalable
              <br />
              <span className="gradient-text">Systems That Win</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-5 text-base">
              I'm a Software Engineer with 6+ years of experience designing and building RESTful and GraphQL APIs, microservices architectures, and scalable SaaS products. I specialize in Node.js, NestJS, React, and Laravel.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8 text-base">
              I've led backend development across the full lifecycle — from technical scoping to deployment — and mentored junior engineers, reducing onboarding time by ~20% through structured processes and clear documentation.
            </p>

            {/* Highlight boxes */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300"
                  style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                >
                  <CheckCircle2 size={16} className="text-sky-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-sky-500/30 text-sky-300 hover:bg-sky-500/10 hover:border-sky-500/60 transition-all duration-300 group font-medium text-sm"
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
