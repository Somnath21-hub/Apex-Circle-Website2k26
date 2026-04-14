import { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Zap,
  Users,
  Globe,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  Heart,
  Shield,
  Award,
} from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';

gsap.registerPlugin(ScrollTrigger);

// useGSAP(() => {}, []);

const paths = [
  {
    title: 'Member',
    desc: 'Join the core protocol and participate in community governance.',
    icon: Users,
  },
  {
    title: 'Volunteer',
    desc: 'Help organize operations and support community growth.',
    icon: Heart,
  },
  {
    title: 'Mentor',
    desc: 'Share your technical expertise with the next generation.',
    icon: Award,
  },
  { title: 'Sponsor', desc: 'Back the protocol and gain visibility in the ecosystem.', icon: Zap },
  { title: 'Partner', desc: 'Collaborate on large-scale infrastructure projects.', icon: Globe },
  { title: 'Ambassador', desc: 'Represent Apex Circle at your campus or local hub.', icon: Rocket },
];

export default function Community() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to('.Role-Card', {
        y: -50,
        opacity: 1,
        duration: 0.8,
      });

      gsap.to('.SideImage', {
        scrollTrigger: {
          trigger: '.SideImage',
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
        x: -30,
        transition: 'transform 0.8s ease-out',
        stagger: 0.8,
        opacity: 1,
        duration: 0.5,
      });

      gsap.to('.why-list', {
        scrollTrigger: {
          trigger: '.why-list',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: true,
        },
        x: 20,
        pin: true,
        stagger: 0.3,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      {/* Hero Section */}

      <header className="mb-16 sm:mb-20 md:mb-28 lg:mb-36 px-[15vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-6xl"
        >
          <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[9rem] font-poppins font-black tracking-tighter leading-[0.9] uppercase mb-6 sm:mb-10 relative">
            {/* LINE 1 */}
            <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              Our
            </span>

            {/* LINE 2 */}
            <span className="block text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]">
              Community
            </span>

            {/* LINE 3 */}
            <span className="block text-tertiary drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]">
              Apex Circle
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

          {/* DESCRIPTION */}
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed tracking-tight">
            Apex Circle is a growing community of developers who learn, build, and grow together.
            It’s a space where people connect, share ideas, collaborate on projects, and support
            each other in becoming better every day.
          </p>
        </motion.div>
      </header>

      {/* Paths Section */}
      <section className="mb-24 md:mb-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {paths.map((path, i) => (
              <div
                key={i}
                className="Role-Card opacity-0 transform-3d ease-in-out group p-8 md:p-6 border border-white/10 bg-[#060c37] hover:border-yellow-500 transition-all duration-500"
              >
                <path.icon
                  className="text-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform"
                  size={28}
                />

                <h3 className="text-3xl md:text-4xl font-brutal uppercase tracking-tighter mb-4">
                  {path.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                  {path.desc}
                </p>
                <Magnetic strength={0.3}>
                  <button className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    Apply Now <ArrowUpRight size={14} />
                  </button>
                </Magnetic>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-24 md:mb-48 py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="relative text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase overflow-hidden pb-4 inline-block my-[8vh]">
              <span className="text-white"> WHY</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                Join Apex Circle?
              </span>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)',
                  backgroundSize: '250% 100%',
                  animation: 'glossySweep 3s ease-in-out infinite',
                }}
              />
            </h2>

            <div className="space-y-6 md:space-y-3">
              {[
                'Learn and grow with a strong community',
                'Build real projects, not just practice',
                'Connect with developers and creators',
                'Join exciting hackathons and events',
                'Get opportunities for internships and jobs',
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="why-list group relative flex items-start gap-4 p-3 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/5"
                >
                  <span className="absolute left-0 top-0 h-full w-[2px] bg-primary scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>

                  <FaArrowRight
                    size={18}
                    className="text-primary shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110"
                  />

                  <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed tracking-wide">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="SideImage opacity-0 ml-[2.8vw] relative aspect-square overflow-hidden border border-white/10 mt-[8vh]">
            <img
              src="https://res.cloudinary.com/dszlrclik/image/upload/v1776154399/Screenshot_at_2026-04-14_13-42-44_ijsxxu.png"
              alt="Community"
              className="w-full h-full object-cover rounded-lg  shadow shadow-2xl shadow-amber-500/20 "
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="mb-24 md:mb-48 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Shield className="text-primary mx-auto mb-6 md:mb-8" size={32} />
          <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase mb-6 md:mb-8">
            Community <span className="text-slate-500">Guidelines</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 md:mb-12">
            We maintain a high-trust environment focused on radical transparency and mutual respect.
            All members are expected to adhere to our core protocol guidelines.
          </p>
          <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1">
            Read Full Guidelines
          </button>
        </div>
      </section>

      {/* Application Form Placeholder */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto border border-white/10 p-8 md:p-24 bg-white/[0.02]">
          <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase mb-8 md:mb-12 text-center">
            Operation <span className="text-primary">Enlistment</span>
          </h2>
          <form className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Path Selection
              </label>
              <select className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors appearance-none">
                <option className="bg-black">Member</option>
                <option className="bg-black">Volunteer</option>
                <option className="bg-black">Mentor</option>
                <option className="bg-black">Sponsor</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Why Apex Circle?
              </label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <Magnetic strength={0.3}>
              <button className="w-full bg-primary text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform">
                Submit Application
              </button>
            </Magnetic>
          </form>
        </div>
      </section>
    </div>
  );
}
