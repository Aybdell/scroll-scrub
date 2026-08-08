import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectCard from './components/ProjectCard'
import SkillsSection from './components/SkillsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)
  const videoRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const lenisRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const scrollContainer = scrollContainerRef.current
    if (!video || !scrollContainer) return

    const lenis = new Lenis()
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const onTicker = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(onTicker)
    gsap.ticker.lagSmoothing(0)

    const isMobile = window.innerWidth <= 768
    if (!isMobile) {
      scrollContainer.style.height = '380vh'
    } else {
      scrollContainer.style.height = 'auto'
    }
    ScrollTrigger.refresh()

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.site-header',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2,
        }
      )

      gsap.from('.hero-reveal', {
        opacity: 0,
        y: 45,
        stagger: 0.1,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.4,
      })

      gsap.to('.scroll-hint__chevron', {
        y: 7,
        repeat: -1,
        yoyo: true,
        duration: 1.0,
        ease: 'power1.inOut',
      })

      gsap.utils.toArray('.reveal-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: {
            trigger: card,
            start: 'top 110%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      gsap.from('.cta-section > *', {
        opacity: 0,
        y: 30,
        stagger: 0.07,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 110%',
          toggleActions: 'play none none reverse',
        },
      })

      const mm = gsap.matchMedia()

      mm.add('(max-width: 768px)', () => {
        video.loop = true
        video.play().catch(() => {})

        return () => {
          video.pause()
          video.loop = false
        }
      })

      mm.add('(min-width: 769px)', () => {
        video.pause()
        video.loop = false

        const createScrub = () => {
          ScrollTrigger.refresh()

          ScrollTrigger.create({
            trigger: scrollContainer,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
            onUpdate: (self) => {
              if (!videoRef.current?.duration) return

              const duration = videoRef.current.duration
              const totalProgress = self.progress
              const rawTime = totalProgress * (duration * 3)
              const currentTime = rawTime % duration

              videoRef.current.currentTime = currentTime
            },
          })
        }

        if (video.readyState >= 1) {
          createScrub()
        } else {
          video.addEventListener('loadedmetadata', createScrub)
        }

        return () => {
          video.removeEventListener('loadedmetadata', createScrub)
          video.pause()
        }
      })
    }, appRef)

    return () => {
      ctx.revert()
      gsap.ticker.remove(onTicker)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <div ref={appRef} className="app">
      <Header lenis={lenisRef} />

      <video
        ref={videoRef}
        src="/hero.mp4"
        muted
        playsInline
        preload="auto"
        className="hero-video"
      />

      <div className="hero-overlay" aria-hidden="true" />

      <div ref={scrollContainerRef} className="scroll-content">
        <HeroSection lenis={lenisRef} />

        <section id="work" className="work-section">
          <ProjectCard
            number="01"
            label="Featured Project"
            title="Dev AI"
            subtitle="AI-Powered Code Review SaaS"
            description="Production-ready SaaS built with Next.js 15, TypeScript, Supabase & OpenAI GPT-4o. Real-time AI code review with Monaco Editor — shipped end-to-end independently."
            tags={[
              'Next.js 15',
              'TypeScript',
              'Supabase',
              'OpenAI GPT-4o',
              'Monaco Editor',
            ]}
            linkLabel="Live Demo →"
            linkUrl="https://dev-ai99.vercel.app"
          />

          <ProjectCard
            number="02"
            label="Featured Project"
            title="Freelancer CRM"
            subtitle="Full-Stack SaaS Platform"
            description="Complete client & project management platform using Next.js 14, tRPC, Prisma & Supabase. Type-safe API layer designed and built from scratch."
            tags={['Next.js 14', 'tRPC', 'Prisma', 'Supabase', 'shadcn/ui']}
            linkLabel="View on GitHub →"
            linkUrl="https://github.com/Aybdell/freelancer-CR"
          />
        </section>

        <SkillsSection />
        <CTASection />
      </div>

      <Footer />
    </div>
  )
}

export default App
