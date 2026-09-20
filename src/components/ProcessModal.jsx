import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ProcessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const stepsDetail = [
    {
      num: 1,
      title: 'Fresh Sugarcane Selection',
      desc: 'Sourced from organic and smallholder farmers of Dhampur (Bijnor district, UP), known across India for high-sucrose, rich mineral sugarcane crops.',
      points: ['Harvested at peak maturity', 'Zero chemical fertilizers used in select farms', 'Hand-inspected stalks']
    },
    {
      num: 2,
      title: 'Juice Extraction',
      desc: 'Cold-crushed using clean stainless-steel machinery within hours of harvest to preserve the natural enzymes and refreshing sweet juice.',
      points: ['Instant cold pressing', 'High yield extraction', 'Hygienic collection chambers']
    },
    {
      num: 3,
      title: 'Filtration & Boiling',
      desc: 'Boiled in traditional open shallow iron pans (kadhais). Natural clarifying agents like okra (bhindi) plant mucilage are used instead of sodium hydrosulphite.',
      points: ['100% vegetable clarification', 'No chemical bleaching', 'Slow firewood simmer']
    },
    {
      num: 4,
      title: 'Thickening',
      desc: 'Expert village craftsmen (halwais) manually paddle the concentrate until it turns into a thick, glossy golden-amber molten syrup.',
      points: ['Constant gentle aeration', 'Strict temperature control', 'Signature aroma develops here']
    },
    {
      num: 5,
      title: 'Cooling & Setting',
      desc: 'Poured into traditional wooden cooling troughs, aerated, and gently scored into square blocks or rustic rounds before solidifying.',
      points: ['Natural air cooling', 'No synthetic hardening agents', 'Pure mineral retention']
    },
    {
      num: 6,
      title: 'Packed with Care',
      desc: 'Wrapped in moisture-resistant, food-grade eco-friendly pouches ensuring long shelf life, retaining the freshness and crisp aroma.',
      points: ['Zero plastic contamination', 'Airtight packaging', 'Despatched straight to your home']
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container process-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close process modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-badge font-serif">A Journey of Purity</span>
          <h2 className="modal-title font-serif">From Sugarcane to Golden Jaggery</h2>
          <p className="modal-subtitle">How we maintain century-old artisanal village practices without chemicals.</p>
        </div>

        <div className="process-details-scroll">
          {stepsDetail.map((step) => (
            <div key={step.num} className="process-modal-step">
              <div className="step-badge-num">{step.num}</div>
              <div className="step-detail-content">
                <h3 className="step-detail-title font-serif">{step.title}</h3>
                <p className="step-detail-desc">{step.desc}</p>
                <div className="step-points-list">
                  {step.points.map((pt, idx) => (
                    <span key={idx} className="step-point-chip">
                      <CheckCircle2 size={13} color="#27ae60" />
                      <span>{pt}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
