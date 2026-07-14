'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F7F4F0] overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

          {/* Brand — col 1 */}
          <div className="md:col-span-1">
            <p className="font-sans text-xl font-bold text-[#1E352F] mb-3">
              FAR Adult Independent Living
            </p>
            <p className="text-sm text-[#1E352F]/60 leading-relaxed mb-6">
              35533 Stagecoach Springs Road<br />Pine Valley, CA
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E352F] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#162820]"
            >
              Contact Us <span>↗</span>
            </Link>
          </div>

          {/* Spacer — col 2 (watermark sits here visually) */}
          <div className="hidden md:block md:col-span-1" />

          {/* Quick Links — col 3 */}
          <div>
            <p className="text-base font-bold text-[#1E352F] mb-4">Quick Links</p>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/#about' },
                { label: 'The FAR Experience', href: '/#experience' },
                { label: 'Services', href: '/#living-experience' },
                { label: 'FAQ', href: '/#faq' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[#1E352F]/70 hover:text-[#1E352F] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials — col 4 */}
          <div>
            <p className="text-base font-bold text-[#1E352F] mb-4">Socials</p>
            <ul className="space-y-2">
              {['Instagram', 'Facebook'].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-[#1E352F]/70 hover:text-[#1E352F] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* FAR Watermark — bottom center */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none z-0">
        <img
          src="/FAR-Watermark.png"
          alt=""
          className="w-[420px] md:w-[600px] opacity-100 object-contain"
        />
      </div>
    </footer>
  )
}