import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gradient overlays */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-sky-500/20 rounded-full blur-[80px] opacity-30" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[80px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge with animation */}
        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs mb-8 animate-fade-up hover:border-sky-500/60 transition-all duration-300 cursor-pointer group">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="group-hover:text-sky-200 transition-colors">Available for freelance projects</span>
        </div>

        {/* Main heading with enhanced styling */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up leading-tight tracking-tight">
          <span className="text-white block">Zahra</span>
          <span className="gradient-text block text-5xl md:text-6xl lg:text-7xl">Mumtaz</span>
        </h1>

        {/* Subtitle with gradient */}
        <p className="text-lg md:text-xl text-sky-300 font-medium mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Senior Software Engineer
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          6+ years building scalable APIs, microservices, and SaaS platforms.
          <br />
          Specializing in Node.js, NestJS, React, and cloud architectures with proven track record of delivering high-impact solutions.
        </p>

        {/* Stats with cards */}
        <div
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {[
            { value: '6+', label: 'Years Exp.' },
            { value: '15+', label: 'Projects' },
            { value: '40%', label: 'Bug Reduction' },
            { value: '35%', label: 'DB Optimization' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="relative group"
              style={{ animationDelay: `${0.3 + i * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500" />
              <div className="relative bg-white/5 border border-white/10 rounded-2xl px-6 py-4 group-hover:border-sky-500/30 transition-all duration-300">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-slate-500 text-xs mt-1 group-hover:text-slate-400 transition-colors">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#contact"
            className="relative group px-8 py-3 rounded-xl font-semibold text-white text-sm overflow-hidden shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-shadow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-emerald-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <span className="relative flex items-center justify-center h-full gap-2 group-hover:gap-3 transition-all">
              Hire Me
              <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-xl border-2 border-sky-500/30 text-slate-300 hover:text-white hover:border-sky-500/60 font-semibold text-sm transition-all duration-300 group hover:bg-sky-500/5 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
              View Work
              <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Social links with hover effects */}
        <div
          className="flex justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          {[
            {
              icon: Mail,
              href: 'mailto:zahramumtaz60@gmail.com',
              label: 'Email',
            },
            {
              icon: Linkedin,
              href: 'https://linkedin.com/in/zahra-mumtaz',
              label: 'LinkedIn',
            },
            {
              icon: Github,
              href: 'https://github.com',
              label: 'GitHub',
            },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group relative"
              >
                <div className="absolute inset-0 bg-sky-500 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300" />
                <div className="relative w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-all duration-300">
                  <Icon size={18} />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
