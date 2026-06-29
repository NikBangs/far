'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const categories = [
  { label: 'Our Home',   color: '#C55A38' },
  { label: 'Groceries',  color: '#4A7C6F' },
  { label: 'Pharmacy',   color: '#7B6FAB' },
  { label: 'Healthcare', color: '#E07B5A' },
  { label: 'Dining',     color: '#C55A38' },
  { label: 'Parks',      color: '#6B8F71' },
  { label: 'Gas & fuel', color: '#B5883E' },
  { label: 'Banking',    color: '#4A6FA5' },
]

const allLocations: {
  name: string
  coords: [number, number]
  category: string
}[] = [
  // Our Home
  { name: 'FAR Community', coords: [-116.5292, 32.8223], category: 'Our Home' },
  // Groceries
  { name: 'Pine Valley Grocery Store', coords: [-116.5310, 32.8210], category: 'Groceries' },
  // Pharmacy
  { name: 'Pine Valley Pharmacy', coords: [-116.5305, 32.8215], category: 'Pharmacy' },
  // Healthcare
  { name: 'Pine Valley Medical Clinic', coords: [-116.5270, 32.8240], category: 'Healthcare' },
  { name: 'Sharp Grossmont Hospital',   coords: [-116.9780, 32.7870], category: 'Healthcare' },
  { name: 'Jacumba Hot Springs',        coords: [-116.1980, 32.6190], category: 'Healthcare' },
  // Dining
  { name: 'Frosty Burger',             coords: [-116.5295, 32.8205], category: 'Dining' },
  { name: 'Pine Valley Inn',           coords: [-116.5288, 32.8212], category: 'Dining' },
  // Parks
  { name: 'Pine Valley County Park',        coords: [-116.5320, 32.8260], category: 'Parks' },
  { name: 'Cleveland National Forest',      coords: [-116.5500, 32.8400], category: 'Parks' },
  // Gas & fuel
  { name: 'Pine Valley Gas Station', coords: [-116.5298, 32.8208], category: 'Gas & fuel' },
  // Banking
  { name: 'Pine Valley Credit Union', coords: [-116.5302, 32.8225], category: 'Banking' },
]

export default function MapSection() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<mapboxgl.Marker[]>([])
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeCategory, setActiveCategory] = useState('Our Home')
  const [mapReady, setMapReady] = useState(false)

  // Init map once
  useEffect(() => {
    if (!inView || !mapContainer.current || map.current) return

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''
    if (!token) return

    mapboxgl.accessToken = token
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-116.5292, 32.8223],
      zoom: 12,
      pitch: 20,
    })

    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right')
    map.current.on('load', () => setMapReady(true))

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [inView])

  // Update markers when category changes or map becomes ready
  useEffect(() => {
    if (!mapReady || !map.current) return

    // Clear existing markers
    markersRef.current.forEach((m) => m.remove())
    markersRef.current = []

    const filtered = allLocations.filter((l) => l.category === activeCategory)
    const catColor = categories.find((c) => c.label === activeCategory)?.color ?? '#C55A38'

    filtered.forEach((loc) => {
      const marker = new mapboxgl.Marker({ color: catColor, scale: loc.category === 'Our Home' ? 1.3 : 0.9 })
        .setLngLat(loc.coords)
        .setPopup(
          new mapboxgl.Popup({ offset: 20 }).setHTML(
            `<div style="padding:8px">
              <p style="font-size:11px;font-weight:600;color:${catColor};margin:0 0 2px;text-transform:uppercase;letter-spacing:0.05em">${loc.category}</p>
              <h4 style="font-weight:bold;color:#1E352F;margin:0;font-size:13px">${loc.name}</h4>
            </div>`
          )
        )
        .addTo(map.current!)
      markersRef.current.push(marker)
    })

    // Fit map to markers
    if (filtered.length > 0) {
      if (filtered.length === 1) {
        map.current.flyTo({ center: filtered[0].coords, zoom: 14, duration: 800 })
      } else {
        const bounds = new mapboxgl.LngLatBounds()
        filtered.forEach((l) => bounds.extend(l.coords))
        map.current.fitBounds(bounds, { padding: 80, duration: 800 })
      }
    }
  }, [activeCategory, mapReady])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="location" ref={ref} className="w-full bg-[#F7F4F0] py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start"
        >
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start items-start pt-2">
            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <span className="inline-block w-6 h-px bg-primary" />
                What&apos;s Around
              </span>
            </motion.div>

<motion.h2
  variants={itemVariants}
  className="font-sans text-4xl font-bold leading-tight text-foreground md:text-5xl mb-5"
>
  Everything close by,{' '}
  <span className="text-primary italic font-normal">on the map.</span>
</motion.h2>


            <motion.p variants={itemVariants} className="text-base text-foreground/70 mb-8 leading-relaxed">
              Explore the shops, services, and facilities that surround our home in Pine Valley. Tap a category to see what&apos;s nearby. The map updates live.
            </motion.p>

            {/* Address Card */}
            <motion.div
              variants={itemVariants}
              className="w-full rounded-2xl border border-border bg-white/70 backdrop-blur-sm px-6 py-5 mb-8"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Our Location</p>
              <p className="font-serif text-lg font-semibold text-foreground leading-snug">
                35533 Stagecoach Springs Road
              </p>
              <p className="text-sm text-foreground/60">Pine Valley, CA · San Diego County</p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="https://maps.google.com/?q=35533+Stagecoach+Springs+Road+Pine+Valley+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02]"
              >
                Get directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Filter + Map */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-0">
            {/* Filter pills — above map, inside same rounded card */}
            <div className="rounded-t-3xl border border-b-0 border-border bg-white/80 backdrop-blur-sm px-5 pt-5 pb-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.label
                  return (
                    <button
                      key={cat.label}
                      onClick={() => setActiveCategory(cat.label)}
                      className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border"
                      style={
                        isActive
                          ? { backgroundColor: cat.color, color: '#fff', borderColor: cat.color }
                          : { backgroundColor: 'transparent', color: '#1E352F', borderColor: '#D6CFC7' }
                      }
                    >
                      {cat.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-b-3xl border border-border overflow-hidden h-[420px] md:h-[460px] w-full">
              <div ref={mapContainer} className="h-full w-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}