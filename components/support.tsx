'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Support() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const serviceTags = [
    'Independent Living Support',
    'Home-Based Living Environment',
    'Case Manager Advocacy',
    'Benefits Navigation Assistance',
    'Community Resource Connection',
    'Daily Living Support Services',
    'Service Enrollment Assistance',
    'Life Skills & Stability Support',
  ]

  return (
    <section ref={ref} className="w-full bg-[#F7F4F0] py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center"
        >
          {/* Left Column: Services list */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Supportive Care
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl mb-8"
            >
              Independence, <br />
              <span className="text-primary font-serif italic font-normal">with the right help close by.</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 w-full">
              {serviceTags.map((tag, index) => (
                <div
                  key={index}
                  className="group px-5 py-3 rounded-full border border-border bg-[#FAF8F5] text-[#1E352F] text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-[#C55A38] hover:text-white hover:border-[#C55A38] hover:scale-[1.03] cursor-default flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-[#C55A38] group-hover:bg-white transition-colors duration-300" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Decorative Image */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 overflow-hidden rounded-none border border-border shadow-md aspect-[4/5] relative w-full min-h-[400px]"
          >
            <Image
              src="/Website Assets/Living Experience 3.jpg"
              alt="Outdoor mountain pines surrounding FAR Community"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}