import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import LivingExperience from '@/components/living-experience'
import Experience from '@/components/experience'
import ExteriorCollage from '@/components/exterior-collage'
import InteriorCollage from '@/components/interior-collage'
import MapSection from '@/components/map-section'
import Support from '@/components/support'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Gallery from '@/components/gallery'

export default function Page() {
  return (
    <main className="w-full relative bg-[#F7F4F0] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <LivingExperience />
      <Experience />
      <Gallery />
      <MapSection />
      <Support />
      <FAQ />
      {/* <Contact /> */}
      <CTA />
      <Footer />
    </main>
  )
}
