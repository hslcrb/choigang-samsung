import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TROPHIES = [
  { year: '1985', title: 'Korean Series Champions', desc: 'The first championship in franchise history, defeating the Haitai Tigers 4-1.', color: '#FFD700' },
  { year: '2002', title: 'Korean Series Champions', desc: 'A dominant season with 82 wins, sweeping the LG Twins 4-0 in the finals.', color: '#C0C0C0' },
  { year: '2005', title: 'Korean Series Champions', desc: 'Back-to-back titles after beating the Doosan Bears in a thrilling 7-game series.', color: '#FFD700' },
  { year: '2006', title: 'Korean Series Champions', desc: 'Three-peat! Samsung Lions cement their dynasty with a 4-1 victory over Hanwha.', color: '#FFD700' },
  { year: '2011', title: 'Korean Series Champions', desc: 'A 4-1 series win against the SK Wyverns, led by MVP Jang Won-sam.', color: '#FFD700' },
  { year: '2012', title: 'Korean Series Champions', desc: 'Five-game victory over the Lotte Giants to secure back-to-back titles.', color: '#FFD700' },
  { year: '2013', title: 'Korean Series Champions', desc: 'Three-peat again! Defeated the Doosan Bears 4-3 in a classic Game 7.', color: '#FFD700' },
  { year: '2014', title: 'Korean Series Champions', desc: 'Four-peat! An unprecedented fourth consecutive championship in KBO history.', color: '#FFD700' },
]

const HISTORY_MILESTONES = [
  { year: '1982', event: 'Founded as Samsung Lions, joining the KBO as a charter franchise' },
  { year: '1985', event: 'First Korean Series championship victory' },
  { year: '1990', event: 'Moved to Daegu, becoming the city\'s beloved franchise' },
  { year: '2002', event: 'Second championship era begins with a dominant season' },
  { year: '2011', event: 'Start of historic four-peat dynasty' },
  { year: '2016', event: 'New era: Samsung Lions Park opens in Daegu' },
]

export default function TrophyCarousel() {
  const [trophyIndex, setTrophyIndex] = useState(0)
  const [milestoneIndex, setMilestoneIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const trophyPanelRef = useRef<HTMLDivElement>(null)
  const historyPanelRef = useRef<HTMLDivElement>(null)
  const trophyYearRef = useRef<HTMLDivElement>(null)
  const trophyIconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
      gsap.from(trophyPanelRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      })
      gsap.from(historyPanelRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!trophyYearRef.current || !trophyIconRef.current) return
    gsap.fromTo(trophyYearRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' })
    gsap.fromTo(trophyIconRef.current, { rotation: -20, opacity: 0 }, { rotation: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
  }, [trophyIndex])

  useEffect(() => {
    const t = setInterval(() => setTrophyIndex((i) => (i + 1) % TROPHIES.length), 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const m = setInterval(() => setMilestoneIndex((i) => (i + 1) % HISTORY_MILESTONES.length), 4000)
    return () => clearInterval(m)
  }, [])

  const trophy = TROPHIES[trophyIndex]
  const milestone = HISTORY_MILESTONES[milestoneIndex]

  return (
    <section id="history" ref={sectionRef} className="section">
      <div className="container">
        <h2 ref={titleRef} className="section-title">Championship Legacy</h2>
        <div className="carousel-grid">
          <div ref={trophyPanelRef} className="carousel-panel">
            <h3 className="carousel-panel-title">Trophies</h3>
            <div className="trophy-display">
              <div ref={trophyIconRef} className="trophy-icon" style={{ background: trophy.color }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                  <path d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h2m10 6h2a2 2 0 002-2V5a2 2 0 00-2-2h-2M6 21h12M9 3v18M15 3v18"/>
                </svg>
              </div>
              <div ref={trophyYearRef} className="trophy-year">{trophy.year}</div>
              <h4 className="trophy-title">{trophy.title}</h4>
              <p className="trophy-desc">{trophy.desc}</p>
            </div>
            <div className="carousel-dots">
              {TROPHIES.map((_, i) => (
                <button key={i} className={`dot ${i === trophyIndex ? 'dot--active' : ''}`} onClick={() => setTrophyIndex(i)} />
              ))}
            </div>
          </div>

          <div ref={historyPanelRef} className="carousel-panel">
            <h3 className="carousel-panel-title">History Timeline</h3>
            <div className="timeline-display">
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-line" />
              <p className="timeline-event">{milestone.event}</p>
            </div>
            <div className="carousel-dots">
              {HISTORY_MILESTONES.map((_, i) => (
                <button key={i} className={`dot ${i === milestoneIndex ? 'dot--active' : ''}`} onClick={() => setMilestoneIndex(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .carousel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .carousel-panel {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 36px;
          text-align: center;
        }
        .carousel-panel-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-text-muted);
          margin-bottom: 32px;
        }
        .trophy-display { display: flex; flex-direction: column; align-items: center; min-height: 260px; }
        .trophy-icon {
          width: 80px; height: 80px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; transition: background 0.5s ease;
        }
        .trophy-year { font-size: 3rem; font-weight: 900; color: var(--color-accent); line-height: 1; margin-bottom: 12px; }
        .trophy-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 12px; }
        .trophy-desc { font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6; max-width: 360px; }
        .timeline-display { display: flex; flex-direction: column; align-items: center; min-height: 260px; justify-content: center; }
        .timeline-year { font-size: 3rem; font-weight: 900; color: var(--color-accent); line-height: 1; margin-bottom: 16px; }
        .timeline-line { width: 2px; height: 40px; background: var(--color-accent); margin-bottom: 16px; }
        .timeline-event { font-size: 1rem; color: var(--color-text-muted); line-height: 1.7; max-width: 400px; }
        .carousel-dots { display: flex; gap: 8px; justify-content: center; margin-top: 24px; flex-wrap: wrap; }
        .dot {
          width: 10px; height: 10px; border-radius: 50%; border: none;
          background: var(--color-border); cursor: pointer; transition: all 0.3s;
        }
        .dot--active { background: var(--color-accent); transform: scale(1.3); }
        @media (max-width: 768px) { .carousel-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
