import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const CAROUSEL_SLIDES = [
  {
    label: 'Daegu Samsung Lions Park',
    credit: 'Caleb Woods',
    url: 'https://images.unsplash.com/photo-1682384157113-47285026d285?w=800&q=80',
  },
  {
    label: 'KBO Championship Trophy',
    credit: 'Caleb Woods',
    url: 'https://images.unsplash.com/photo-1682384157322-32ab3932da07?w=800&q=80',
  },
  {
    label: 'Lions Faithful Fans',
    credit: 'Stuart Bloodworth',
    url: 'https://images.unsplash.com/photo-1549403685-c4fa77cf85aa?w=800&q=80',
  },
  {
    label: 'Legends of Samsung',
    credit: 'Ty Downs',
    url: 'https://images.unsplash.com/photo-1666366330282-b11566b272cf?w=800&q=80',
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
  const slideImgsRef = useRef<(HTMLDivElement | null)[]>([])

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
                <div key={i} className="carousel-slide">
                  <div
                    ref={(el) => { slideImgsRef.current[i] = el }}
                    className="slide-img"
                    style={{ backgroundImage: `url(${slide.url})` }}
                  />
                  <div className="slide-gradient" />
                  <div className="slide-label-wrap">
                    <span className="slide-label">{slide.label}</span>
                    <span className="slide-credit">Photo: {slide.credit} / Unsplash</span>
                  </div>
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
          background: var(--color-bg);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 120% 60% at 30% 70%, rgba(26, 35, 126, 0.5) 0%, transparent 70%),
            radial-gradient(ellipse 80% 50% at 70% 30%, rgba(255, 111, 0, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 100% 80% at 50% 100%, rgba(10, 10, 26, 1) 0%, transparent 50%),
            linear-gradient(180deg, var(--color-bg) 0%, rgba(26, 35, 126, 0.3) 40%, rgba(26, 35, 126, 0.5) 70%, var(--color-bg) 100%);
          pointer-events: none;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, var(--color-overlay) 0%, var(--color-overlay-2) 50%, var(--color-overlay-3) 100%);
          opacity: 0;
          pointer-events: none;
          z-index: 1;
          transition: background 0.3s ease;
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
          overflow: hidden;
        }
        .slide-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.8s ease;
        }
        .carousel-slide:hover .slide-img {
          transform: scale(1.05);
        }
        .slide-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%);
          pointer-events: none;
        }
        .slide-label-wrap {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          z-index: 1;
        }
        .slide-label {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          display: block;
        }
        .slide-credit {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.5);
          margin-top: 4px;
          display: block;
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
            background: linear-gradient(180deg, var(--color-overlay) 0%, rgba(10, 10, 26, 0.8) 100%);
          }
        }
      `}</style>
    </section>
  )
}
