import { memo, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import EventCard from '@/components/cards/EventCard';
import ProjectCard from '@/components/cards/ProjectCard';
import TeamCard from '@/components/cards/TeamCard';
import eventsData from '@/data/events.json';
import projectsData from '@/data/projects.json';
import teamDataRaw from '@/data/team.json';
import {
  Users,
  Zap,
  Globe,
  Rocket,
  ArrowUpRight,
  ChevronRight,
  Target,
  Eye,
  HelpCircle,
  CreditCard,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from '@/components/ui/Magnetic';
import CalCuttaHacks from '@/assets/Image/CalCuttaHacks.jpg';
import SoumodweepPhoto from '@/assets/team/soumodweep.png';
import YuvrajPhoto from '@/assets/team/yuvraj.jpeg';
import NailaPhoto from '@/assets/team/naila.jpeg';
import SomnathPhoto from '@/assets/team/somnath.png';
import AbhishekTestimonial from '@/assets/team/abhisek.png';
import RoshanTestimonial from '@/assets/team/roshan.png';
import SunitTestimonial from '@/assets/team/sunit.png';
import AnkitTestimonial from '@/assets/team/ankit.png';
import TeamCarousel from '@/components/sections/TeamCarousel';
import TestimonialCard from '@/components/cards/TestimonialCard';

import AboutImage from '@/assets/Image/About.jpg';
import HackathonImage from '@/assets/Image/hackathon.jpg';
import CommunityImage from '@/assets/Image/community.jpg';
import WorkshopsImage from '@/assets/Image/workshops.jpg';
import ImageCarousel from '@/components/ImageCarousel';

gsap.registerPlugin(ScrollTrigger);

const RoadmapInteractive = () => {
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.roadmap-header',
        { scale: 0.5, opacity: 1 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.5)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 90%' },
        },
      );
    },
    { scope: sectionRef },
  );

  const roadmapData = [
    {
      phase: '01',
      title: 'GENESIS',
      status: 'COMPLETED',
      desc: 'We built the base of Apex Circle, created the core system, and formed the first community.',
      x: 250,
      y: 230,
      align: 'right',
    },
    {
      phase: '02',
      title: 'EXPANSION',
      status: 'IN PROGRESS',
      desc: 'We are growing the community, connecting developers worldwide, and building real projects together.',
      x: 750,
      y: 430,
      align: 'left',
    },
    {
      phase: '03',
      title: 'INFRASTRUCTURE',
      status: 'UPCOMING',
      desc: 'We will create tools and systems that help developers build and launch projects easily.',
      x: 250,
      y: 630,
      align: 'right',
    },
    {
      phase: '04',
      title: 'SINGULARITY',
      status: 'FUTURE',
      desc: 'The system will run in a fully decentralized way where the community makes decisions.',
      x: 750,
      y: 830,
      align: 'left',
    },
  ];

  return (
    <section ref={sectionRef} className="py-6 md:py-16 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-header roadmap-header mb-8 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-black tracking-widest uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative">
            OUR{' '}
            <span className="text-[#facc15] drop-shadow-[0_0_25px_rgba(250,204,21,0.7)] animate-pulse">
              ROADMAP
            </span>
          </h2>
        </div>

        {/* Scaled Interactive Map Container */}
        <div
          className="w-full flex justify-center h-[400px] sm:h-[550px] md:h-[750px] lg:h-[900px] xl:h-[1000px] items-start relative z-20 
          -mb-[20px] sm:-mb-[40px] md:-mb-[70px] lg:-mb-[100px] xl:-mb-[120px]"
        >
          <div className="relative w-[1000px] h-[1000px] shrink-0 transform scale-[0.32] sm:scale-[0.55] md:scale-[0.75] lg:scale-90 xl:scale-100 origin-top font-poppins">
            {/* SVG Road Line */}
            <svg viewBox="0 0 1000 1000" className="absolute inset-0 pointer-events-none">
              <path
                d="M 250 230 C 500 230, 750 230, 750 430 C 500 430, 250 430, 250 630 C 500 630, 750 630, 750 830"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="24"
                strokeLinecap="round"
              />
              <path
                d="M 250 230 C 500 230, 750 230, 750 430 C 500 430, 250 430, 250 630 C 500 630, 750 630, 750 830"
                fill="none"
                stroke="#eab308"
                strokeWidth="4"
                strokeDasharray="15 20"
              />
            </svg>

            {/* The Agent / Moving Star */}
            <div
              className="absolute top-0 left-0 w-24 h-24 -ml-12 -mt-12 flex items-center justify-center transition-all duration-[1200ms] ease-in-out z-30 pointer-events-none drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]"
              style={{
                offsetPath:
                  'path("M 250 230 C 500 230, 750 230, 750 430 C 500 430, 250 430, 250 630 C 500 630, 750 630, 750 830")',
                offsetDistance: `${activePhase * 33.3333}%`,
              }}
            >
              <div className="relative w-full h-full animate-bounce">
                <Rocket
                  size={45}
                  className="absolute inset-0 m-auto text-yellow-400 rotate-45 transform "
                />
                <div className="absolute inset-4 border-4 border-dashed border-yellow-400/30 rounded-full animate-[spin_8s_linear_infinite] ease-in-out" />
              </div>
            </div>

            {/* Content Nodes */}
            {roadmapData.map((item, index) => {
              const isActive = activePhase === index;

              return (
                <div
                  key={index}
                  className="absolute z-20 cursor-pointer group"
                  style={{
                    left: item.x,
                    top: item.y,
                    transform: 'translate(-50%, -50%)', // ✅ IMPORTANT
                  }}
                  onClick={() => setActivePhase(index)} // ✅ mobile support
                  onMouseEnter={() => window.innerWidth > 768 && setActivePhase(index)}
                >
                  {/* 🔥 NODE DOT */}
                  <div
                    className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'bg-yellow-400 scale-125 shadow-[0_0_25px_rgba(234,179,8,0.6)]'
                        : 'bg-[#0a1233] border-2 border-white/20 group-hover:border-yellow-400/50'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${isActive ? 'bg-black' : 'bg-transparent'}`}
                    />
                  </div>

                  {/* 🔥 HITBOX (smaller + responsive) */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 h-[140px] w-[220px] sm:w-[260px] ${
                      item.align === 'left' ? 'right-0' : 'left-0'
                    }`}
                  />

                  {/* 🔥 CARD */}
                  <div
                    className={`absolute top-0 -translate-y-full mt-[-10px] w-[220px] sm:w-[260px] md:w-[300px] transition-all duration-500 pointer-events-none ${
                      item.align === 'left' ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
                    } ${
                      isActive
                        ? 'opacity-100 scale-100'
                        : 'opacity-40 scale-95 group-hover:opacity-70'
                    }`}
                  >
                    <div
                      className={`p-3 sm:p-4 md:p-5 border rounded-xl sm:rounded-2xl backdrop-blur-xl transition-all ${
                        isActive
                          ? 'bg-[#0a1233]/90 border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.2)]'
                          : 'bg-black/80 border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span
                          className={`text-lg sm:text-2xl md:text-3xl font-black ${
                            isActive ? 'text-yellow-400' : 'text-white/20'
                          }`}
                        >
                          {item.phase}
                        </span>

                        <div>
                          <h3 className="text-xs sm:text-sm md:text-lg font-black uppercase text-white leading-tight">
                            {item.title}
                          </h3>

                          <span
                            className={`text-[8px] sm:text-[10px] font-black px-2 py-[2px] border uppercase tracking-widest ${
                              item.status === 'IN PROGRESS'
                                ? 'bg-yellow-400 text-black border-yellow-400'
                                : 'border-white/20 text-slate-400'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <p
                        className={`text-[10px] sm:text-xs md:text-sm leading-relaxed ${
                          isActive ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const teamData = useMemo(() => teamDataRaw, []);

  const testimonials = [
    {
      name: 'Purnangshu Roy',
      role: 'Sr. Business Analyst',
      text: 'Apex Circle has been an incredible platform for networking and technical growth. The synergy between developers and analysts here is truly unique.',
      image:
        'https://res.cloudinary.com/dz3cfmi5k/image/upload/q_auto/f_auto/v1775709350/picture_193_of_317_1_kop9cd.jpg',
      company: 'CSAR BOX',
    },
    {
      name: 'Abhishek Mahto',
      role: 'Founder & CEO',
      text: 'Apex Circle provided the infrastructure and community I needed to deploy my first L2 solution. The intensity is unmatched.',
      image: AbhishekTestimonial,
      linkedin: 'https://www.linkedin.com/in/abhishek-mahto-nomoex/',
      website: 'https://nomoex.com',
      company: 'Nomoex & MBT Ventures',
    },
    {
      name: 'Roshan Burnawal',
      role: 'Founder & CEO',
      text: "The hackathons are legendary. I've never learned so much in 48 hours. The mentors are world-class architects.",
      image: RoshanTestimonial,
      linkedin: 'https://www.linkedin.com/in/roshan-burnawal/',
      website: 'https://thedrop.finance', // Assuming popular/placeholder if not provided
      company: 'The Drop Organization',
    },
    {
      name: 'Sunit Chaudhari',
      role: 'Advisory Board Member',
      text: "Joining the Circle was the best decision for my career. It's a collective of the brightest minds in the space.",
      image: SunitTestimonial,
      linkedin: 'https://www.linkedin.com/in/sunitchaudhari/',
      website: 'https://pcsglobal.in',
      company: 'PCS Global Pvt Ltd',
    },
    {
      name: 'Ankit Kumar Verma',
      role: 'Lead',
      text: 'Apex Circle is doing a phenomenal job in bringing together passionate minds and creating a space for meaningful tech conversations. Sessions like Tech Treks are not just events—they are stepping stones for the future of innovation. Keep up the great work!',
      image: AnkitTestimonial,
      linkedin: 'https://linkedin.com/in/ankitkumarverma',
      website: 'https://gdg.community.dev/gdg-prayagraj/',
      company: 'GDG Prayagraj',
    },
    {
      name: 'Amit Barnawal',
      role: 'Commercial Manager',
      text: 'Our partnership with Apex Circle has been transformative. The technical expertise and community support provided here have been invaluable for our group growth.',
      image:
        'https://res.cloudinary.com/dz3cfmi5k/image/upload/c_fill,g_face,w_600,h_375,q_auto,f_auto/v1775635854/amit_wgfn1e.jpg',
      linkedin: 'https://linkedin.com/in/amitbarnawal',
      website: 'https://thedrop.finance',
      company: 'The Drop Organization',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Stats Animation
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Hero />

      {/* About & Mission Section */}
      <section className="py-10 md:py-14 px-6 mt-[7vh] mb-[4vh]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h2 className="relative text-4xl sm:text-5xl md:text-7xl font-poppins font-bold tracking-[0.1em] md:tracking-[0.15em] leading-tight md:leading-none uppercase mb-6 flex flex-wrap gap-x-4 md:gap-x-6">
              {['APEX', 'CIRCLE'].map((word, wordIdx) => (
                <span key={wordIdx} className="inline-flex">
                  {word.split('').map((char, charIdx) => {
                    const delay = (wordIdx * 4 + charIdx) * 0.15;
                    return (
                      <span
                        key={charIdx}
                        className={wordIdx === 1 ? 'text-slate-500' : 'text-white'}
                        style={{
                          animation: 'writing-char 4s infinite',
                          animationDelay: `${delay}s`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              ))}

              {/* Highlight Sweep */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)',
                  backgroundSize: '250% 100%',
                  animation: 'glossySweep 4s ease-in-out infinite',
                }}
              />
            </h2>
            <div className="flex items-start gap-4 mb-10 ">
              <div className="mt-1 shadow-[0_0_15px_rgba(79,142,247,0.5)] bg-primary/20 p-1 rounded-full">
                <ChevronRight className="text-primary animate-pulse" size={20} />
              </div>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                Apex Circle unites builders, developers, and innovators to create real-world
                solutions through hackathons, workshops, and collaborative projects.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* Mission HUD Box */}
              <div className="relative group p-8 border border-white/5 bg-[#0a1233]/40 backdrop-blur-2xl overflow-hidden rounded-xl transition-all duration-500 hover:bg-[#0a1233]/60 hover:border-primary/30 shadow-2xl">
                {/* Corner Braces */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />

                {/* Scanning Beam */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:animate-[scan-line_3s_linear_infinite]" />

                {/* Orbiting Bearings */}
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full blur-[1px] shadow-[0_0_12px_var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      animation: `orbit-bearing 4s linear infinite`,
                      animationDelay: `${i * -1}s`,
                    }}
                  />
                ))}

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h3 className="text-3xl font-montserrat font-black uppercase tracking-tighter transition-all duration-500">
                    <span className="border-b-4 border-yellow-400 shadow-[0_4px_10px_rgba(250,204,21,0.3)] pr-4">
                      Mission
                    </span>
                  </h3>
                </div>
                <p className="text-slate-400 text-base leading-relaxed font-medium group-hover:text-slate-100 transition-colors relative z-10">
                  Our mission is to empower individuals to build real-world solutions, learn new
                  skills, and grow through a strong and supportive tech community.
                </p>

                {/* Inner mechanical glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Vision HUD Box */}
              <div className="relative group p-8 border border-white/5 bg-[#0a1233]/40 backdrop-blur-2xl overflow-hidden rounded-xl transition-all duration-500 hover:bg-[#0a1233]/60 hover:border-primary/30 shadow-2xl">
                {/* Corner Braces */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />

                {/* Scanning Beam */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:animate-[scan-line_3s_linear_infinite]" />

                {/* Orbiting Bearings */}
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full blur-[1px] shadow-[0_0_12px_var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      animation: `orbit-bearing 4s linear infinite`,
                      animationDelay: `${i * -1}s`,
                    }}
                  />
                ))}

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <h3 className="text-3xl font-montserrat font-black uppercase tracking-tighter transition-all duration-500">
                    <span className="border-b-4 border-yellow-400 shadow-[0_4px_10px_rgba(250,204,21,0.3)] pr-4">
                      Vision
                    </span>
                  </h3>
                </div>
                <p className="text-slate-400 text-base leading-relaxed font-medium group-hover:text-slate-100 transition-colors relative z-10">
                  Our vision is to create a world where everyone has control over their own data and
                  can use technology freely and safely.
                </p>

                {/* Inner mechanical glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-black/10 p-4">
            <ImageCarousel
              images={[
                'https://res.cloudinary.com/dz3cfmi5k/image/upload/q_auto/f_auto/v1775847468/DSC_0198_bynjo3.jpg',
                'https://res.cloudinary.com/dz3cfmi5k/image/upload/q_auto/f_auto/v1775847469/DSC_0199_1_etjmoi.jpg',
                'https://res.cloudinary.com/dz3cfmi5k/image/upload/q_auto/f_auto/v1775847469/DSC_0169_1_vsp52b.jpg',
                'https://res.cloudinary.com/dz3cfmi5k/image/upload/q_auto/f_auto/v1775847535/picture_316_of_317_fxghvf.jpg',
                'https://res.cloudinary.com/dz3cfmi5k/image/upload/q_auto/f_auto/v1775847533/picture_216_of_317_pqga3h.jpg',
                'https://res.cloudinary.com/dz3cfmi5k/image/upload/q_auto/f_auto/v1775847539/picture_257_of_317_acawqz.jpg',
              ]}
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-10 md:py-16 px-6 bg-white/2 border-y border-white/5 relative overflow-hidden">
        {/* Background elements for depth */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-header mb-12 md:mb-16">
            <h2 className="relative text-4xl sm:text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase overflow-hidden pb-4 inline-block">
              <span className="text-white">What We </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                Do?
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: 'Hackathons',
                desc: 'High-intensity build sessions to deploy next-gen protocols.',
                icon: Rocket,
                image: HackathonImage,
              },
              {
                title: 'Workshops',
                desc: 'Technical deep-dives into advanced decentralized systems.',
                icon: Zap,
                image: WorkshopsImage,
              },
              {
                title: 'Community',
                desc: 'A global network of architects and visionaries.',
                icon: Users,
                image: CommunityImage,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-10 border border-white/10 bg-[#060b1e]/60 backdrop-blur-xl overflow-hidden rounded-2xl hover:border-red-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.2)]"
              >
                {/* Background Image if available */}
                {item.image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060b1e]/40 via-[#060b1e]/80 to-[#060b1e] group-hover:from-red-900/30 transition-colors duration-500" />
                  </div>
                )}

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl-2xl group-hover:border-red-500 transition-colors duration-500 opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-2xl group-hover:border-red-500 transition-colors duration-500 opacity-0 group-hover:opacity-100" />

                {/* Top glow line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-4 bg-white/5 rounded-xl w-fit mb-8 group-hover:bg-red-500/10 transition-colors duration-500 border border-white/5 group-hover:border-red-500/30 shadow-lg">
                    <item.icon
                      className="text-primary group-hover:text-red-500 group-hover:scale-110 transition-all duration-500"
                      size={28}
                    />
                  </div>

                  <h3 className="text-3xl font-poppins font-bold tracking-tight mb-4 text-white transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 font-poppins text-base leading-relaxed mb-10 group-hover:text-slate-300 transition-colors duration-500 flex-grow">
                    {item.desc}
                  </p>

                  <div className="mt-auto">
                    <Magnetic strength={0.3}>
                      <button className="text-[11px] font-poppins font-bold uppercase tracking-[0.2em] text-slate-300 group-hover:text-red-400 transition-all duration-300 flex items-center gap-2">
                        Explore
                        <ArrowUpRight
                          size={16}
                          className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                        />
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-6 border-y border-white/5 bg-[#060b1e] relative overflow-hidden">
        <style>
          {`
            @keyframes fire-in-text {
              0% {
                background-position: 50% 100%;
                filter: brightness(1);
              }
              25% {
                background-position: 50% 120%;
                filter: brightness(1.3);
              }
              50% {
                background-position: 50% 90%;
                filter: brightness(1.1);
              }
              75% {
                background-position: 50% 140%;
                filter: brightness(1.4);
              }
              100% {
                background-position: 50% 100%;
                filter: brightness(1);
              }
            }
          `}
        </style>
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 p-8 md:p-12 border border-white/5 bg-black/40 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(249,115,22,0.1)]">
          <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { label: 'Active Nodes', value: '4k+', icon: Globe, color: 'text-yellow-400' },
              { label: 'Event Hosted', value: '15+', icon: Zap, color: 'text-orange-400' },
              { label: 'PartnerShips', value: '50+', icon: Users, color: 'text-red-400' },
              { label: 'Deployments', value: '1k+', icon: Rocket, color: 'text-yellow-500' },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-item group border-l-2 border-orange-500/20 pl-6 hover:border-yellow-400 transition-colors duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <stat.icon className={stat.color} size={16} />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-200/50 group-hover:text-yellow-300 transition-colors duration-500">
                    {stat.label}
                  </span>
                </div>
                <div
                  className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-poppins font-black tracking-tighter leading-none group-hover:scale-110 transition-transform duration-500 origin-left text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, #9a3412 0%, #ea580c 40%, #f97316 65%, #fde047 85%, #fff 100%)',
                    backgroundSize: '100% 200%',
                    animation: `fire-in-text ${2 + i * 0.4}s infinite ease-in-out`,
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Marquee (Caution Tape Design) */}
      <div className="w-full relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <div className="w-[120%] bg-blue-800 relative overflow-hidden border-y border-black  scale-[1.05] shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-20">
            {/* Top Stripes Border */}
            <div className="h-1 md:h-1.5 w-full caution-stripes border-b border-black/5" />

            <div className="py-1 md:py-1.5 overflow-hidden flex items-center relative">
              <div className="flex gap-8 items-center whitespace-nowrap animate-marquee-slow">
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className="text-white  text-base md:text-xl font-poppins font-black uppercase tracking-tighter flex items-center gap-8 select-none"
                  >
                    BUILD IN PUBLIC
                    <Zap size={14} className="fill-black text-white" />
                    LEARN IN COMMUNITY
                    <Zap size={14} className="fill-black text-white" />
                    SHIP FAST
                    <Zap size={14} className="fill-black text-white" />
                    SCALE TOGETHER
                    <Zap size={14} className="fill-black text-white" />
                    APEX CIRCLE
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Bottom Stripes Border */}
            <div className="h-1 md:h-1.5 w-full caution-stripes border-t border-black/5" />
          </div>
        </div>
      </div>

      {/* Interactive Roadmap Section */}
      <RoadmapInteractive />

      {/* Events Section */}
      <section className="py-10 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-header flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-black tracking-widest uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative">
                OUR{' '}
                <span className="text-yellow-400 drop-shadow-[0_0_25px_rgba(234,179,8,0.7)] animate-pulse">
                  EVENTS
                </span>
              </h2>
            </div>
            <Link
              to="/events"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest"
            >
              View All Events{' '}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventsData.slice(0, 3).map((event) => {
              const eventObj = {
                ...event,
                type: event.type as import('@/types').EventType,
                status: event.status as import('@/types').EventStatus,
              };
              return (
                <div key={event.id} className="h-full">
                  <EventCard event={eventObj} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-6 md:py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-header text-center mb-10 px-4">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-poppins font-black tracking-tighter leading-none uppercase relative inline-block">
              <span className="relative z-10 text-white animate-text-glow-white">OUR </span>
              <span
                className="relative z-10 animate-text-glow-gold"
                style={{ WebkitTextStroke: '1px rgba(255, 215, 0, 0.5)', color: '#FFD700' }}
              >
                CREW
              </span>

              {/* Decorative Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[130%] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />
            </h2>
          </div>

          <div className="relative mt-0 md:mt-0">
            <TeamCarousel members={teamData} />
          </div>

          <div className="my-[5vh] text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-primary transition-colors"
            >
              Meet the Full Council
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-14 px-6 bg-black/50 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-header mb-12 md:mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-poppins font-black tracking-tighter uppercase leading-[0.8]">
              <span className="text-white animate-text-glow-white">Voices of </span>
              <span
                className="animate-text-glow-gold px-2"
                style={{ WebkitTextStroke: '1px rgba(255, 215, 0, 0.4)', color: '#facc15' }}
              >
                Apex Circle
              </span>
            </h2>
          </div>
        </div>

        {/* Testimonials 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 bg-surface border-y border-white/10 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="section-header mb-16 text-center">
            <h2 className="text-6xl md:text-8xl font-poppins font-black tracking-tighter uppercase leading-[0.8] mb-4">
              <span className="text-[#facc15] drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                Protocol{' '}
              </span>
              <span className="text-white">FAQ</span>
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="space-y-6"
          >
            {[
              {
                q: 'How do I join the protocol?',
                a: 'You can apply through our Community page. We review applications based on technical expertise and alignment with our core values.',
                icon: HelpCircle,
              },
              {
                q: 'Are hackathons remote or in-person?',
                a: 'Most of our hackathons are hybrid, with physical hubs in major tech centers and a robust virtual infrastructure for remote participants.',
                icon: Globe,
              },
              {
                q: 'What is the membership fee?',
                a: 'Apex Circle is a merit-based collective. There are no fees for individual members who contribute to the protocol.',
                icon: CreditCard,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-primary/40 hover:bg-white/[0.07] transition-all group font-poppins"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center justify-between text-white group-hover:text-primary transition-colors">
                      {item.q}
                      <ArrowUpRight
                        className="text-slate-700 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        size={20}
                      />
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-medium">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
