import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const CAROUSEL_SLIDES = [
  {
    label: 'Daegu Samsung Lions Park',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #01579b 100%)',
    pattern: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 60%)',
    accent: '🏟️',
  },
  {
    label: 'KBO Championship Trophy',
    gradient: 'linear-gradient(135deg, #ff6f00 0%, #ff8f00 50%, #ffab00 100%)',
    pattern: 'radial-gradient(circle at 70% 60%, rgba(255,255,255,0.15) 0%, transparent 50%)',
    accent: '🏆',
  },
  {
    label: 'Lions Faithful Fans',
    gradient: 'linear-gradient(135deg, #b71c1c 0%, #d32f2f 50%, #e53935 100%)',
    pattern: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.12) 0%, transparent 55%)',
    accent: '🦁',
  },
  {
    label: 'Legends of Samsung',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
    pattern: 'radial-gradient(circle at 40% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    accent: '⭐',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(badgeRef.current, { opacity: 0, y: 30, duration: 0.8 })
        .from(titleRef.current, { opacity: 0, x: -80, duration: 1 }, '-=0.4')
        .from(subtitleRef.current, { opacity: 0, x: -60, duration: 0.9 }, '-=0.6')
        .from(actionsRef.current?.children || [], { opacity: 0, y: 20, duration: 0.5, stagger: 0.15 }, '-=0.4')
        .from(statsRef.current?.children || [], { opacity: 0, y: 30, duration: 0.6, stagger: 0.12 }, '-=0.2')

      gsap.from(carouselRef.current, { opacity: 0, x: 100, duration: 1.2, ease: 'power3.out', delay: 0.3 })

      gsap.to(overlayRef.current, {
        opacity: 0.7,
        duration: 2,
        ease: 'power1.inOut',
      })
    })

    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % CAROUSEL_SLIDES.length
        const slides = slidesRef.current
        if (slides) {
          gsap.to(slides, {
            x: -next * 100 + '%',
            duration: 0.8,
            ease: 'power3.inOut',
          })
        }
        return next
      })
    }, 4500)

    return () => {
      ctx.revert()
      clearInterval(interval)
    }
  }, [])

  const goToSlide = (i: number) => {
    setActiveSlide(i)
    const slides = slidesRef.current
    if (slides) {
      gsap.to(slides, {
        x: -i * 100 + '%',
        duration: 0.6,
        ease: 'power3.inOut',
      })
    }
  }

  return (
    <section id="home" ref={sectionRef} className="hero">
      <div className="hero-bg" />
      <div ref={overlayRef} className="hero-overlay" />
      <div className="hero-layout container">
        <div className="hero-text">
          <span ref={badgeRef} className="hero-badge">2026 Season — Pride of Daegu</span>
          <h1 ref={titleRef} className="hero-title">
            FOR THE <span className="text-accent">GREATER</span><br />
            GOOD OF SAMSUNG
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            Witness the legend of the <strong>Samsung Lions</strong> — from the golden era to
            the next dynasty. Eight championships. Fourteen Korean Series appearances.
            One family.
          </p>
          <div ref={actionsRef} className="hero-actions">
            <a href="#tickets" className="btn btn-primary">
              Get Tickets
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#history" className="btn btn-outline">Explore History</a>
            <a href="#news" className="btn btn-outline">Latest News</a>
          </div>
          <div ref={statsRef} className="hero-stats">
            {[
              { num: '8', label: 'KBO Championships' },
              { num: '14', label: 'Korean Series Appearances' },
              { num: '1982', label: 'Founded' },
              { num: '28,000', label: 'Stadium Capacity' },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={carouselRef} className="hero-carousel">
          <div className="carousel-viewport">
            <div ref={slidesRef} className="carousel-track">
              {CAROUSEL_SLIDES.map((slide, i) => (
                <div key={i} className="carousel-slide" style={{ background: slide.gradient }}>
                  <div className="slide-pattern" style={{ background: slide.pattern }} />
                  <div className="slide-content">
                    <span className="slide-icon">{slide.accent}</span>
                    <span className="slide-label">{slide.label}</span>
                  </div>
                  <div className="slide-shine" />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-indicators">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === activeSlide ? ' carousel-dot--active' : ''}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
          <div className="carousel-badge">SAMSUNG LIONS</div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a0a1a;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 120% 60% at 30% 70%, rgba(26, 35, 126, 0.5) 0%, transparent 70%),
            radial-gradient(ellipse 80% 50% at 70% 30%, rgba(255, 111, 0, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 100% 80% at 50% 100%, rgba(10, 10, 26, 1) 0%, transparent 50%),
            linear-gradient(180deg, #0a0a1a 0%, #0d1137 40%, #1a237e 70%, #0a0a1a 100%);
          pointer-events: none;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(10, 10, 26, 0.92) 0%, rgba(10, 10, 26, 0.6) 50%, rgba(10, 10, 26, 0.2) 100%);
          opacity: 0;
          pointer-events: none;
          z-index: 1;
        }
        .hero-layout {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 64px;
          padding-top: 80px;
          width: 100%;
        }
        .hero-text { flex: 1; min-width: 0; }
        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          border: 1px solid var(--color-accent);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent);
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -2px;
          max-width: 650px;
          margin-bottom: 20px;
        }
        .text-accent { color: var(--color-accent); }
        .hero-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 480px;
          margin-bottom: 32px;
          line-height: 1.7;
        }
        .hero-subtitle strong { color: var(--color-text); }
        .hero-actions { display: flex; gap: 12px; margin-bottom: 56px; flex-wrap: wrap; }
        .hero-stats { display: flex; gap: 40px; flex-wrap: wrap; }
        .hero-stat { display: flex; flex-direction: column; }
        .hero-stat-num {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--color-accent);
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }

        .hero-carousel {
          flex: 0 0 420px;
          position: relative;
        }
        .carousel-viewport {
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          position: relative;
        }
        .carousel-track {
          display: flex;
          width: ${CAROUSEL_SLIDES.length * 100}%;
          height: 100%;
        }
        .carousel-slide {
          width: ${100 / CAROUSEL_SLIDES.length}%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .slide-pattern { position: absolute; inset: 0; pointer-events: none; }
        .slide-content {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .slide-icon { font-size: 4rem; }
        .slide-label {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.9);
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .slide-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.08) 45%, transparent 50%);
          animation: shine 6s ease-in-out infinite;
        }
        @keyframes shine {
          0%, 100% { transform: translateX(-100%) rotate(45deg); }
          50% { transform: translateX(100%) rotate(45deg); }
        }
        .carousel-indicators {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 20px;
        }
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: var(--color-border);
          cursor: pointer;
          transition: all 0.3s;
        }
        .carousel-dot--active {
          background: var(--color-accent);
          transform: scale(1.3);
        }
        .carousel-badge {
          position: absolute;
          top: -12px;
          right: -12px;
          background: var(--color-accent);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 2px;
          padding: 6px 14px;
          border-radius: 6px;
          transform: rotate(6deg);
          box-shadow: 0 4px 12px rgba(255, 111, 0, 0.4);
        }

        @media (max-width: 968px) {
          .hero-layout { flex-direction: column; gap: 40px; }
          .hero-carousel { flex: 0 0 auto; width: 100%; max-width: 360px; }
          .hero-title { font-size: 2.8rem; }
          .hero-stats { gap: 24px; }
          .hero-stat-num { font-size: 1.8rem; }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem; }
          .hero-overlay {
            background: linear-gradient(180deg, rgba(10, 10, 26, 0.95) 0%, rgba(10, 10, 26, 0.8) 100%);
          }
        }
      `}</style>
    </section>
  )
}
