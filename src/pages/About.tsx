import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { Users, Rocket, Trophy, Handshake } from 'lucide-react';
import calcuttaHacksImage from '@/assets/Image/CalCuttaHacks.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOC-Wr4_60z9IYM0ftBso6_uhi8_mNq7LWg&s',
  },
  {
    name: 'Devfolio',
    logo: 'https://avatars.githubusercontent.com/u/38809367?v=4',
  },
  {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg',
  },
  {
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png',
  },
  {
    name: 'Vercel',
    logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  },
  {
    name: 'Netlify',
    logo: 'https://www.netlify.com/v3/img/components/logomark.png',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
];

const Journey_Image = [
  {
    name: 'Community Foundation',
    image:
      'https://cdn.sanity.io/images/r9a0cpxc/production/5f839f1c85ca2cc051349d2dd74aa6221d6c60e6-1050x591.jpg',
  },

  {
    name: 'Community Growth',
    image:
      'https://img.freepik.com/premium-photo/colorful-equal-rights-symbols-concept_926199-2156006.jpg',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },

  {
    name: 'Calcutta Hacks',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGtdtibstB6p2O5DLSwm_nxYJfr1SEIVP8A&s',
  },
];



const stats = [
  { label: 'Community', value: '10K+', icon: Users },
  { label: 'Projects', value: '500+', icon: Rocket },
  { label: 'Hackathons', value: '25+', icon: Trophy },
  { label: 'Partners', value: '100+', icon: Handshake },
];

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  const rightPanelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panel = rightPanelRef.current;
    if (!panel) return;

    const cards = panel.querySelectorAll<HTMLElement>('.reveal-card');

    gsap.set(cards, { opacity: 0, y: 50, x: 100, filter: 'blur(20px)' });

    const triggers: ScrollTrigger[] = [];

    cards.forEach((card) => {
      const st = gsap.to(card, {
        opacity: 1,
        y: 0,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          // NO scroller — let it watch window scroll
          start: 'top 80%',
          end: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
      triggers.push(st.scrollTrigger!);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // ================= HERO =================
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from('.hero-sub', {
        y: 40,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: 'power3.out',
      });

      // ================= CARDS =================
      gsap.to('.Box', {
        scrollTrigger: {
          trigger: '.Box',
          start: 'top 85%',
          end: 'bottom 60%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // ================= JOURNEY TIMELINE =================

      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 70%',
          end: 'bottom 0%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          markers: true,
        },

        x: -60,
        stagger: 0.8,

        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
      });
    }, container);

    gsap.to('.Image_Top-Container', {
      scrollTrigger: {
        trigger: '.Image_Top-Container',
        start: 'top 20%',
        end: 'bottom 0%',
        scrub: true,
        // markers: true,
      },

      pin: true,

      y: (i) => (i % 2 === 0 ? -50 : 50),
      ease: 'none',
    });

    gsap.set('.Our_Partners', {
      opacity: 0,
      y: 40,
      filter: 'blur(10px)',
    });

    gsap.to('.Our_Partners', {
      scrollTrigger: {
        trigger: '.Our_Partners',
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
      opacity: 1,
      // backgroundColor: 'black',
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power3.out',
    });

    // Logos animation (main focus)
    gsap.to('.partner-logo', {
      scrollTrigger: {
        trigger: '.Our_Partners',
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
      opacity: 1,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      stagger: {
        each: 0.08,
        from: 'center', // 🔥 premium feel
      },
      ease: 'power3.out',
    });
    return () => ctx.revert();
  }, []);

  const leftPanelRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (leftPanelRef.current) {
      gsap.to(leftPanelRef.current, {
        scrollTrigger: {
          trigger: leftPanelRef.current,
          pin: true,
          start: 'top 15%',
          end: 'bottom bottom',
          scrub: true,
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div
      className="About sec pt-24 md:pt-32 pb-16 md:pb-20 px-6 bg-background overflow-hidden relative"
      ref={container}
    >
      {/* Dynamic Background Depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-[20%] w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-[180px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16 md:mb-24 mt-[5vh] flex items-center justify-center flex-col gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-12 relative">
              APEX <br /> <span className="text-slate-500">BUILDERS</span>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)',
                  backgroundSize: '250% 100%',
                  animation: 'glossySweep 3s ease-in-out infinite',
                }}
              />
            </h1>

            <p className="hero-sub text-slate-400 text-center text-lg md:text-2xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
              APEX CIRCLE IS A COLLECTIVE OF LEADERS, DEVELOPERS, DESIGNERS, AND OPERATORS WORKING
              TOGETHER ACROSS TECHNOLOGY, CREATIVITY, AND COMMUNITY TO BUILD, GROW, AND CREATE REAL
              IMPACT.
            </p>
          </motion.div>
        </header>

        {/* Redesigned Mission/Vision Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-24">
          {[
            {
              icon: Target,
              title: 'Mission',
              desc: 'Our mission is to empower individuals to build real-world solutions, learn new skills, and grow through a strong and supportive tech community.',
              color: 'text-[#FFD700]',
              glow: 'hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)]',
              border: 'border-yellow-500/20 hover:border-yellow-500/60',
            },
            {
              icon: Eye,
              title: 'Vision',
              desc: 'Our vision is to create a world where everyone has control over their own data and can use technology freely and safely.',
              color: 'text-[#38BDF8]',
              glow: 'hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]',
              border: 'border-cyan-500/20 hover:border-cyan-500/60',
            },
            {
              icon: Heart,
              title: 'Values',
              desc: 'Transparency, collaboration, and relentless pursuit of excellence.',
              color: 'text-[#A855F7]',
              glow: 'hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]',
              border: 'border-purple-500/20 hover:border-purple-500/60',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`Box relative bg-white/[0.03] backdrop-blur-3xl border ${item.border} p-10 md:p-14 overflow-hidden rounded-2xl transition-all duration-500 group flex flex-col items-center text-center hover:-translate-y-3 ${item.glow}`}
              style={{
                animation: 'badgeZoom 0.8s cubic-bezier(0.34,1.56,0.64,1) both',
                animationDelay: `${i * 0.2 + 0.2}s`,
              }}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <div
                className={`w-16 h-16 md:w-20 md:h-20 bg-white/8 flex items-center justify-center mb-8 rounded-full border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/15 ${item.color} group-hover:shadow-[0_0_20px_currentColor]`}
              >
                <item.icon size={36} />
              </div>
              <h3 className="text-3xl md:text-4xl font-brutal tracking-tight mb-6 uppercase text-white group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg md:text-xl font-medium transition-colors group-hover:text-slate-200">
                {item.desc}
              </p>

              {/* Subtle spotlight highlight */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.06),transparent_60%)]" />
            </div>
          ))}
        </div>

        <div className="flex gap-16 py-40  h-[370vh] min-h-screen relative">
          {/* LEFT */}
          <div ref={leftPanelRef} className="w-1/2 flex-shrink-0">
            <div className="flex flex-col justify-center rounded-2xl p-8 md:p-12">
              <h2 className="relative text-5xl md:text-8xl font-poppins font-black tracking-tight leading-[0.9] uppercase pb-4 inline-block mb-[4vh]">
                <span className="text-white">Our</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                  Journey
                </span>
              </h2>
              <div className="timeline space-y-10">
                {[
                  {
                    time: 'Start',
                    progress: '0%',
                    title: 'The Idea',
                    desc: 'Apex Circle began with a clear vision — to create a space where developers can learn, connect, and grow together. It started as a small initiative driven by passion and curiosity.',
                  },
                  {
                    time: 'Phase 1',
                    progress: '25%',
                    title: 'Building the Foundation',
                    desc: 'We formed our early community, shared knowledge, and created a supportive environment where developers could improve their skills step by step.',
                  },
                  {
                    time: 'Phase 2',
                    progress: '50%',
                    title: 'Rapid Growth',
                    desc: 'The community expanded quickly. More developers joined, collaborations increased, and real-world projects started taking shape.',
                  },
                  {
                    time: 'Phase 3',
                    progress: '75%',
                    title: 'Creating Impact',
                    desc: 'We focused on building meaningful projects, contributing to open-source, and helping members turn ideas into real outcomes and opportunities.',
                  },
                  {
                    time: 'Future',
                    progress: '100%',
                    title: 'Vision Ahead',
                    desc: 'Apex Circle is moving forward with a strong vision — to empower developers globally, build innovative solutions, and create a future-ready tech community.',
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="timeline-item group relative flex gap-6 md:gap-8 items-start"
                  >
                    {/* Vertical Line */}
                    <div className="absolute left-[-18px] top-0 h-full w-[2px] bg-white/10 group-hover:bg-primary transition-all duration-300" />

                    {/* Dot Indicator */}
                    <div className="absolute left-[-24px] top-2 w-3 h-3 rounded-full bg-white/20 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />

                    {/* Progress */}
                    <span className="text-primary/80 group-hover:text-primary font-mono text-sm md:text-base pt-1 tracking-wider transition-all duration-300">
                      {step.progress}
                    </span>

                    {/* Content */}
                    <div className="space-y-2">
                      <h4 className="text-xl md:text-2xl font-semibold tracking-tight uppercase text-white group-hover:text-primary transition-all duration-300">
                        {step.title}
                      </h4>

                      <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl group-hover:text-slate-300 transition-all duration-300">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div ref={rightPanelRef} className="w-1/2 flex flex-col gap-10 py-10">
            {Journey_Image.map((item, i) => (
              <div
                key={i}
                className={`
                  reveal-card relative flex-shrink-0
                  ${i % 2 === 0 ? 'h-[420px]' : 'h-[360px]'}
                  w-full rounded-3xl overflow-hidden
                  border border-white/10 bg-black/40
                  shadow-[0_20px_100px_rgba(0,0,0,0.7)]
                  transition-all duration-700 ease-out
                  group hover:scale-[1.02] hover:-translate-y-3 hover:border-primary/40
                `}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <section className="Our_Partners mt-[18vh] relative px-[4vw] py-24 md:py-32 flex flex-col items-center justify-center gap-16 overflow-hidden rounded-2xl ">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_70%)]" />

          {/* Heading */}
          <div className="text-center max-w-3xl">
            <h2 className="relative text-4xl sm:text-6xl md:text-8xl font-poppins font-black tracking-tight leading-[0.95] uppercase overflow-hidden inline-block">
              <span className="block text-white">Our</span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                Partners
              </span>

              {/* Glossy Sweep Effect */}
              <span className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,transparent_20%,rgba(255,255,255,0.25)_50%,transparent_80%)] bg-[length:200%_100%] animate-[glossySweep_3s_linear_infinite]" />
            </h2>

            <p className="mt-6 text-slate-400 text-sm md:text-base leading-relaxed">
              Trusted by innovative companies and industry leaders worldwide.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="w-full max-w-7xl mb-[4vh] px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="partner-logo  opacity-0 group relative flex items-center justify-center h-20 md:h-24 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:border-yellow-400/40 hover:shadow-[0_10px_40px_rgba(250,204,21,0.15)]"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(250,204,21,0.15),transparent_70%)]" />

                {/* Logo */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="relative h-10 md:h-12 object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="cta bg-primary text-black p-8 md:p-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mt-[7vh]">
          <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase leading-none text-center md:text-left">
            Ready to <br /> <span className="text-black/50">Contribute?</span>
          </h2>
          <button className="w-full md:w-auto bg-black text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4">
            Join the Protocol <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
    // <>
    //   <div className="w-full h-screen flex items-center justify-center text-6xl">Scroll Down</div>

    //   <div className="flex justify-center w-full h-[200vh] pt-40">

    //     <div className="w-1/2 text-5xl h-[85vh] flex-shrink-0 sticky top-40  z-10 flex items-center justify-center">
    //       <h1>Sticky Left</h1>
    //     </div>

    //     <div
    //       ref={rightPanelRef}
    //       className="w-1/2 h-full overflow-y-auto  flex flex-col juscify-center gap-10 pt-10 pb-10 px-10"
    //     >
    //       <div className="reveal-card w-full h-80 bg-red-200 rounded-md"></div>
    //       <div className="reveal-card w-full h-80 bg-red-200 rounded-md"></div>
    //       <div className="reveal-card w-full h-80 bg-red-200 rounded-md"></div>
    //       <div className="reveal-card w-full h-80 bg-red-200 rounded-md"></div>
    //     </div>
    //   </div>

    //   <div className="w-full h-screen flex items-center justify-center text-6xl">Scroll Up</div>
    // </>
  );
}
