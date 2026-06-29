'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  // Wrapper class — shadow + clipping, no lift
  const imageHoverClass = "shadow-md cursor-pointer overflow-hidden"
  // Image class — subtle zoom on hover, matching the rest of the site
  const imageZoomClass = "object-cover transition-transform duration-500 hover:scale-105"

  return (
    <section
      id="gallery"
      ref={ref}
      className="w-full bg-[#F7F4F0] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              A Look Around
            </span>
          </motion.div>

          {/* ── MOBILE LAYOUT (md:hidden) ── */}
          <div className="md:hidden flex flex-col gap-4">
            {/* Outdoor Section Mobile */}
            <div className="flex flex-col gap-2">
              {/* Outdoors 1 & 2 side by side */}
              <div className="grid grid-cols-2 gap-2">
                <div className={`relative overflow-hidden rounded-none aspect-square ${imageHoverClass}`}>
                  <Image
                    src="/Website Assets/Gallery Outdoors 1.jpg"
                    alt="Outdoor house exterior"
                    fill
                    className={imageZoomClass}
                  />
                </div>
                <div className={`relative overflow-hidden rounded-none aspect-square ${imageHoverClass}`}>
                  <Image
                    src="/Website Assets/Gallery Outdoors 2.jpg"
                    alt="Outdoor sunset sky"
                    fill
                    className={imageZoomClass}
                  />
                </div>
              </div>
              {/* Beige card — full width */}
              <div
                className="flex flex-col items-center justify-center text-center px-6 py-5 shadow-sm"
                style={{ backgroundColor: '#BFA98A', minHeight: '90px' }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2C2416] mb-1">
                  Outdoor Living
                </p>
                <p className="text-xs italic text-[#2C2416]/80" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Breathtaking views and peaceful surroundings.
                </p>
              </div>
              {/* Outdoors 3 — full width */}
              <div className={`relative overflow-hidden rounded-none w-full h-[200px] ${imageHoverClass}`}>
                <Image
                  src="/Website Assets/Gallery Outdoors 3.jpg"
                  alt="Panoramic outdoor landscape"
                  fill
                  className={imageZoomClass}
                />
              </div>
            </div>

            <div className="h-4" />

            {/* Indoor Section Mobile */}
            <div className="flex flex-col gap-2">
              {/* Beige card — full width */}
              <div
                className="flex flex-col items-center justify-center text-center px-6 py-5 shadow-sm"
                style={{ backgroundColor: '#BFA98A', minHeight: '90px' }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2C2416] mb-1">
                  Indoor Comfort
                </p>
                <p className="text-xs italic text-[#2C2416]/80" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Thoughtfully designed spaces that feel like home.
                </p>
              </div>
              {/* Indoors 1 & 2 side by side */}
              <div className="grid grid-cols-2 gap-2">
                <div className={`relative overflow-hidden rounded-none aspect-square ${imageHoverClass}`}>
                  <Image
                    src="/Website Assets/Gallery Indoors 1.jpg"
                    alt="Indoor living room"
                    fill
                    className={imageZoomClass}
                  />
                </div>
                <div className={`relative overflow-hidden rounded-none aspect-square ${imageHoverClass}`}>
                  <Image
                    src="/Website Assets/Gallery Indoors 2.jpeg"
                    alt="Indoor living area"
                    fill
                    className={imageZoomClass}
                  />
                </div>
              </div>
              {/* Indoors 3 — full width */}
              <div className={`relative overflow-hidden rounded-none w-full h-[200px] ${imageHoverClass}`}>
                <Image
                  src="/Website Assets/Gallery Indoors 3.jpeg"
                  alt="Indoor hallway"
                  fill
                  className={imageZoomClass}
                />
              </div>
              {/* Indoors 4 & 5 side by side */}
              <div className="grid grid-cols-2 gap-2">
                <div className={`relative overflow-hidden rounded-none aspect-square ${imageHoverClass}`}>
                  <Image
                    src="/Website Assets/Gallery Indoors 4.jpeg"
                    alt="Indoor kitchen"
                    fill
                    className={imageZoomClass}
                  />
                </div>
                <div className={`relative overflow-hidden rounded-none aspect-square ${imageHoverClass}`}>
                  <Image
                    src="/Website Assets/Gallery Indoors 5.jpeg"
                    alt="Indoor bedroom"
                    fill
                    className={imageZoomClass}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT (hidden md:block) ── */}
          <div className="hidden md:flex flex-col gap-8">
            {/* Outdoor Section Desktop */}
            <motion.div variants={itemVariants} className="w-full">
              {/* Row 1: Outdoors 1 (left) + right column (Outdoors 2 + beige card) */}
              <div className="flex gap-1 mb-1">
                {/* Gallery Outdoors 1 — large left */}
                <div
                  className={`relative overflow-hidden rounded-none ${imageHoverClass}`}
                  style={{ width: '52%', aspectRatio: '4/3' }}
                >
                  <Image
                    src="/Website Assets/Gallery Outdoors 1.jpg"
                    alt="Outdoor house exterior"
                    fill
                    className={imageZoomClass}
                  />
                </div>

                {/* Right side: Outdoors 2 on top + beige text card below */}
                <div className="flex flex-col flex-1 gap-1">
                  <div className={`relative overflow-hidden rounded-none flex-1 ${imageHoverClass}`}>
                    <Image
                      src="/Website Assets/Gallery Outdoors 2.jpg"
                      alt="Outdoor sunset sky"
                      fill
                      className={imageZoomClass}
                    />
                  </div>
                  {/* Beige card — exact Figma color */}
                  <div
                    className="flex flex-col items-center justify-center text-center px-6 py-5 shadow-sm"
                    style={{ backgroundColor: '#BFA98A', minHeight: '100px' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2C2416] mb-1">
                      Outdoor Living
                    </p>
                    <p className="text-xs italic text-[#2C2416]/80" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                      Breathtaking views and peaceful surroundings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Outdoors 3 — full width panoramic */}
              <div
                className={`relative overflow-hidden rounded-none w-full ${imageHoverClass}`}
                style={{ height: '320px' }}
              >
                <Image
                  src="/Website Assets/Gallery Outdoors 3.jpg"
                  alt="Panoramic outdoor landscape"
                  fill
                  className={imageZoomClass}
                />
              </div>
            </motion.div>

            {/* Indoor Section Desktop */}
            <motion.div
              variants={itemVariants}
              className="w-full flex gap-1"
              style={{ minHeight: '620px' }}
            >
              {/* Left column (~55%): text header block + Gallery Indoors 1 */}
              <div className="flex flex-col gap-1" style={{ width: '55%' }}>
                {/* Text block — same beige tone as outdoor card */}
                <div
                  className="flex flex-col justify-center px-6 py-6 shadow-sm"
                  style={{ backgroundColor: '#BFA98A', minHeight: '100px' }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2C2416] mb-1">
                    Indoor Comfort
                  </p>
                  <p className="text-xs italic text-[#2C2416]/80" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    Thoughtfully designed spaces that feel like home.
                  </p>
                </div>

                {/* Gallery Indoors 1 */}
                <div
                  className={`relative overflow-hidden rounded-none ${imageHoverClass}`}
                  style={{ flex: 1, minHeight: '460px' }}
                >
                  <Image
                    src="/Website Assets/Gallery Indoors 1.jpg"
                    alt="Indoor living room"
                    fill
                    className={imageZoomClass}
                  />
                </div>
              </div>

              {/* Right column: Indoors 2, 3, then 4+5 side by side */}
              <div className="flex flex-col gap-1 flex-1">
                <div
                  className={`relative overflow-hidden rounded-none ${imageHoverClass}`}
                  style={{ flex: 1, minHeight: '190px' }}
                >
                  <Image
                    src="/Website Assets/Gallery Indoors 2.jpeg"
                    alt="Indoor living area"
                    fill
                    className={imageZoomClass}
                  />
                </div>

                <div
                  className={`relative overflow-hidden rounded-none ${imageHoverClass}`}
                  style={{ flex: 1, minHeight: '190px' }}
                >
                  <Image
                    src="/Website Assets/Gallery Indoors 3.jpeg"
                    alt="Indoor hallway"
                    fill
                    className={imageZoomClass}
                  />
                </div>

                <div className="flex gap-1" style={{ flex: 1, minHeight: '190px' }}>
                  <div className={`relative overflow-hidden rounded-none flex-1 ${imageHoverClass}`}>
                    <Image
                      src="/Website Assets/Gallery Indoors 4.jpeg"
                      alt="Indoor kitchen"
                      fill
                      className={imageZoomClass}
                    />
                  </div>
                  <div className={`relative overflow-hidden rounded-none flex-1 ${imageHoverClass}`}>
                    <Image
                      src="/Website Assets/Gallery Indoors 5.jpeg"
                      alt="Indoor bedroom"
                      fill
                      className={imageZoomClass}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}