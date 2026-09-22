import React from 'react';
import { LeafSprout, InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';
import { ChevronUp } from 'lucide-react';

export default function Footer({ onOpenRecipeModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.label === 'Recipes' || link.href === '#recipes') {
      if (onOpenRecipeModal) onOpenRecipeModal();
      return;
    }
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Products', href: '#products' },
    { label: 'Our Story', href: '#story' },
    { label: 'How to Order', href: '#how-to-order' },
    { label: 'Recipes', href: '#recipes' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">
        
        {/* Top Footer Row */}
        <div className="footer-top-row">
          {/* Brand Logo */}
          <div className="footer-brand">
            <div className="footer-logo-main">
              <span className="footer-logo-text font-serif">Engaon</span>
              <span className="footer-logo-tm">™</span>
              <span className="footer-logo-sprout">
                <LeafSprout className="footer-sprout" color="#48bb78" />
              </span>
            </div>
            <span className="footer-tagline">Switch to Gaon, Switch to Purity.</span>
          </div>

          {/* Nav Links with Pipe Dividers */}
          <nav className="footer-nav">
            {footerLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {link.label}
                </a>
                {idx < footerLinks.length - 1 && (
                  <span className="footer-pipe">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="footer-right-actions">
            <div className="footer-social-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="scroll-top-btn"
              aria-label="Scroll back to top"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer Row */}
        <div className="footer-bottom-row">
          <p className="footer-copy">© 2026 Engaon. All rights reserved.</p>
          <p className="footer-credit">Made with <span className="heart-icon">❤️</span> for a healthier, sweeter India.</p>
        </div>

      </div>
    </footer>
  );
}
