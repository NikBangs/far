'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="w-full bg-[#F7F4F0] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl text-white py-16 px-6 md:py-24 md:px-12 shadow-xl text-center"
        >
          {/* Background image */}
          <Image
            src="/Website Assets/CTA.jpg"
            alt="CTA background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#000000]/30 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
              Ready to experience FAR?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-10 max-w-md leading-relaxed">
              Contact us today to schedule a personalized tour, speak with our advisors, or ask any questions about residency.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/95 hover:shadow-primary/20 hover:scale-[1.02]"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}