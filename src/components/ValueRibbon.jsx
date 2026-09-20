import React from 'react';
import {
  SugarcaneIcon,
  TraditionalPotIcon,
  FamilyHeartIcon,
  TrustBadgeIcon,
  ChemicalFreeIcon
} from './Icons';
import { MapPin } from 'lucide-react';

export default function ValueRibbon() {
  const items = [
    {
      icon: <ChemicalFreeIcon size={26} />,
      line1: '100% Natural',
      line2: 'No Added Chemicals'
    },
    {
      icon: <TraditionalPotIcon size={26} />,
      line1: 'Traditional',
      line2: 'Preparation'
    },
    {
      icon: <SugarcaneIcon size={26} />,
      line1: 'Made from',
      line2: 'Fresh Sugarcane'
    },
    {
      icon: <MapPin size={26} strokeWidth={1.8} color="#2d7a46" />,
      line1: 'From Dhampur',
      line2: 'Uttar Pradesh'
    },
    {
      icon: <FamilyHeartIcon size={26} />,
      line1: 'Goodness for',
      line2: 'Your Family'
    },
    {
      icon: <TrustBadgeIcon size={26} />,
      line1: 'Pure Taste',
      line2: 'Pure Trust'
    }
  ];

  return (
    <section className="value-ribbon-section">
      <div className="container ribbon-container">
        <div className="ribbon-grid">
          {items.map((item, idx) => (
            <div key={idx} className="ribbon-item">
              <div className="ribbon-icon-circle">
                {item.icon}
              </div>
              <div className="ribbon-text">
                <span className="ribbon-line1">{item.line1}</span>
                <span className="ribbon-line2">{item.line2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
