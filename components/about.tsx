'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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
    <section id="about" ref={ref} className="w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-12 lg:grid-cols-12 lg:gap-20"
        >
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Welcome Home
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              More than housing, <br />
              <span className="text-primary font-serif italic font-normal">a supportive home</span> in the <br className="md:hidden" />
              mountains.
            </motion.h2>
          </div>

          {/* Right Column: Description Text */}
          <div className="lg:col-span-7 flex flex-col justify-start gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80 md:text-xl font-medium">
                <span className="float-left relative w-10 h-10 md:w-12 md:h-12 mr-2 mt-1">
                  <Image src="/N.png" alt="N" fill className="object-contain" />
                </span>
                estled in the peaceful mountain community of Pine Valley, California, FAR Adult Independent Living offers a supportive environment designed for stability, dignity, and independent living.
              </p>
              <p className="text-base leading-relaxed text-foreground/70">
                Our person-centered approach honors each resident&apos;s unique needs and preferences, providing the right level of support at the right time. Whether you&apos;re seeking social connection, wellness activities, or simply a safe and welcoming place to call home, FAR is here for you.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
           <p className="text-sm md:text-base leading-relaxed text-foreground/90 font-serif italic">
  &ldquo;Our holistic approach brings together person-centered care, enriching community experiences, and supportive services. We create an environment where residents thrive, maintaining their independence while enjoying meaningful connections with neighbors and staff who genuinely care.&rdquo;
</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}