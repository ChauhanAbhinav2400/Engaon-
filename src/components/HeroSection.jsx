import React from 'react';
import { LeafSprout, WhatsAppIcon } from './Icons';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenOrderModal }) {
  const scrollToProducts = (e) => {
    e.preventDefault();
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-backdrop-glow"></div>
      <div className="container hero-container">
        
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="hero-brand-header">
            <div className="hero-logo-box">
              <span className="hero-logo-text font-serif">Engaon</span>
              <span className="hero-logo-tm">™</span>
              <span className="hero-logo-sprout">
                <LeafSprout className="hero-sprout-svg" />
              </span>
            </div>
            <h1 className="hero-tagline">Switch to Gaon, Switch to Purity.</h1>
          </div>

          <h2 className="hero-subhead font-serif">Natural Jaggery from the Fields of Dhampur</h2>

          <p className="hero-description">
            Pure, wholesome and traditionally prepared jaggery for a healthier you and a sweeter tomorrow.
          </p>

          <div className="hero-ctas">
            <a href="#products" onClick={scrollToProducts} className="btn btn-brown">
              <span>Our Products</span>
              <ArrowRight size={16} />
            </a>

            <button
              onClick={() => onOpenOrderModal ? onOpenOrderModal() : window.open('https://wa.me/919876543210?text=Hello%20Engaon,%20I%20want%20to%20order%20pure%20Dhampur%20jaggery.', '_blank')}
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={18} />
              <span>Order Now</span>
            </button>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="hero-visual">
          {/* Top-right handwritten accent */}
          <div className="hero-handwritten-note font-hand">
            <span>Desh ki mitti,</span>
            <span>Desh ka swaad</span>
          </div>

          {/* Main Hero Image */}
          <div className="hero-image-frame">
            <img
              src="/images/hero.jpg"
              alt="Natural Jaggery blocks with fresh sugarcane from Dhampur"
              className="hero-main-img"
              loading="eager"
            />
          </div>

          {/* Bottom-right vintage kraft card */}
          <div className="hero-kraft-badge kraft-tag font-hand">
            <div className="badge-pin"></div>
            <p className="badge-text">Goodness from our village to your home</p>
          </div>
        </div>

      </div>
    </section>
  );
}
