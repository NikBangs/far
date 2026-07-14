'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
      if (!endpoint) throw new Error('Missing Formspree endpoint')

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!res.ok) throw new Error('Submission failed')

      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1E352F]">

      {/* Navbar */}
      <Navigation basePath="/" />

      {/* Main Content */}
      <main className="flex flex-1 flex-col md:flex-row pt-32 md:pt-40 px-6 md:px-16 lg:px-24 py-16 gap-12 items-start">

        {/* Left Panel — text on green bg */}
        <div className="flex flex-col justify-between md:w-[42%] md:min-h-[80vh]">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C55A38] mb-4 flex items-center gap-2">
              <span className="block w-6 h-px bg-[#C55A38]" /> Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let's find a peaceful place to call home
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xs">
              Reach out about availability, a visit, or any questions. We're happy to walk through whether FAR is the right fit.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-14 flex flex-col gap-0">
         {[
  {
    label: 'VISIT',
    icon: '/visit-icon.png',
    value: '35533 Stagecoach Springs Road Pine Valley, CA · San Diego County',
  },
  {
    label: 'CALL',
    icon: '/call-icon.png',
    value: '(619) 735-8677',
  },
  {
    label: 'EMAIL',
    icon: '/email-icon.png',
    value: 'faradultindliving@gmail.com',
  },
  {
    label: 'HOURS',
    icon: '/hours-icon.png',
    value: 'By appointment · Mon to Sat',
  },
].map((item, i) => (
  <div key={i} className="border-t border-white/10 py-5">
    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5 flex items-center gap-1.5">
      <img src={item.icon} alt={item.label} className="w-4 h-3.5 opacity-60" />
      {item.label}
    </p>
    <p className="text-white/80 text-sm leading-relaxed">{item.value}</p>
  </div>
))}
          </div>
        </div>

        {/* Right Panel — Cream card */}
        <div className="flex flex-1 items-start justify-center">
          <div className="w-full max-w-lg bg-[#F5F0E8] rounded-3xl shadow-sm p-8 md:p-10">
            <h2 className="font-serif text-2xl font-bold text-[#1E352F] mb-1">
              Inquire about availability
            </h2>
            <p className="text-sm text-[#6E645A] mb-8 leading-relaxed">
              Tell us a little about who the home would be for. There are no wrong answers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1E352F]/70 mb-1.5">Full name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#E5DFD5] bg-[#EDE5D8] px-4 py-3 text-sm text-[#1E352F] placeholder-[#1E352F]/30 focus:outline-none focus:border-[#C55A38] focus:ring-1 focus:ring-[#C55A38] transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1E352F]/70 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(619) 000-0000"
                    className="w-full rounded-xl border border-[#E5DFD5] bg-[#EDE5D8] px-4 py-3 text-sm text-[#1E352F] placeholder-[#1E352F]/30 focus:outline-none focus:border-[#C55A38] focus:ring-1 focus:ring-[#C55A38] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E352F]/70 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-[#E5DFD5] bg-[#EDE5D8] px-4 py-3 text-sm text-[#1E352F] placeholder-[#1E352F]/30 focus:outline-none focus:border-[#C55A38] focus:ring-1 focus:ring-[#C55A38] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E352F]/70 mb-1.5">I'm inquiring as</label>
                <input
                  type="text"
                  name="inquiring_as"
                  placeholder="Myself"
                  className="w-full rounded-xl border border-[#E5DFD5] bg-[#EDE5D8] px-4 py-3 text-sm text-[#1E352F] placeholder-[#1E352F]/30 focus:outline-none focus:border-[#C55A38] focus:ring-1 focus:ring-[#C55A38] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E352F]/70 mb-1.5">How can we help?</label>
                <textarea
                  name="message"
                  placeholder="A little about the situation, timing, or any questions"
                  rows={4}
                  className="w-full rounded-xl border border-[#E5DFD5] bg-[#EDE5D8] px-4 py-3 text-sm text-[#1E352F] placeholder-[#1E352F]/30 focus:outline-none focus:border-[#C55A38] focus:ring-1 focus:ring-[#C55A38] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 rounded-full bg-[#C55A38] font-semibold text-white text-sm transition-all hover:bg-[#b34e30] shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitted ? 'Inquiry Sent!' : submitting ? 'Sending...' : 'Submit inquiry'}
              </button>

              {error && (
                <p className="text-center text-xs text-red-600">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <p className="text-center text-xs text-[#6E645A]">
                We'll only use your details to respond. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#162820] overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 py-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="md:col-span-2">
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                FAR Adult Independent Living
              </p>
              <p className="text-white/40 text-xs mt-1">
                35533 Stagecoach Springs Road<br />Pine Valley, CA
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Quick Links</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'About', href: '/#about' },
                  { label: 'The FAR Experience', href: '/#experience' },
                  { label: 'Services', href: '/#living-experience' },
                  { label: 'FAQ', href: '/#faq' },
                  { label: 'Contact', href: '/contact' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-white/60 text-sm hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Socials</p>
              <ul className="space-y-2.5">
                {['Instagram', 'Facebook'].map((s) => (
                  <li key={s}>
                    <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all"
                >
                  Contact Us <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAR Watermark */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none">
          <img
            src="/FAR-Watermark.png"
            alt=""
            className="w-[340px] md:w-[480px] opacity-10 object-contain"
          />
        </div>
      </footer>
    </div>
  )
}