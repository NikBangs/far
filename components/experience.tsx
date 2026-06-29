'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full bg-[#1E352F] py-24 md:py-32 text-white relative overflow-hidden font-sans"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center"
        >
          {/* Section Label / Badge */}
          <motion.div variants={itemVariants} className="w-full flex justify-start mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#E8E2D9]/30 bg-white/5 text-sm font-normal text-[#E8E2D9] tracking-normal" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Living Experience
            </span>
          </motion.div>

          {/* Main Heading — Raleway */}
          <motion.h2
            variants={itemVariants}
            className="mb-3 text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            The FAR Experience
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-12 text-center text-sm text-[#E8E2D9]/80 max-w-xs md:max-w-none"
          >
            Where nature, community, and independent living come together.
          </motion.p>

          {/* ── MOBILE LAYOUT ── */}
     <div className="w-full md:hidden flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-none w-full shadow-lg" style={{ height: '220px' }}>
              <Image src="/Website Assets/Living Experience 2.jpg" alt="Sunset" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-none w-full shadow-lg" style={{ height: '220px' }}>
              <Image src="/Website Assets/Living Experience 1.jpg" alt="Patio outdoor view" fill className="object-cover" />
            </div>
            <div className="text-center py-4">
              <p className="font-cormorant italic text-3xl text-[#E8E2D9] font-light leading-snug">
                Where Every Day Begins &amp; Ends Beautifully
              </p>
              <p className="mt-2 text-sm text-white/50">
                Experience the beauty and tranquility of Pine Valley every day.
              </p>
            </div>
 
            {/* House image + heading + bedroom image overlap block, paragraphs beside bedroom image */}
<div className="relative" style={{ height: '380px' }}>
  {/* House image — landscape, top left */}
  <div className="absolute top-0 left-0 w-[58%] overflow-hidden rounded-none shadow-lg" style={{ height: '130px' }}>
    <Image src="/Website Assets/Living Experience 3.jpg" alt="Outdoor house" fill className="object-cover" />
  </div>

  {/* Heading — top right */}
<h1 className="absolute top-3 right-0 w-[40%] font-sans text-lg font-normal leading-tight text-white">
  Built<br />Around<br />Comfort &amp;<br />Community
</h1>

  {/* Paragraphs — left column, beside bedroom image */}
  <div className="absolute top-[150px] left-0 w-[52%] space-y-2 text-[15px] text-white/80 leading-relaxed">
    <p>A welcoming environment designed for stability and independence.</p>
    <p>Take a closer look at the spaces, surroundings, and a community that makes FAR feel like home.</p>
    <p>Discover a peaceful environment designed for comfort, independence, and well-being.</p>
  </div>

  {/* Bedroom image — portrait, overlaps bottom-right of house image */}
  <div className="absolute top-[110px] right-0 w-[46%] overflow-hidden rounded-none shadow-lg z-10" style={{ height: '270px' }}>
    <Image src="/Website Assets/Living Experience 4.jpg" alt="Bedroom interior" fill className="object-cover" />
  </div>
</div>
            <div className="mt-2" />
 
            <div className="relative overflow-hidden rounded-none w-full shadow-lg" style={{ height: '200px' }}>
              <Image src="/Website Assets/Living Experience 5.jpeg" alt="Evening sunset" fill className="object-cover" />
            </div>
            <p className="text-center font-sans text-base font-bold text-white leading-snug">
              Thoughtfully designed for everyday living.
            </p>
          </div>

          {/* ── DESKTOP LAYOUT ── */}
          <div className="hidden md:flex flex-col w-full gap-8">

            {/* Top Row: Image 1 + Image 2 */}
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="overflow-hidden rounded-none aspect-[16/10] relative shadow-2xl">
                <Image src="/Website Assets/Living Experience 1.jpg" alt="Living experience outdoor view" fill className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-none aspect-[16/10] relative shadow-2xl">
                <Image src="/Website Assets/Living Experience 2.jpg" alt="Living experience sunset" fill className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Quote */}
            <div className="w-full text-center py-10">
              <p className="font-cormorant italic text-4xl lg:text-5xl text-[#E8E2D9] font-light tracking-wide">
                Where Every Day Begins &amp; Ends Beautifully
              </p>
              <p className="mt-3 text-sm text-white/50">
                Experience the beauty and tranquility of Pine Valley every day.
              </p>
            </div>

            {/* Bottom collage */}
{/* Bottom collage */}
<div className="w-full relative h-[720px]">
  
  {/* House image — bottom of stack */}
  <div className="absolute top-0 left-0 w-[42%] h-[280px] overflow-hidden rounded-none shadow-2xl z-10">
    <Image
      src="/Website Assets/Living Experience 3.jpg"
      alt="Outdoor house"
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* Bedroom image — overlaps on top of house image */}
  <div className="absolute top-[160px] left-[28%] w-[26%] h-[420px] overflow-hidden rounded-none shadow-2xl z-20">
    <Image
      src="/Website Assets/Living Experience 4.jpg"
      alt="Interior living space"
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

{/* Built Around heading — overlapping bedroom image edge */}
{/* Built Around heading — overlapping bedroom image edge */}
<div className="absolute top-[80px] left-[45%] w-[52%]">
  <h3 className="font-sans text-3xl lg:text-4xl font-normal leading-snug text-white whitespace-nowrap">
    Built Around Comfort &amp; Community
  </h3>
</div>

{/* Paragraphs — original position */}
<div className="absolute top-[150px] left-[58%] w-[42%] space-y-4 text-lg lg:text-xl text-white/70 leading-relaxed max-w-[400px]">
  <p>A welcoming environment designed for stability and independence.</p>
  <p>Take a closer look at the spaces, surroundings, and a community that makes FAR feel like home.</p>
  <p>Discover a peaceful environment designed for comfort, independence, and well-being.</p>
</div>

  {/* Thoughtfully text — bottom left */}
<div className="absolute bottom-38 left-0 w-[26%]">
  <h3 className="font-sans text-4xl lg:text-5xl font-normal leading-[1.25] text-[#E8E2D9]">
    Thoughtfully<br />designed for<br />everyday<br />living.
  </h3>
</div>

  {/* Sunset image — overlaps on top of bedroom image */}
  <div className="absolute bottom-0 left-[42%] w-[52%] h-[260px] overflow-hidden rounded-none shadow-2xl z-30">
    <Image
      src="/Website Assets/Living Experience 5.jpeg"
      alt="Evening sunset view"
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
</div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}