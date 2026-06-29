import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'News', href: '#news' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'History', href: '#history' },
  { label: 'Shop', href: '#shop' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-icon">CS</span>
          <span className="logo-text">CHOIGANG<span className="logo-accent">SAMSUNG</span></span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            )}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--header-bg);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
          transition: background 0.3s ease;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--color-accent);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.85rem;
          color: #fff;
        }
        .logo-text {
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 2px;
        }
        .logo-accent {
          color: var(--color-accent);
          margin-left: 4px;
        }
        .nav-list {
          display: flex;
          gap: 32px;
        }
        .nav-link {
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          transition: color 0.3s;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-accent);
          transition: width 0.3s;
        }
        .nav-link:hover {
          color: var(--color-text);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .theme-toggle {
          background: none;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          color: var(--color-text-muted);
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .theme-toggle:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger-line {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-text);
          transition: all 0.3s;
          border-radius: 1px;
        }
        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            background: var(--header-bg);
            backdrop-filter: blur(12px);
            padding: 24px;
            transform: translateY(-120%);
            transition: transform 0.3s ease;
            border-bottom: 1px solid var(--color-border);
          }
          .nav--open {
            transform: translateY(0);
          }
          .nav-list {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
