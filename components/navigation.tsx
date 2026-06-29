'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navigation({ basePath = '' }: { basePath?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: `/` },
    { label: 'About', href: `/#about` },
    { label: 'Living Experience', href: `/#living-experience` },
    { label: 'Location', href: `/#location` },
    { label: 'FAQ', href: `/#faq` },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F4F0] shadow-sm border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hover:opacity-90 transition-opacity"
          >
            <Link href={basePath ? `${basePath}/` : '#home'}>
              <img
                src="/far_logo_nav.png"
                alt="FAR"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Center Nav */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`hidden md:flex items-center gap-1 rounded-[15px] border px-2 py-1.5 transition-all duration-300 ${
              scrolled
                ? 'border-black/10 bg-white/80 backdrop-blur-md'
                : 'border-white/20 bg-white/5 backdrop-blur-md'
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`relative px-4 py-1.5 rounded-[10px] text-sm font-medium transition-all duration-200 ${
                  activeItem === item.label
                    ? 'bg-[#C1623F] text-white shadow-sm'
                    : scrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-black/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Contact Us Button — always beige */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F0EBE3] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#E8E2D9]"
            >
              Contact Us
              <span className="text-base font-bold">↗</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:hidden"
        >
          <div className={`flex flex-col gap-2 rounded-[15px] border px-4 py-4 mt-1 mb-3 backdrop-blur-md ${
            scrolled
              ? 'border-black/10 bg-[#F7F4F0]'
              : 'border-white/20 bg-black/60'
          }`}>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => { setActiveItem(item.label); setIsOpen(false) }}
                className={`px-4 py-2 rounded-[10px] text-sm font-medium transition-all ${
                  activeItem === item.label
                    ? 'bg-[#C1623F] text-white'
                    : scrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-black/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F0EBE3] px-5 py-2 text-sm font-semibold text-black"
            >
              Contact Us ↗
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}