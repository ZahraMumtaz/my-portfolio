import { Heart, Mail, Linkedin, Download, Code as Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-gradient-to-b from-transparent to-sky-950/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left: Branding */}
          <div className="animate-fade-up">
            <span className="font-display text-2xl font-bold gradient-text">ZM</span>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Building scalable systems and delivering results since 2018. Currently available for new projects.
            </p>
          </div>

          {/* Center: Quick links */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-semibold text-white text-sm mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-sky-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social & Download */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-white text-sm mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3 mb-6">
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
                  icon: Download,
                  href: '/zahra_resume.pdf',
                  label: 'Resume',
                  download: true,
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    download={social.download ? true : undefined}
                    target={!social.download ? '_blank' : undefined}
                    rel={!social.download ? 'noopener noreferrer' : undefined}
                    className="group w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300"
                    title={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <Code2 size={14} />
            <span>
              Crafted with <span className="inline-block mx-1"><Heart size={12} className="text-rose-500 fill-rose-500" /></span> by Zahra
            </span>
          </div>

          <div className="text-center text-slate-600 text-xs">
            <span>© 2025. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span>Portfolio v2.0</span>
          </div>

          <div className="text-slate-600 text-xs">
            Last updated: May 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
