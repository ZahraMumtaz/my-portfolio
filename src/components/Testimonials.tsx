import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'Founder & CEO, Proposaly',
    content: 'Zahra transformed our proposal workflow with an AI platform that cut drafting time by 60%. Her ability to balance user-centric design with backend performance was exceptional.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Director of Product, RetailIQ',
    content: 'Working with Zahra on our AI coaching platform was game-changing. She built a sophisticated voice agent system that actually replaced our expensive live coaching. The quality was unmatched.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO, RollsUp',
    content: 'Best backend engineer we hired. Her microservices architecture reduced integration time by 25% and the code is incredibly clean and maintainable. Highly recommend.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-base">
            See what clients say about working with me on their most critical projects.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl group-hover:border-sky-500/30 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white/[0.12] group-hover:to-white/[0.04]" />

              <div className="relative p-8 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow group-hover:text-white transition-colors">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20 group-hover:border-sky-500/50 transition-all"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats footer */}
        <div className="mt-20 grid grid-cols-3 gap-6 md:gap-10 max-w-2xl mx-auto">
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '4.9/5', label: 'Avg. Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center animate-fade-up">
              <div className="font-display text-3xl font-bold gradient-text">{stat.number}</div>
              <p className="text-slate-500 text-xs mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
