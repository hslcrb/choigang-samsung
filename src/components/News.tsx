import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NEWS_ITEMS = [
  {
    date: 'Jun 28, 2026',
    title: 'Samsung Lions Clinch Playoff Berth with Dominant Win',
    category: 'Game Recap',
    excerpt: 'A commanding 8-2 victory over the Kia Tigers secures Samsung\'s place in the postseason for the third consecutive year.',
  },
  {
    date: 'Jun 25, 2026',
    title: 'Rising Star: Kim Young-woong Named Rookie of the Month',
    category: 'Player News',
    excerpt: 'The 22-year-old outfielder posted a .345 batting average with 6 home runs in June, earning KBO Rookie of the Month honors.',
  },
  {
    date: 'Jun 22, 2026',
    title: 'Legendary Pitcher Park Chan-ho Joins Coaching Staff',
    category: 'Team News',
    excerpt: 'The Hall of Famer returns to the Lions as a special pitching advisor, bringing decades of experience to the young rotation.',
  },
  {
    date: 'Jun 18, 2026',
    title: 'Record Crowd of 28,000 Fans Pack Daegu Samsung Lions Park',
    category: 'Fan Zone',
    excerpt: 'Saturday\'s game against the LG Twins set a new season attendance record as the Lions faithful showed up in full force.',
  },
]

export default function News() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
      const cards = gridRef.current?.children
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        })
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="news" ref={sectionRef} className="section">
      <div className="container">
        <h2 ref={titleRef} className="section-title">Latest News</h2>
        <div ref={gridRef} className="news-grid">
          {NEWS_ITEMS.map((item) => (
            <article key={item.title} className="news-card">
              <div className="news-card-header">
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-excerpt">{item.excerpt}</p>
              <a href="#" className="news-read-more">
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .news-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .news-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 28px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .news-card:hover {
          border-color: var(--color-accent);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(255, 111, 0, 0.1);
        }
        .news-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .news-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-accent);
          padding: 4px 10px;
          border: 1px solid var(--color-accent);
          border-radius: 4px;
        }
        .news-date {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .news-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .news-excerpt {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .news-read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: gap 0.3s;
        }
        .news-read-more:hover { gap: 10px; }
        @media (max-width: 768px) {
          .news-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
