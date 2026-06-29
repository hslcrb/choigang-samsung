import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PARTNERS = ['Samsung Electronics', 'KBO', 'Daegu City', 'Adidas', 'Coca-Cola', 'KT']

export default function Misc() {
  const sectionRef = useRef<HTMLElement>(null)
  const partnersRef = useRef<HTMLDivElement>(null)
  const newsletterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const partners = partnersRef.current?.children
      if (partners) {
        gsap.from(partners, {
          opacity: 0,
          scale: 0.85,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: partnersRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }
      gsap.from(newsletterRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: newsletterRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="misc-block">
          <h3 className="misc-block-title">Official Partners</h3>
          <div ref={partnersRef} className="partners-grid">
            {PARTNERS.map((p) => (
              <div key={p} className="partner-item">{p}</div>
            ))}
          </div>
        </div>

        <div ref={newsletterRef} className="newsletter-card">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Connected with the Lions</h3>
            <p className="newsletter-desc">
              Subscribe to the Choigang Samsung newsletter for exclusive updates, giveaways, and behind-the-scenes content from Daegu Samsung Lions Park.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .misc-block { margin-bottom: 64px; }
        .misc-block-title {
          font-size: 1rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 2px; color: var(--color-text-muted);
          text-align: center; margin-bottom: 32px;
        }
        .partners-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
        .partner-item {
          background: var(--color-bg-card); border: 1px solid var(--color-border);
          border-radius: 8px; padding: 20px 16px; text-align: center;
          font-weight: 600; font-size: 0.85rem; color: var(--color-text-muted);
          transition: all 0.3s;
        }
        .partner-item:hover { border-color: var(--color-accent); color: var(--color-text); transform: translateY(-2px); }
        .newsletter-card {
          background: linear-gradient(135deg, var(--color-primary), var(--color-bg-card));
          border: 1px solid var(--color-border); border-radius: 16px;
          padding: 48px; text-align: center;
        }
        .newsletter-content { max-width: 500px; margin: 0 auto; }
        .newsletter-title { font-size: 1.5rem; font-weight: 800; margin-bottom: 12px; }
        .newsletter-desc { color: var(--color-text-muted); margin-bottom: 28px; line-height: 1.7; }
        .newsletter-form { display: flex; gap: 12px; max-width: 440px; margin: 0 auto; }
        .newsletter-input {
          flex: 1; padding: 12px 20px; border: 1px solid var(--color-border);
          border-radius: 6px; background: rgba(255, 255, 255, 0.05);
          color: var(--color-text); font-family: var(--font-primary);
          font-size: 0.95rem; outline: none; transition: border-color 0.3s;
        }
        .newsletter-input:focus { border-color: var(--color-accent); }
        .newsletter-input::placeholder { color: var(--color-text-muted); }
        @media (max-width: 768px) {
          .partners-grid { grid-template-columns: repeat(2, 1fr); }
          .newsletter-card { padding: 32px 24px; }
          .newsletter-form { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
