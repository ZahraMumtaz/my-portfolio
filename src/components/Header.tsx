import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ scrolled }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0f1e]/85 backdrop-blur-xl py-3 shadow-lg shadow-sky-500/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl font-bold gradient-text tracking-tight hover:opacity-80 transition-opacity"
        >
          ZM
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 group-hover:w-[calc(100%-24px)] transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/zahra_resume.pdf"
            download
            className="hidden sm:flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500/20 to-emerald-500/20 border border-sky-500/30 text-sky-300 hover:border-sky-500/60 hover:from-sky-500/30 hover:to-emerald-500/30 transition-all duration-200 backdrop-blur"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1424]/95 backdrop-blur-xl border-t border-sky-500/10 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-300 hover:text-white py-2 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/zahra_resume.pdf"
            download
            className="flex items-center gap-2 text-sm text-sky-400 py-2"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
