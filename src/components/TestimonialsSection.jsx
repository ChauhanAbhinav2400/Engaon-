import React from 'react';
import { SectionLeaf, StarIcon } from './Icons';

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      quote: '"Amazing taste and very pure jaggery. Reminds me of childhood!"',
      author: 'Rohit S., Ghaziabad',
      stars: 5,
    },
    {
      id: 2,
      quote: '"Best quality jaggery at a reasonable price. Will order again."',
      author: 'Priya M., Delhi',
      stars: 5,
    },
    {
      id: 3,
      quote: '"Love the natural taste and packaging. Highly recommended!"',
      author: 'Amit K., Noida',
      stars: 5,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <SectionLeaf />
              <span>What Our Customers Say</span>
            </h2>
            <p className="section-subtitle">Real people. Real feedback.</p>
          </div>
        </div>

        {/* Testimonials layout: 3 review cards + 1 brand quote kraft card */}
        <div className="testimonials-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="testimonial-card">
              <p className="testimonial-quote">{rev.quote}</p>
              <div className="testimonial-footer">
                <span className="testimonial-author">{rev.author}</span>
                <div className="testimonial-stars" aria-label={`${rev.stars} stars`}>
                  {[...Array(rev.stars)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Right Brand Kraft Card */}
          <div className="testimonials-brand-card kraft-tag">
            <div className="brand-card-content">
              <span className="brand-card-text font-serif">"Switch to Gaon,</span>
              <span className="brand-card-text font-serif">Switch to Purity."</span>
            </div>
            {/* Green sugarcane illustration */}
            <div className="brand-card-illustration">
              <svg viewBox="0 0 60 70" width="46" height="54" fill="none" stroke="#2d7a46" strokeWidth="2.5" strokeLinecap="round">
                <path d="M40 68 Q 38 40 46 10" />
                <path d="M46 10 Q 55 18 58 35" strokeWidth="1.8" />
                <path d="M42 30 Q 30 20 22 25" strokeWidth="1.8" />
                <path d="M30 68 Q 28 45 22 18" />
                <path d="M22 18 Q 12 25 8 40" strokeWidth="1.8" />
                <path d="M25 40 Q 35 32 40 38" strokeWidth="1.8" />
                <path d="M20 68 Q 15 50 12 35" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
