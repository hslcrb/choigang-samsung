const PARTNERS = ['Samsung Electronics', 'KBO', 'Daegu City', 'Adidas', 'Coca-Cola', 'KT']
const GALLERY_IMAGES = [
  '🏟️', '🏆', '⚾', '👏', '🔥', '⭐',
]

export default function Misc() {
  return (
    <section className="section">
      <div className="container">
        {/* Partners */}
        <div className="misc-block">
          <h3 className="misc-block-title">Official Partners</h3>
          <div className="partners-grid">
            {PARTNERS.map((p) => (
              <div key={p} className="partner-item">{p}</div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="misc-block">
          <h3 className="misc-block-title">Stadium Moments</h3>
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((emoji, i) => (
              <div key={i} className="gallery-item">
                <span className="gallery-emoji">{emoji}</span>
                <span className="gallery-label">Moment {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-card">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Connected</h3>
            <p className="newsletter-desc">
              Subscribe to the Choigang Samsung newsletter for exclusive updates, giveaways, and behind-the-scenes content.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .misc-block {
          margin-bottom: 64px;
        }
        .misc-block-title {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-text-muted);
          text-align: center;
          margin-bottom: 32px;
        }
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        .partner-item {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 20px 16px;
          text-align: center;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          transition: all 0.3s;
        }
        .partner-item:hover {
          border-color: var(--color-accent);
          color: var(--color-text);
          transform: translateY(-2px);
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        .gallery-item {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 32px 16px;
          text-align: center;
          transition: all 0.3s;
          cursor: pointer;
        }
        .gallery-item:hover {
          border-color: var(--color-accent);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(255, 111, 0, 0.1);
        }
        .gallery-emoji {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 8px;
        }
        .gallery-label {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }
        .newsletter-card {
          background: linear-gradient(135deg, var(--color-primary), var(--color-bg-card));
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 48px;
          text-align: center;
        }
        .newsletter-content {
          max-width: 500px;
          margin: 0 auto;
        }
        .newsletter-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .newsletter-desc {
          color: var(--color-text-muted);
          margin-bottom: 28px;
          line-height: 1.7;
        }
        .newsletter-form {
          display: flex;
          gap: 12px;
          max-width: 440px;
          margin: 0 auto;
        }
        .newsletter-input {
          flex: 1;
          padding: 12px 20px;
          border: 1px solid var(--color-border);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-text);
          font-family: var(--font-primary);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .newsletter-input:focus {
          border-color: var(--color-accent);
        }
        .newsletter-input::placeholder {
          color: var(--color-text-muted);
        }
        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .newsletter-card {
            padding: 32px 24px;
          }
          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}
