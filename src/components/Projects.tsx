import { ExternalLink, Zap, Code as Code2 } from 'lucide-react';

const projects = [
  {
    name: 'Proposaly AI',
    subtitle: 'proposly.ai',
    url: 'https://proposly.ai',
    description: 'AI-powered proposal writing platform that cuts drafting time by ~60%. Built with modern stack featuring real-time editing and AI-assisted content generation.',
    tags: ['Bolt.new', 'Supabase', 'React', 'Skipcash'],
    impact: '~60% faster drafting',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'sky',
  },
  {
    name: 'RetailIQ',
    subtitle: 'AI Sales Coaching Platform',
    url: null,
    description: 'Sales training platform using Eleven Labs voice agents that simulate real customer interactions — covering objection handling, upselling, and closing skills.',
    tags: ['Bolt.new', 'Supabase', 'React', 'Eleven Labs', 'OpenAI'],
    impact: 'Replaced live coaching',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'emerald',
  },
  {
    name: 'RollsUp',
    subtitle: 'rollup.ai',
    url: 'https://rollup.ai',
    description: 'Backend platform for complex hardware development workflows, reducing system integration time by ~25% through microservices architecture.',
    tags: ['NestJS', 'PostgreSQL', 'Docker', 'TypeORM', 'OAuth'],
    impact: '~25% faster integration',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'amber',
  },
  {
    name: 'GreyHound Racing',
    subtitle: 'Blockchain Game',
    url: null,
    description: 'Real-time blockchain-based dog racing game with smart contract integration on Ethereum, handling concurrent users with under 2s average response time.',
    tags: ['Node.js', 'MongoDB', 'Redis', 'Web3.js', 'Ethereum'],
    impact: '<2s response time',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
    accent: 'rose',
  },
];

const accentStyles: Record<string, Record<string, string>> = {
  sky: {
    tag: 'bg-sky-500/15 border-sky-500/30 text-sky-300 group-hover:bg-sky-500/25 group-hover:border-sky-500/50',
    badge: 'bg-sky-500/20 border-sky-500/40 text-sky-300',
    dot: 'bg-sky-400',
  },
  emerald: {
    tag: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 group-hover:bg-emerald-500/25 group-hover:border-emerald-500/50',
    badge: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300',
    dot: 'bg-emerald-400',
  },
  amber: {
    tag: 'bg-amber-500/15 border-amber-500/30 text-amber-300 group-hover:bg-amber-500/25 group-hover:border-amber-500/50',
    badge: 'bg-amber-500/20 border-amber-500/40 text-amber-300',
    dot: 'bg-amber-400',
  },
  rose: {
    tag: 'bg-rose-500/15 border-rose-500/30 text-rose-300 group-hover:bg-rose-500/25 group-hover:border-rose-500/50',
    badge: 'bg-rose-500/20 border-rose-500/40 text-rose-300',
    dot: 'bg-rose-400',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-base">
            Real-world products with measurable outcomes, shipped from concept to production.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const styles = accentStyles[project.accent];
            return (
              <div
                key={project.name}
                className="group rounded-2xl overflow-hidden card-hover relative h-full animate-fade-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                {/* Background gradient container */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/8 group-hover:border-white/15 transition-all duration-500" />

                {/* Image container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1e]/80 group-hover:to-[#0a0f1e]/60 transition-all duration-500" />

                  {/* Impact badge */}
                  <div className={`absolute top-4 right-4 flex items-center gap-2 px-3.5 py-2 rounded-lg border text-xs font-bold backdrop-blur-sm ${styles.badge}`}>
                    <Zap size={13} className="flex-shrink-0" />
                    {project.impact}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-emerald-500/0 group-hover:from-sky-500/10 group-hover:to-emerald-500/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                </div>

                <div className="relative p-6 md:p-8">
                  {/* Title section */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white group-hover:gradient-text transition-all mb-1">
                        {project.name}
                      </h3>
                      <p className="text-slate-500 text-xs font-medium">{project.subtitle}</p>
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all flex-shrink-0"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-300 ${styles.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Icon watermark */}
                <Code2
                  size={100}
                  className="absolute -bottom-8 -right-8 text-sky-500/5 group-hover:text-sky-500/10 transition-colors duration-500 pointer-events-none"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
