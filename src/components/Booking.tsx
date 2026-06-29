import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const UPCOMING_GAMES = [
  { date: 'Jul 3', opponent: 'LG Twins', time: '18:30', venue: 'Daegu Samsung Lions Park', status: 'On Sale' },
  { date: 'Jul 5', opponent: 'KT Wiz', time: '17:00', venue: 'Daegu Samsung Lions Park', status: 'On Sale' },
  { date: 'Jul 7', opponent: 'NC Dinos', time: '18:30', venue: 'Changwon NC Park', status: 'Presale' },
  { date: 'Jul 10', opponent: 'Doosan Bears', time: '14:00', venue: 'Jamsil Baseball Stadium', status: 'Coming Soon' },
]

export default function Booking() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const tableRef = useRef<HTMLTableElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
      const rows = tableRef.current?.querySelectorAll('tbody tr')
      if (rows) {
        gsap.from(rows, {
          opacity: 0,
          x: -30,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: tableRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        })
      }
      const btns = document.querySelectorAll('.booking-actions .btn')
      gsap.from(btns, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.booking-actions', start: 'top 90%', toggleActions: 'play none none reverse' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="tickets" ref={sectionRef} className="section" style={{ background: 'var(--color-bg-section)' }}>
      <div className="container">
        <h2 ref={titleRef} className="section-title">Tickets & Schedule</h2>
        <p className="booking-intro">
          Secure your seats for the next chapter of Samsung Lions history. Choose from single game tickets, season passes, or premium VIP packages.
        </p>
        <div className="booking-table-wrap">
          <table ref={tableRef} className="booking-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Opponent</th>
                <th>Time</th>
                <th>Venue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {UPCOMING_GAMES.map((g) => (
                <tr key={g.date + g.opponent}>
                  <td className="td-date">{g.date}</td>
                  <td className="td-opponent">{g.opponent}</td>
                  <td>{g.time}</td>
                  <td className="td-venue">{g.venue}</td>
                  <td>
                    <span className={`status status--${g.status.toLowerCase().replace(' ', '-')}`}>
                      {g.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="booking-actions">
          <a href="#" className="btn btn-primary">View Full Schedule</a>
          <a href="#" className="btn btn-outline">Season Pass Info</a>
        </div>
      </div>

      <style>{`
        .booking-intro {
          text-align: center;
          color: var(--color-text-muted);
          max-width: 640px;
          margin: -24px auto 40px;
          font-size: 1rem;
          line-height: 1.7;
        }
        .booking-table-wrap { overflow-x: auto; margin-bottom: 32px; }
        .booking-table {
          width: 100%;
          border-collapse: collapse;
          background: var(--color-bg-card);
          border-radius: 12px;
          overflow: hidden;
        }
        .booking-table th {
          background: var(--color-primary);
          color: #fff;
          padding: 16px 20px;
          text-align: left;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
        }
        .booking-table td {
          padding: 16px 20px;
          border-bottom: 1px solid var(--color-border);
          font-size: 0.9rem;
        }
        .booking-table tbody tr:hover { background: rgba(255, 111, 0, 0.05); }
        .td-opponent { font-weight: 700; }
        .td-venue { color: var(--color-text-muted); font-size: 0.85rem; }
        .td-date { font-weight: 600; }
        .status {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .status--on-sale { background: rgba(0, 230, 118, 0.15); color: var(--color-success); }
        .status--presale { background: rgba(255, 111, 0, 0.15); color: var(--color-accent); }
        .status--coming-soon { background: rgba(158, 158, 184, 0.15); color: var(--color-text-muted); }
        .booking-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
      `}</style>
    </section>
  )
}
