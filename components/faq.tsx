'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const faqs = [
    {
      question: 'What is Independent Living?',
      answer:
        'Independent living provides adults with a safe and supportive housing environment while allowing them to maintain their freedom, privacy, and personal responsibility.',
    },
    {
      question: 'Who is a good fit for FAR Adult Independent Living?',
      answer:
        'Individuals seeking a peaceful, supportive environment who are capable of living independently but may benefit from assistance connecting with community resources and services.',
    },
    {
      question: 'Is this a residential facility or a home setting?',
      answer:
        'This is a home-based independent living environment. It is not an institution or clinical facility. Residents live in a supportive household setting with access to coordination and advocacy services. We work to reduce barriers and provide stability for your journey to independence.',
    },
    {
      question: 'What kind of living arrangements do you offer?',
      answer:
        'Residents can choose between shared bed spaces and semi-private rooms, depending on their needs and preferences. Our goal is to provide a safe, comfortable environment that balances privacy, community, and affordability. Please contact us for availability and pricing.',
    },
    {
      question: 'What kind of supportive services do you offer?',
      answer:
        'We help residents connect with and navigate a range of supportive services that make independent living more manageable. This includes assistance in communicating with case managers, accessing programs like IHSS, and connecting to resources such as transportation, meals, medication delivery, and community-based support.\n\nOur role is to help bridge the gap between our residents and the services they need, advocating when necessary and making sure individuals are not going through the process alone.',
    },
    {
      question: 'Why choose Pine Valley?',
      answer:
        "Pine Valley offers a peaceful, natural environment away from the stress and distractions of city life. With beautiful weather, open spaces, and nearby trails, it's an ideal setting for individuals looking to focus on their well-being and independence.",
    },
    {
      question: 'How can I find out if you have openings?',
      answer:
        "The best way to check availability is to reach out to us directly. We welcome inquiries from individuals, families, case managers, and referral partners. Contact us by phone or through our website, and we'll provide information about current openings, our living environment, and the next steps in the application process.",
    },
  ]

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

  return (
    <section id="faq" ref={ref} className="w-full bg-[#F7F4F0] py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start"
        >
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Support
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl mb-6"
            >
              Frequently <br />
              asked <span className="text-primary font-serif italic font-normal">questions</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-foreground/75 mb-8 leading-relaxed max-w-xs"
            >
              Can&apos;t find the answer you&apos;re looking for? Reach out to our customer care team anytime.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/95 hover:shadow-primary/30 hover:scale-[1.02]"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpanded(expanded === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-black/[0.01]"
                >
                  <h3 className="font-sans text-lg font-bold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className="h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate: expanded === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-border px-6 py-5 bg-background/50">
                        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}