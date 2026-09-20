import React from 'react';
import {
  SectionLeaf,
  WhatsAppIcon,
  ChemicalFreeIcon,
  TraditionalPotIcon,
  SugarcaneIcon,
  TractorIcon,
  FamilyHeartIcon
} from './Icons';
import { ShoppingCart, MapPin, IndianRupee, Truck, ArrowRight } from 'lucide-react';

export default function OrderAndWhySection({ onOpenOrderModal, onOpenRecipeModal }) {
  const orderSteps = [
    {
      num: 1,
      title: 'Choose Product & Quantity',
      icon: <ShoppingCart size={22} color="#7d4712" />
    },
    {
      num: 2,
      title: 'Contact Us on WhatsApp',
      icon: <WhatsAppIcon size={22} color="#1e7c47" />
    },
    {
      num: 3,
      title: 'Share Delivery Details',
      icon: <MapPin size={22} color="#7d4712" />
    },
    {
      num: 4,
      title: 'Confirm & Pay',
      icon: <IndianRupee size={22} color="#7d4712" />
    },
    {
      num: 5,
      title: 'Get Your Order Delivered',
      icon: <Truck size={22} color="#7d4712" />
    },
  ];

  const whyBenefits = [
    {
      title: 'No Added Chemicals',
      icon: <ChemicalFreeIcon size={24} color="#1e7c47" />
    },
    {
      title: 'Traditional Taste',
      icon: <TraditionalPotIcon size={24} color="#1e7c47" />
    },
    {
      title: 'Naturally Nutritious',
      icon: <SugarcaneIcon size={24} color="#1e7c47" />
    },
    {
      title: 'Supports Rural India',
      icon: <TractorIcon size={24} color="#1e7c47" />
    },
    {
      title: 'Good for Your Family',
      icon: <FamilyHeartIcon size={24} color="#1e7c47" />
    },
  ];

  return (
    <section id="how-to-order" className="order-why-section">
      <div className="container">
        <div className="order-why-grid">
          
          {/* Left Column: How to Order */}
          <div className="how-to-order-col">
            <div className="col-header">
              <h2 className="section-title">
                <SectionLeaf />
                <span>How to Order</span>
              </h2>
              <p className="section-subtitle">Getting your favourite Engaon jaggery is simple.</p>
            </div>

            {/* 5 Step icons */}
            <div className="order-steps-container">
              {orderSteps.map((step) => (
                <div key={step.num} className="order-step-item">
                  <div className="order-step-circle">
                    {step.icon}
                  </div>
                  <span className="order-step-label">
                    <strong className="order-step-num">{step.num}. </strong>
                    {step.title.replace(/^\d+\.\s*/, '')}
                  </span>
                </div>
              ))}
            </div>

            <div className="order-cta-wrap">
              <button
                onClick={() => onOpenOrderModal ? onOpenOrderModal() : window.open('https://wa.me/919876543210?text=Hello%20Engaon,%20I%20want%20to%20place%20an%20order.', '_blank')}
                className="btn btn-whatsapp full-width-mobile"
              >
                <WhatsAppIcon size={18} />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Why Choose Engaon */}
          <div className="why-choose-col">
            <div className="col-header">
              <h2 className="section-title">
                <SectionLeaf />
                <span>Why Choose Engaon?</span>
              </h2>
            </div>

            {/* 5 Benefits Row */}
            <div className="why-benefits-row">
              {whyBenefits.map((item, idx) => (
                <div key={idx} className="why-benefit-item">
                  <div className="why-icon-circle">
                    {item.icon}
                  </div>
                  <span className="why-title">{item.title}</span>
                </div>
              ))}
            </div>

            {/* Try Traditional Recipes Banner */}
            <div id="recipes" className="recipes-banner">
              <div className="recipes-banner-img-wrap">
                <img
                  src="/images/recipe_dish.jpg"
                  alt="Traditional gud dessert dish"
                  className="recipes-banner-img"
                />
              </div>
              <div className="recipes-banner-text">
                <h3 className="recipes-banner-title font-serif">Try Traditional Recipes</h3>
                <p className="recipes-banner-desc">
                  From gud wali chai to healthy desserts, explore simple and tasty recipes.
                </p>
              </div>
              <div className="recipes-banner-action">
                <button
                  onClick={() => onOpenRecipeModal ? onOpenRecipeModal() : null}
                  className="btn btn-white"
                >
                  <span>View Recipes</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
