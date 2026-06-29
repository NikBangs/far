'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function LivingExperience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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

  const experiences = [
    {
      title: 'A Place to Reset and Rebuild',
      description:
        'A peaceful Pine Valley setting designed for focus, stability, and new beginnings.',
    },
    {
      title: 'Independence With Real Support',
      description:
        'Connecting you to services and resources that help you thrive independently.',
    },
    {
      title: 'Advocacy That Stays Involved',
      description:
        'Helping you navigate systems and access the support you deserve.',
    },
    {
      title: 'Everyday Life Made Simpler',
      description:
        "Coordinating life's essentials so you can focus on what matters most.",
    },
  ]

  return (
    <section
      id="living-experience"
      ref={ref}
      className="w-full bg-background py-24 md:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-12 lg:grid-cols-12 lg:gap-20"
        >
          {/* Left Column - Section Info */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                What We Offer
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl mb-6"
            >
              Independent Living, <br />
              <span className="text-primary font-serif italic font-normal">Supported</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-foreground/70 mb-8 max-w-md leading-relaxed"
            >
              We provide a safe, structured, and welcoming community where residents can live independently while enjoying helpful support services and enriching social connections.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/95 hover:shadow-primary/30 hover:scale-[1.02]">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl border border-secondary/50 bg-[#E8E2D9] p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01] flex flex-col justify-start"
              >
                <h3 className="mb-3 font-sans text-xl font-bold text-[#1E352F] md:text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#1E352F]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
