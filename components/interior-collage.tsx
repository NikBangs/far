'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function InteriorCollage() {
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
          className="grid gap-6 md:grid-cols-12"
        >
          {/* Left Column: Large fireplace living room (takes 7 cols on desktop) */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-2xl md:col-span-7 aspect-[4/5] md:aspect-auto relative shadow-md min-h-[450px]"
          >
            <Image
              src="/interior-1.png"
              alt="Fireplace living room interior"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.div>

          {/* Right Column: Two stacked images (takes 5 cols on desktop) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Top Right: Bedroom interior */}
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-2xl aspect-[4/3] relative shadow-md flex-1 min-h-[200px]"
            >
              <Image
                src="/bedroom-interior.png"
                alt="Cozy bedroom interior"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </motion.div>

            {/* Bottom Right: Outdoor community trees */}
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-2xl aspect-[4/3] relative shadow-md flex-1 min-h-[200px]"
            >
              <Image
                src="/landscape-outdoor.png"
                alt="Scenic outdoor landscape of community"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
