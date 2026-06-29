export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: 16 }}>
              <span className="logo-icon">CS</span>
              <span className="logo-text">CHOIGANG<span className="logo-accent">SAMSUNG</span></span>
            </div>
            <p className="footer-desc">
              The ultimate destination for Samsung Lions fans. Stay connected with the latest news, tickets, and history of the most decorated team in KBO history.
            </p>
            <div className="footer-social">
              {['Youtube', 'Instagram', 'Twitter', 'Facebook'].map((s) => (
                <a key={s} href="#" className="social-link">{s}</a>
              ))}
            </div>
          </div>
          {[
            { title: 'Quick Links', links: ['Home', 'News', 'Schedule', 'Tickets', 'Shop'] },
            { title: 'Team', links: ['Roster', 'Coaching Staff', 'Front Office', 'History', 'Hall of Fame'] },
            { title: 'Support', links: ['FAQ', 'Contact Us', 'Ticket Help', 'Accessibility', 'Privacy Policy'] },
          ].map((col) => (
            <div key={col.title} className="footer-col">
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="footer-link">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Choigang Samsung. All rights reserved.</p>
          <p>This is a fan project. Not affiliated with Samsung Lions or KBO.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-bg-card);
          border-top: 1px solid var(--color-border);
          padding: 64px 0 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-desc {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .footer-social {
          display: flex;
          gap: 16px;
        }
        .social-link {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          transition: color 0.3s;
        }
        .social-link:hover {
          color: var(--color-accent);
        }
        .footer-col-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          color: var(--color-text);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-link {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: var(--color-accent);
        }
        .footer-bottom {
          border-top: 1px solid var(--color-border);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--color-text-muted);
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
