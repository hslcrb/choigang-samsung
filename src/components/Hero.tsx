export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-badge">2026 Season</span>
        <h1 className="hero-title">
          FOR THE <span className="text-accent">GREATER</span><br />
          GOOD OF SAMSUNG
        </h1>
        <p className="hero-subtitle">
          Witness the legend. From the golden era to the next dynasty — experience the pride of Samsung Lions.
        </p>
        <div className="hero-actions">
          <a href="#tickets" className="btn btn-primary">
            Get Tickets
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#history" className="btn btn-outline">
            Explore History
          </a>
        </div>
        <div className="hero-stats">
          {[
            { num: '8', label: 'KBO Championships' },
            { num: '14', label: 'Korean Series Appearances' },
            { num: '1982', label: 'Founded' },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-num">{s.num}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #0a0a1a 0%, #1a237e 50%, #0a0a1a 100%);
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(26, 35, 126, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(255, 111, 0, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          padding-top: 80px;
        }
        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          border: 1px solid var(--color-accent);
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent);
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -2px;
          max-width: 700px;
          margin-bottom: 24px;
        }
        .text-accent {
          color: var(--color-accent);
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 500px;
          margin-bottom: 36px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 64px;
          flex-wrap: wrap;
        }
        .hero-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
        }
        .hero-stat-num {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--color-accent);
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-stats {
            gap: 24px;
          }
          .hero-stat-num {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  )
}
