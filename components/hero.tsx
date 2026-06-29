'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Website Assets/Hero Background.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-end pb-32 md:pb-40 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 font-sans text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
            FAR Adult Independent Living
          </h1>
        </motion.div>
 
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg font-medium text-white/90 md:text-xl leading-relaxed"
        >
          Independence Doesn't Mean Doing It Alone
        </motion.p>
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/95 hover:shadow-primary/30 hover:scale-[1.02]"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}