export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Company Info */}
        <div className="footer-section">
          <h4>Gritsa Technologies</h4>
          <p>
            Building modern, scalable and high-performance digital products
            with clean UI and strong logic.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 +91 99580 29853</p>
          <p>✉️ lovekumar714283@gmail.com</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Connect</h4>
          <a
            href="https://www.linkedin.com/in/love-kumar-327299212/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/LoveKumar7142"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>
          <a
            href="https://lovecode.icu/"
            target="_blank"
            rel="noreferrer"
          >
            🌐 Portfolio
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Gritsa Technologies. All rights reserved.
      </div>
    </footer>
  );
}
