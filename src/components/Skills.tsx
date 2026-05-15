const skillGroups = [
  {
    title: 'Backend',
    color: 'sky',
    skills: ['Node.js', 'NestJS', 'Laravel', 'REST API', 'GraphQL', 'Microservices'],
  },
  {
    title: 'Frontend',
    color: 'emerald',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'jQuery', 'Tailwind'],
  },
  {
    title: 'Database',
    color: 'amber',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'TypeORM'],
  },
  {
    title: 'DevOps & Tools',
    color: 'rose',
    skills: ['Docker', 'AWS', 'Git', 'Postman', 'Testing', 'OAuth'],
  },
];

const colorMap: Record<string, string> = {
  sky: 'from-sky-500/10 to-sky-500/5 border-sky-500/20 text-sky-300 group-hover:border-sky-500/50 group-hover:from-sky-500/20 group-hover:to-sky-500/10',
  emerald: 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 text-emerald-300 group-hover:border-emerald-500/50 group-hover:from-emerald-500/20 group-hover:to-emerald-500/10',
  amber: 'from-amber-500/10 to-amber-500/5 border-amber-500/20 text-amber-300 group-hover:border-amber-500/50 group-hover:from-amber-500/20 group-hover:to-amber-500/10',
  rose: 'from-rose-500/10 to-rose-500/5 border-rose-500/20 text-rose-300 group-hover:border-rose-500/50 group-hover:from-rose-500/20 group-hover:to-rose-500/10',
};

const titleColorMap: Record<string, string> = {
  sky: 'text-sky-400',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400',
  rose: 'text-rose-400',
};

const dotColorMap: Record<string, string> = {
  sky: 'bg-sky-400',
  emerald: 'bg-emerald-400',
  amber: 'bg-amber-400',
  rose: 'bg-rose-400',
};

const tagColorMap: Record<string, string> = {
  sky: 'bg-sky-500/15 border-sky-500/30 text-sky-300 group-hover:bg-sky-500/25 group-hover:border-sky-500/50',
  emerald: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 group-hover:bg-emerald-500/25 group-hover:border-emerald-500/50',
  amber: 'bg-amber-500/15 border-amber-500/30 text-amber-300 group-hover:bg-amber-500/25 group-hover:border-amber-500/50',
  rose: 'bg-rose-500/15 border-rose-500/30 text-rose-300 group-hover:bg-rose-500/25 group-hover:border-rose-500/50',
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Technical Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Core <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-base">
            A comprehensive toolkit built over 6+ years of professional software engineering, constantly evolving with industry standards.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {skillGroups.map((group, idx) => (
            <div
              key={group.title}
              className={`group bg-gradient-to-br ${colorMap[group.color]} border rounded-2xl p-8 card-hover relative overflow-hidden transition-all duration-500 animate-fade-up`}
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              {/* Background glow */}
              <div
                className={`absolute -inset-20 ${dotColorMap[group.color]} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}
              />

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${group.color}-400 to-transparent opacity-30 group-hover:opacity-60 transition-opacity`}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-3 h-3 rounded-full ${dotColorMap[group.color]} animate-pulse`} />
                  <h3 className={`font-display font-bold text-sm uppercase tracking-wider ${titleColorMap[group.color]}`}>
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-300 ${tagColorMap[group.color]}`}
                      style={{ animationDelay: `${0.05 * i}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrations row */}
        <div className="bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/10 rounded-2xl p-8 card-hover group animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-6">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-slate-300 mb-1">
              Also Experienced With
            </h3>
            <p className="text-slate-600 text-xs">Third-party APIs and specialized tools</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'OpenAI', 'Eleven Labs', 'Stripe', 'Twilio', 'SendGrid',
              'Web3.js', 'Ethereum', 'Bolt.new', 'EmailJS', 'Skipcash',
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-300 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
