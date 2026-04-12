import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react'; // Added motion for animations
import GalleryGrid from '@/components/sections/GalleryGrid';
import FilterBar from '@/components/ui/FilterBar';
import { Play, Film, Image as ImageIcon } from 'lucide-react'; // Added more icons
import type { GalleryItem } from '@/types';

interface PublicImage {
  filename: string;
  url: string;
  public_id: string;
  width: number;
  height: number;
}

const categories = ['All', 'Hackathons', 'Workshops', 'Meetups', 'Community', 'Awards'];

function formatTitle(filename: string) {
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [imagePool, setImagePool] = useState<PublicImage[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/images.json');
        if (!response.ok) {
          throw new Error('Failed to load images.json');
        }
        const data = (await response.json()) as PublicImage[];
        setImagePool(data);
      } catch {
        setImagePool([]);
      }
    };

    void loadImages();
  }, []);

  const galleryData = useMemo<GalleryItem[]>(() => {
    return imagePool.map((item: PublicImage, index: number) => ({
      id: String(index + 1),
      title: formatTitle(item.filename) || `Gallery Image ${index + 1}`,
      category: 'Community',
      image: item.url,
      date: 'Recent',
    }));
  }, [imagePool]);

  const filteredGallery = useMemo(() => {
    if (activeCategory === 'All') return galleryData;
    return galleryData.filter((item: GalleryItem) => item.category === activeCategory);
  }, [activeCategory, galleryData]);

  const videoHighlights = useMemo(() => {
    const durations = ['03:45', '02:12'];
    return imagePool.slice(0, 2).map((image: PublicImage, index: number) => ({
      title: formatTitle(image.filename) || `Highlight ${index + 1}`,
      duration: durations[index] ?? '02:30',
      thumb: image.url,
    }));
  }, [imagePool]);

  const behindTheScenes = useMemo(() => {
    const source = imagePool.length > 4 ? imagePool.slice(2, 6) : imagePool;
    return source.slice(0, 4);
  }, [imagePool]);

  return (
    <div className="pt-32 md:pt-56 pb-32 md:pb-56 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Enhanced typography and motion */}
        <header className="mb-16 sm:mb-20 md:mb-28 lg:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-6xl"
          >
            <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-[8rem] xl:text-[9rem] font-poppins font-black tracking-tighter leading-[0.9] uppercase mb-6 sm:mb-10 relative ">
              {/* 🔥 LINE 1 */}
              <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                EXPLORE
              </span>

              {/* 🔥 LINE 2 */}
              <span className="block text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.7)] relative">
                APEX
                {/* subtle glow line */}
              </span>

              {/* 🔥 LINE 3 */}
              <span className="block text-tertiary drop-shadow-[0_0_30px_rgba(56,189,248,0.7)]">
                GALLERY
              </span>

              {/* 🔥 GLOSS SWEEP EFFECT */}
              <span
                className="absolute inset-0 pointer-events-none rounded-r-md"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.2) 50%, transparent 80%)',
                  backgroundSize: '200% 100%',
                  animation: 'glossySweep 4s ease-in-out infinite',
                }}
              />
            </h1>

            {/* 🔥 DESCRIPTION */}
            <p className="text-slate-400 text-lg mb-[5vh] sm:text-base md:text-lg lg:text-xl max-w-2xl font-medium leading-relaxed tracking-tight ">
              A curated showcase of hackathons, events, and community moments — capturing the energy
              of builders shaping the Apex ecosystem.
            </p>
          </motion.div>

          {/* 🔥 FILTER BAR */}

          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            accentColor="tertiary"
          />
        </header>

        {/* Gallery Grid - Logic preserved, UI enhanced in component */}
        <GalleryGrid items={filteredGallery} />

        {/* Video Highlights - Upgraded with hover glow and animations */}
        <section className="mt-32 md:mt-64 mb-32 md:mb-64">
          <div className="text-center mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-mono text-sm mb-6 block tracking-[0.3em] uppercase opacity-80">
                // Motion_Archives
              </span>
              <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter uppercase leading-none">
                Video <br /> <span className="text-slate-500">Highlights</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {videoHighlights.map(
              (video: { title: string; duration: string; thumb: string }, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative aspect-video bg-black border border-white/10 overflow-hidden cursor-pointer shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-700"
                >
                  {/* Video Thumbnail with subtle dark overlay */}
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Play Button Animation */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100 scale-150" />
                      <div className="w-20 h-20 md:w-28 md:h-28 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 relative z-10">
                        <Play
                          className="text-primary fill-primary ml-1 group-hover:scale-110 transition-transform"
                          size={32}
                        />
                      </div>
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-ping opacity-0 group-hover:opacity-20" />
                    </div>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent z-30">
                    <h4 className="text-2xl md:text-4xl font-brutal uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors duration-500">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-3">
                      <Film size={14} className="text-primary" />
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>

          {videoHighlights.length === 0 && (
            <p className="text-center text-slate-500 mt-10">No highlight media available yet.</p>
          )}
        </section>

        {/* Behind the Scenes - Improved grid and interactions */}
        <section className="mb-32 md:mb-64 py-32 md:py-48 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
          {/* Decorative Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="text-center mb-20 md:mb-32 relative z-10">
            <span className="text-primary font-mono text-sm mb-6 block tracking-[0.3em] uppercase opacity-80">
              // Raw_Protocol
            </span>
            <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter uppercase leading-none">
              Behind the <br /> <span className="text-slate-500">Scenes</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {behindTheScenes.map((image: PublicImage, i: number) => (
              <motion.div
                key={image.public_id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ rotate: i % 2 === 0 ? 2 : -2, scale: 1.05 }}
                className="aspect-square bg-black border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden group shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              >
                <img
                  src={image.url}
                  alt={formatTitle(image.filename) || 'BTS'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </motion.div>
            ))}
          </div>

          {behindTheScenes.length === 0 && (
            <p className="text-center text-slate-500 mt-10">
              No behind-the-scenes media available yet.
            </p>
          )}
        </section>

        {/* Empty State - Enhanced UI */}
        {filteredGallery.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 border border-dashed border-white/10 bg-white/[0.01]"
          >
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
              <ImageIcon className="text-slate-500" size={32} />
            </div>
            <h3 className="text-3xl font-brutal uppercase tracking-tighter mb-4">
              No Archives Found
            </h3>
            <p className="text-slate-500 text-lg max-w-md mx-auto font-medium">
              The visual logs for <span className="text-primary">"{activeCategory}"</span> are
              currently encrypted or unavailable.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-10 px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
