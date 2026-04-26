import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import EventCard from '@/components/cards/EventCard';
import FilterBar from '@/components/ui/FilterBar';
import eventsData from '@/data/events.json';
import {
  Search,
  Users,
  Globe,
  Calendar,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Filter,
  History,
  Star,
  Code,
  Wrench,
  Mic,
} from 'lucide-react';

const categories = ['All', 'Hackathon', 'Workshop', 'Meetup', 'Conference'];

const categoryData = [
  {
    key: 'All',
    label: 'All Events',
    short: 'Total',
    icon: Calendar,
    description: 'Explore all events across categories',
    color: 'red',
  },
  {
    key: 'Hackathon',
    label: 'Hackathons',
    short: 'Hackathon',
    icon: Code,
    description: 'Build, compete, and innovate in intense coding events',
    color: 'blue',
  },
  {
    key: 'Workshop',
    label: 'Workshops',
    short: 'Workshop',
    icon: Wrench,
    description: 'Hands-on sessions to learn real-world skills',
    color: 'yellow',
  },
  {
    key: 'Meetup',
    label: 'Meetups',
    short: 'Meetup',
    icon: Users,
    description: 'Connect and network with like-minded people',
    color: 'green',
  },
  {
    key: 'Conference',
    label: 'Conferences',
    short: 'Conference',
    icon: Mic,
    description: 'Large-scale events with speakers and insights',
    color: 'purple',
  },
];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesCategory = activeCategory === 'All' || event.type === activeCategory;
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Stats calculation
  const stats = useMemo(
    () => ({
      total: eventsData.length,
      upcoming: eventsData.filter((e) => e.status === 'Upcoming').length,
      participants: '12.5k+',
      reach: '45+ Cities',
    }),
    [],
  );

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: eventsData.length };
    eventsData.forEach((e) => {
      counts[e.type] = (counts[e.type] || 0) + 1;
    });
    return counts;
  }, []);

  const featuredEvent = eventsData.find((e) => e.status === 'Upcoming') || eventsData[0];

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6 relative overflow-hidden bg-[#00033d]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24">
          <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[9rem] font-poppins font-black tracking-tighter leading-[0.9] uppercase mb-6 sm:mb-10 relative">
            {/* LINE 1 */}
            <span className="inline text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              Apex{' '}
            </span>

            <span className="inline text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]">
              Circle
            </span>

            {/* LINE 3 */}
            <span className="block  text-tertiary drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]">
              Events
            </span>

            {/* Optional Tagline */}
            <span className="block text-base sm:text-lg md:text-xl font-medium text-gray-300 mt-4 tracking-wide normal-case w-1/2">
              Innovate • Build • Connect — At Apex Circle, we empower individuals to think beyond
              limits, turn ideas into real-world solutions, and grow through meaningful
              collaboration. Our events are designed to spark innovation, encourage hands-on
              building, and create strong connections among passionate creators, enabling
              participants to learn, share, and evolve together in a fast-paced tech-driven world.
            </span>
            {/* Gloss Effect */}
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)',
                backgroundSize: '200% 100%',
                animation: 'glossySweep 5s ease-in-out infinite',
              }}
            />
          </h1>

          {/* Search and Filter Bar */}
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 pb-12">
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                accentColor="primary"
              />
            </div>

            <div className="relative w-full md:w-80 group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 px-12 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all"
              />
            </div>
          </div>
        </header>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-48">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State Improvement */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 border border-dashed border-white/10 bg-white/[0.01] mb-24"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
              <Filter className="text-primary" size={32} />
            </div>
            <h3 className="text-3xl font-brutal uppercase tracking-tighter mb-4">
              No Events Found
            </h3>
            <p className="text-slate-500 text-lg max-w-md mx-auto font-medium">
              We couldn't find any events matching your criteria. Try another category or explore
              upcoming events.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-10 text-primary font-black uppercase tracking-widest text-[10px] hover:underline"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}

        {/* NEW SECTION: Featured / Upcoming Highlight */}
        {featuredEvent && (
          <section className="mb-24 md:mb-48">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="relative text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase pb-4 inline-block mb-[4vh]">
                <span className="text-white">Featured </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                  Spotlight
                </span>
              </h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-black border border-white/10 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 rounded-md">
                <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center bg-black/20">
                  <div className="flex items-center gap-3 text-primary font-mono text-xs mb-8 tracking-widest uppercase">
                    <Star size={14} fill="currentColor" /> Featured Operation
                  </div>
                  <h3 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase mb-8 leading-none group-hover:text-primary transition-colors">
                    {featuredEvent.title}
                  </h3>
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                    {featuredEvent.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-10 mb-12">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                        Date
                      </div>
                      <div className="text-xl font-brutal uppercase">{featuredEvent.date}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                        Location
                      </div>
                      <div className="text-xl font-brutal uppercase">{featuredEvent.location}</div>
                    </div>
                  </div>
                  <button className="w-fit bg-primary text-black px-12 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3">
                    Secure Access <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* NEW SECTION: Event Categories Overview */}
        <section className="mb-24 md:mb-48">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="relative text-5xl md:text-7xl font-poppins font-black tracking-tight leading-[0.9] uppercase pb-4 inline-block mb-[4vh]">
              <span className="text-white"> Event </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                Categories
              </span>
            </h2>

            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categoryData.map((cat, i) => (
              <motion.button
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat.key)}
                className={`group relative p-6 md:p-7 border rounded-2xl overflow-hidden backdrop-blur-xl text-left transition-all duration-500
      ${
        activeCategory === cat.key
          ? 'bg-red-500/10 border-red-500 shadow-[0_20px_40px_-15px_rgba(239,68,68,0.25)] scale-[1.03]'
          : 'bg-[#060b1e]/60 border-white/10 hover:border-red-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.2)]'
      }
    `}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Glow Line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit group-hover:border-red-500/40 group-hover:bg-red-500/10 transition-all duration-500">
                    {cat.icon && (
                      <cat.icon
                        size={20}
                        className="text-slate-300 group-hover:text-red-400 transition-all duration-500"
                      />
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-[10px] uppercase tracking-widest font-black text-slate-500 group-hover:text-red-400 transition">
                    {cat.short}
                  </div>

                  {/* Count */}
                  <div className="text-3xl md:text-4xl font-poppins font-bold tracking-tighter text-white group-hover:text-red-400 transition">
                    {categoryCounts[cat.key] || 0}
                  </div>

                  {/* Optional Description (adds depth) */}
                  <p className="text-xs text-slate-500 group-hover:text-slate-300 transition line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Event Details - What to Expect Section */}
        <section className="mb-24 md:mb-48 py-24 md:py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* LEFT COLUMN - Expectations List */}
            <div>
              <h2 className="relative text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase pb-4 inline-block mb-[4vh]">
                <span className="text-white"> What to </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                  Expect
                </span>
              </h2>

              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    title: 'Technical Outcomes',
                    desc: 'Gain deep insights into protocol architecture, deployment strategies, and cutting-edge development practices.',
                    icon: '⚡',
                    color: 'text-yellow-400',
                  },
                  {
                    title: 'Elite Networking',
                    desc: 'Connect with world-class engineers, community architects, and visionary builders shaping the future.',
                    icon: '🌐',
                    color: 'text-primary',
                  },
                  {
                    title: 'Advanced Skills',
                    desc: 'Master cutting-edge tools including ZK-proofs, L2 scaling, smart contracts, and decentralized systems.',
                    icon: '🔧',
                    color: 'text-secondary',
                  },
                  {
                    title: 'Real Impact',
                    desc: 'Build projects that solve real problems. Many solutions from our events go on to secure funding and deployment.',
                    icon: '🚀',
                    color: 'text-tertiary',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-6 md:p-8 border border-white/10 bg-black/60 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex items-start gap-5">
                      <span className={`text-3xl md:text-4xl ${item.color} drop-shadow-lg`}>
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="text-xl md:text-2xl font-brutal uppercase tracking-tighter mb-2 text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN - Visuals & Info */}
            <div className="space-y-8  flex items-end justify-center">
              {/* Event Highlights Image Grid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 "
              >
                <div className="space-y-3 mb-[12vh]">
                  <div className="aspect-square overflow-hidden rounded-lg border border-white/10 relative group">
                    <img
                      src="/src/assets/Image/hackathon.jpg"
                      alt="Hackathon in action"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 relative group">
                    <img
                      src="/src/assets/Image/workshops.jpg"
                      alt="Interactive workshop"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 relative group">
                    <img
                      src="/src/assets/Image/community.jpg"
                      alt="Community networking"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg border border-white/10 relative group">
                    <img
                      src="/src/assets/Image/CalCuttaHacks.jpg"
                      alt="Past event highlight"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Past Events Archive - Upgraded */}
        <section className="mb-24 md:mb-48">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16">
            <div className="flex items-center gap-4">
              <History className="text-primary" size={32} />
              <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">
                Past <span className="text-slate-500">Operations</span>
              </h2>
            </div>
            <button className="w-fit text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
              View Full Archives <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Genesis Hackathon',
                year: '2023',
                image: 'https://picsum.photos/seed/genesis/800/600',
              },
              {
                title: 'Protocol Summit',
                year: '2023',
                image: 'https://picsum.photos/seed/summit/800/600',
              },
              {
                title: 'ZK-Workshop',
                year: '2022',
                image: 'https://picsum.photos/seed/zk/800/600',
              },
              {
                title: 'Dev-Con Alpha',
                year: '2022',
                image: 'https://picsum.photos/seed/alpha/800/600',
              },
            ].map((archive, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-video bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
              >
                <img
                  src={archive.image}
                  alt={archive.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">
                    {archive.year}
                  </div>
                  <h4 className="text-xl font-brutal uppercase tracking-tighter mb-4">
                    {archive.title}
                  </h4>
                  <div className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors">
                    View Details
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
