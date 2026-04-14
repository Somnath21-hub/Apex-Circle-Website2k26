import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hexagon, Zap, Send } from 'lucide-react';
import { IoIosGitNetwork } from 'react-icons/io';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

gsap.registerPlugin();

const navLinks = [
  { name: 'Home', path: '/' },

  // 👇 Discovery & Trust
  { name: 'About', path: '/about' },
  { name: 'Community', path: '/community' },

  // 👇 Engagement
  { name: 'Events', path: '/events' },

  // 👇 Proof / Work
  { name: 'Gallery', path: '/gallery' },

  // 👇 People (last)
  { name: 'Team', path: '/team' },
];

import apexLogo from '@/assets/Image/logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.Mobile-menu',
        { height: 0, opacity: 0, duration: 0.5, ease: 'power2.in' },
        { height: '105vh', opacity: 1, duration: 0.5, ease: 'power2.out' },
      );
    }

    return () => {
      gsap.fromTo(
        '.Mobile-menu',
        { height: '105vh', opacity: 1, duration: 0.5, ease: 'power2.out' },
        { opacity: 0, duration: 0.5, height: 0, ease: 'power2.in' },
      );
    };
  }, [isOpen]);


  let lastScroll = 0;
  const header = document.querySelector("nav");
  let isAnimating = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 10 && !isAnimating) {
      // Scroll Down - Hide
      isAnimating = true;
      gsap.to(header, {
        y: "-100%",
        willChange: "transform",
        onComplete: () => {
          isAnimating = false;
        }
      });
    } else if (currentScroll < lastScroll && !isAnimating) {
      // Scroll Up - Show
      isAnimating = true;
      gsap.to(header, {
        y: "0%",
        willChange: "transform",
        onComplete: () => {
          isAnimating = false;
        }
      });
    }

    lastScroll = currentScroll;
  });

  return (
    <nav
      className={cn(
        'fixed top-0 w-full  transition-all duration-500 md:py-8 z-9999 ',
        scrolled ? 'py-2 sm:py-4' : 'py-4 sm:py-8',
      )}
    >
      <div
        className={cn(
          'max-w-[98%] mx-auto flex items-center justify-between transition-all  duration-700 px-4 sm:px-5 py-3 md:py-5 rounded-2xl relative overflow-hidden z-9999',
           'bg-black/60 backdrop-blur-3xl border border-white/[0.15] shadow-[0_0_30px_rgba(79,142,247,0.2)] before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary/70 before:to-transparent'
           
        )}
      >
        <div
          className="absolute  inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_70%)] opacity-0 transition-opacity duration-700"
          style={{ opacity: scrolled ? 1 : 0 }}
        />

        <Link to="/" className="flex items-center gap-1.5 sm:gap-3 group shrink-0 relative z-10">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            {/* Thick Glossy Rotating Border - Yellow Highlight */}
            <div className="absolute inset-0 rounded-full p-[4.5px] animate-[spin-slow_4s_linear_infinite] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_20px_rgba(255,215,0,0.4)]" />
            <div className="absolute inset-[4.5px] bg-black rounded-full" />

            <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden border border-white/10 z-10 scale-[0.85]">
              <img
                src={apexLogo}
                alt="Apex Circle"
                className="w-full h-full object-contain scale-125"
              />
              {/* Internal Glossy Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>
          </div>
          <span className="text-[20px] md:text-[22px] lg:text-[26px] uppercase tracking-[0.3em] hidden sm:flex text-white font-poppins font-black hover:animate-[gentle-shake_0.2s_ease-in-out_infinite]">
            {'APEX CIRCLE'.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(79,142,247,0.8)]"
                style={{
                  animation: `writing-char 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  minWidth: char === ' ' ? '0.4em' : 'auto',
                }}
              >
                {char}
              </span>
            ))}
          </span>
          <span className="text-[14px] uppercase tracking-wider sm:hidden flex text-white font-poppins font-black">
            {'APEX CIRCLE'.split('').map((char, i) => (char === ' ' ? '\u00A0' : char))}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'relative text-[12px] xl:text-[14px] font-poppins font-black uppercase tracking-[0.2em] transition-all hover:text-white whitespace-nowrap group py-3',
                location.pathname === link.path
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(79,142,247,0.5)]'
                  : 'text-slate-300',
              )}
            >
              <span className="relative z-10">{link.name}</span>
              <span
                className={cn(
                  'absolute -bottom-0 left-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 -translate-x-1/2',
                  location.pathname === link.path
                    ? 'bg-primary shadow-[0_0_12px_rgba(0,255,0,0.9)] opacity-100 bottom-1'
                    : 'bg-white opacity-0 group-hover:opacity-100 bottom-3 group-hover:bottom-1',
                )}
              />
            </Link>
          ))}
          <div className="w-px h-6 bg-white/10 mx-2 xl:mx-4" />
          <Link
            to="/contact"
            className="flex items-center gap-2 text-[14px] xl:text-[16px] font-poppins font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-all whitespace-nowrap group bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(79,142,247,0.3)]"
          >
            <span>Connect</span>

            <IoIosGitNetwork
              size={14}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="relative flex items-center gap-4 lg:hidden  z-999">
          <Link
            to="/contact"
            className="text-[10px] sm:text-[12px] font-poppins font-black uppercase tracking-widest text-primary border border-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(79,142,247,0.2)]"
          >
            Join
          </Link>
          <button
            className="text-white p-2 hover:bg-white/5 rounded-full transition-colors "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="Mobile-menu relative  w-full z-40 bg-black/60 backdrop-blur-3xl lg:hidden flex flex-col h-[105vh] -mt-23 inset-x-0 over-flow-hidden"
          >
            {/* 🔥 NAV LINKS */}
            <div className=" flex flex-col items-center  px-6 py-10 gap-6 flex-1 mt-28 overflow-y-auto scroll-smooth">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, ease: 'easeOut' }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center justify-between text-[22px] sm:text-[26px] font-semibold tracking-wide transition-all group',
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-gray-400 hover:text-white',
                    )}
                  >
                    {link.name}

                    {/* 👉 Arrow Animation */}
                    <span className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
                      →
                    </span>
                  </Link>

                  {/* Divider */}
                  <div className="mt-3 h-[1px] bg-white/5" />
                </motion.div>
              ))}
            </div>

            {/* 🔥 CTA SECTION */}
            <div className="px-6 pb-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-primary to-blue-500 text-black font-bold py-4 rounded-xl tracking-widest shadow-[0_0_25px_rgba(79,142,247,0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all"
                >
                  JOIN APEX CIRCLE
                </Link>
              </motion.div>
            </div>

            {/* 🔥 FOOTER */}
            <div className="px-6 py-4 border-t border-white/10 flex justify-between items-center text-xs text-gray-500 mb-12">
              <span>© 2026 APEX</span>

              <div className="flex gap-4">
                {['TW', 'GH', 'LI'].map((s) => (
                  <span key={s} className="hover:text-primary cursor-pointer transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
