'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function ExteriorCollage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
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
    <section ref={ref} className="w-full bg-[#F7F4F0] pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-6"
        >
          {/* Top Row: Two unequal columns */}
          <div className="grid gap-6 md:grid-cols-12">
            {/* Left: Exterior House (65% width on desktop) */}
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-2xl md:col-span-8 aspect-[16/10] relative shadow-md"
            >
              <Image
                src="/exterior-house.png"
                alt="Modern residential exterior house"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </motion.div>

            {/* Right: Sunset Image (35% width on desktop) */}
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-2xl md:col-span-4 aspect-[10/11] md:aspect-auto relative shadow-md"
            >
              <Image
                src="/sunset-2.png"
                alt="Scenic sunset view"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </motion.div>
          </div>

          {/* Bottom Row: Full-width landscape sunset */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-2xl aspect-[21/9] md:aspect-[24/9] relative shadow-md w-full"
          >
            <Image
              src="/sunset-landscape.png"
              alt="Panoramic mountain sunset landscape"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.01]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
