import React, { useState } from 'react';
import { LeafSprout, WhatsAppIcon } from './Icons';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenOrderModal, onOpenRecipeModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Our Products', href: '#products' },
    { label: 'Our Process', href: '#process' },
    { label: 'Our Story', href: '#story' },
    { label: 'Purity & Health', href: '#purity' },
    { label: 'How to Order', href: '#how-to-order' },
    { label: 'Recipes', href: '#recipes' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.label === 'Recipes' || link.href === '#recipes') {
      if (onOpenRecipeModal) onOpenRecipeModal();
      return;
    }
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            const el = document.querySelector('#home');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="logo-main">
            <span className="logo-text font-serif">Engaon</span>
            <span className="logo-tm">™</span>
            <span className="logo-sprout">
              <LeafSprout className="sprout-icon" />
            </span>
          </div>
          <span className="logo-tagline">Switch to Gaon, Switch to Purity.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${link.active ? 'nav-link-active' : ''}`}
              onClick={(e) => handleLinkClick(e, link)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp CTA Button */}
        <div className="nav-actions">
          <button
            onClick={() => onOpenOrderModal ? onOpenOrderModal() : window.open('https://wa.me/919876543210?text=Hello%20Engaon,%20I%20want%20to%20order%20pure%20Dhampur%20jaggery.', '_blank')}
            className="btn btn-whatsapp nav-cta"
            aria-label="Order on WhatsApp"
          >
            <WhatsAppIcon size={18} />
            <span>Order on WhatsApp</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-list">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal ? onOpenOrderModal() : window.open('https://wa.me/919876543210?text=Hello%20Engaon,%20I%20want%20to%20order%20pure%20Dhampur%20jaggery.', '_blank');
              }}
              className="btn btn-whatsapp"
              style={{ width: '100%', marginTop: '12px' }}
            >
              <WhatsAppIcon size={18} />
              <span>Order on WhatsApp</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
