import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Learning & Development</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* Education */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-white mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-1 gap-8">
              {/* Degree */}
              <div
                className="group bg-gradient-to-br from-sky-500/10 to-sky-500/5 border border-sky-500/20 rounded-2xl p-8 card-hover relative overflow-hidden animate-fade-up"
                style={{ animationDelay: '0.1s' }}
              >
                {/* Background glow */}
                <div className="absolute -inset-20 bg-sky-500/20 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-30 group-hover:opacity-60 transition-opacity" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center mb-6 group-hover:bg-sky-500/30 transition-all duration-300">
                    <GraduationCap size={24} className="text-sky-400" />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-bold mb-1">
                      <Calendar size={13} />
                      2013 – 2017
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:gradient-text transition-all mb-2">
                      Bachelor of Computer Sciences
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                      <MapPin size={14} />
                      Government College University Lahore
                    </div>
                    <p className="text-slate-500 text-sm">Specialized in Computer Sciences with focus on software development and system design.</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-6xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Certification Card */}
              <div
                className="group bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 card-hover relative overflow-hidden animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                {/* Background glow */}
                <div className="absolute -inset-20 bg-emerald-500/20 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30 group-hover:opacity-60 transition-opacity" />

                <div className="relative flex flex-col h-full">
                  {/* Certificate Image - Vertical with Animation */}
                  <div className="mb-4 flex justify-center flex-1">
                    <div className="rounded-lg overflow-hidden border border-emerald-500/30 bg-slate-900/50 shadow-lg animate-float-vertical w-32" style={{ perspective: '1000px' }}>
                      <img
                        src="/certificate_3160703.jpg"
                        alt="MongoDB Certificate"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-2 group-hover:bg-emerald-500/30 transition-all duration-300 mx-auto">
                      <Award size={18} className="text-emerald-400" />
                    </div>

                    <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs font-bold mb-1">
                      <Calendar size={12} />
                      Apr 2026
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:gradient-text transition-all mb-1 line-clamp-2">
                      MongoDB Essential Training
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-2">
                      <Award size={12} />
                      LinkedIn Learning
                    </div>
                    <p className="text-slate-500 text-xs break-all font-mono line-clamp-1">
                      3e5f08a24a519bb555e2be5b...
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
