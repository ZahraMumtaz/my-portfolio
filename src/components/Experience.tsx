import { Briefcase, Calendar, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: 'Freelancing',
    role: 'Full-Stack Software Engineer',
    period: 'Jan 2025 – Present',
    current: true,
    highlights: [
      'Gathered client requirements, prepared proposals, and shipped full-stack products with end-to-end testing, cutting delivery time by ~30%.',
      'Integrated OpenAI API, Eleven Labs, and EmailJS across multiple client projects, enabling AI-driven features.',
    ],
    tags: ['Node.js', 'React', 'OpenAI', 'Supabase', 'Full-Stack'],
  },
  {
    company: 'InvoZone',
    role: 'Software Engineer',
    period: 'Jan 2022 – Dec 2024',
    current: false,
    highlights: [
      'Led feature development across 5+ multi-tenant products, meeting sprint deadlines consistently.',
      'Authored 100+ test cases and performed manual testing, reducing post-release bug reports by ~40%.',
    ],
    tags: ['NestJS', 'PostgreSQL', 'Docker', 'React', 'TypeScript'],
  },
  {
    company: 'Programmers Force',
    role: 'Backend Developer',
    period: 'Sep 2018 – Dec 2021',
    current: false,
    highlights: [
      'Designed RESTful APIs with Docker and migrated databases from MySQL to PostgreSQL, improving query performance by ~35%.',
      'Migrated monolithic CodeIgniter codebase to Laravel and integrated 5+ third-party APIs.',
    ],
    tags: ['Laravel', 'Docker', 'PostgreSQL', 'REST API'],
  },
  {
    company: 'Zin Technologies',
    role: 'Junior Software Developer',
    period: 'Jan 2018 – Aug 2018',
    current: false,
    highlights: [
      'Contributed to RESTful API development for an HR system using Laravel, Vue.js, and jQuery, delivering within 7-month timeline.',
    ],
    tags: ['Laravel', 'Vue.js', 'jQuery', 'REST API'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Career Path</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-base">
            Progressive roles across startups and established companies, building and scaling products from the ground up.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-7 top-10 bottom-0 w-1 bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative md:pl-32 animate-fade-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-4 h-4 rounded-full border-3 border-sky-500 bg-[#0a0f1e] hidden md:flex items-center justify-center z-20">
                  {exp.current && (
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="group bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/8 rounded-2xl p-6 md:p-8 card-hover relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-emerald-500/0 group-hover:from-sky-500/5 group-hover:to-emerald-500/5 transition-all duration-500" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-500" />

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                            <Briefcase size={16} className="text-sky-400" />
                          </div>
                          <span className="text-sky-400 font-semibold text-sm">{exp.company}</span>
                          {exp.current && (
                            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:gradient-text transition-all">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm whitespace-nowrap bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group/item">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="group-hover/item:text-slate-300 transition-colors">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-500 group-hover:text-slate-400 group-hover:border-sky-500/30 group-hover:bg-sky-500/5 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon accent */}
                  <TrendingUp
                    size={80}
                    className="absolute -bottom-10 -right-10 text-sky-500/5 group-hover:text-sky-500/10 transition-colors duration-500 pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
