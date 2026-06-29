import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BANNERS = [
  {
    icon: '🎫',
    title: 'Early Bird Season Pass',
    desc: 'Get 20% off full-season tickets before July 15. Includes exclusive merch and VIP parking.',
    cta: 'Buy Now',
    gradient: 'linear-gradient(135deg, #1a237e, #283593)',
  },
  {
    icon: '👕',
    title: 'New Heritage Collection',
    desc: 'Commemorate the 1985 championship with our retro jersey collection. Limited edition drop.',
    cta: 'Shop Collection',
    gradient: 'linear-gradient(135deg, #ff6f00, #ff8f00)',
  },
  {
    icon: '🎮',
    title: 'Samsung Lions eSports Arena',
    desc: 'Cheer on our LCK team at the new fan zone. Live matches every Saturday at the stadium.',
    cta: 'Learn More',
    gradient: 'linear-gradient(135deg, #0d47a1, #1565c0)',
  },
]

export default function PromotionBanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current?.children || [], {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--color-bg-section)' }}>
      <div className="container">
        <h2 className="section-title">Promotions & Offers</h2>
        <div ref={gridRef} className="promo-grid">
          {BANNERS.map((b) => (
            <div key={b.title} className="promo-card" style={{ background: b.gradient }}>
              <div className="promo-icon">{b.icon}</div>
              <h3 className="promo-title">{b.title}</h3>
              <p className="promo-desc">{b.desc}</p>
              <a href="#" className="btn promo-btn">{b.cta}</a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .promo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .promo-card {
          border-radius: 16px; padding: 36px 28px;
          display: flex; flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .promo-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3); }
        .promo-icon { font-size: 2.5rem; margin-bottom: 16px; }
        .promo-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; }
        .promo-desc { font-size: 0.9rem; color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 24px; flex: 1; }
        .promo-btn {
          background: rgba(255, 255, 255, 0.15); color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3); align-self: flex-start;
        }
        .promo-btn:hover { background: rgba(255, 255, 255, 0.25); transform: translateY(-2px); box-shadow: none; }
        @media (max-width: 768px) { .promo-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
