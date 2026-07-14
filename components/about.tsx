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
                estled in the peaceful mountain community of Pine Valley, FAR Adult Independent Living offers more than just a place to stay. We provide a calm, supportive environment where individuals can keep building stable, independent lives surrounded by nature, fresh air, and community. Residents live in comfortable shared rooms, designed to encourage connection, companionship, and a genuine sense of belonging within the home.
              </p>
              <p className="text-base leading-relaxed text-foreground/70">
              Located away from the noise and stress of the city, our home is designed for people who value peace, dignity, and personal growth. Pine Valley is known for its natural beauty, open skies, and strong sense of community. A place that encourages a slower, healthier pace of life centered on wellness and positive daily living.
              </p>
              <p className="text-base leading-relaxed text-foreground/70">
              We believe independence thrives best in environments that are supportive, respectful, and community-driven. Our approach is holistic: well-being is connected to stable housing, healthy surroundings, social connection, and access to the resources people need. We aim to create a home where residents feel safe, welcomed, and empowered to continue their journey with confidence.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}