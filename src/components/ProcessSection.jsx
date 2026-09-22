import React from "react";
import { SectionLeaf } from "./Icons";
import { ArrowRight } from "lucide-react";

export default function ProcessSection({ onOpenProcessModal }) {
  const steps = [
    {
      num: "1",
      title: "Fresh Sugarcane Selection",
      description:
        "We source quality sugarcane from farms in and around Dhampur.",
      image: "/Engaon-/images/step1_sugarcane.jpg",
      alt: "Sugarcane selection from farms",
      position: "center",
    },
    {
      num: "2",
      title: "Juice Extraction",
      description: "Sugarcane is crushed to extract fresh juice.",
      image: "/Engaon-/images/step2_crushing.jpg",
      alt: "Fresh sugarcane juice extraction with crusher",
      position: "center",
    },
    {
      num: "3",
      title: "Filtration & Boiling",
      description:
        "The juice is filtered and slowly boiled using traditional methods.",
      image: "/Engaon-/images/step3_boiling.jpg",
      alt: "Traditional boiling in large kadai",
      position: "center",
    },
    {
      num: "4",
      title: "Thickening",
      description:
        "The juice is cooked to the right consistency with care and experience.",
      image: "/Engaon-/images/step4_thickening.jpg",
      alt: "Cooking and thickening jaggery syrup",
      position: "center 40%",
    },
    {
      num: "5",
      title: "Cooling & Setting",
      description: "The concentrated jaggery is cooled and set into blocks.",
      image: "/Engaon-/images/step5_setting.jpg",
      alt: "Cooling and setting into jaggery blocks in traditional molds",
      position: "center 75%",
    },
    {
      num: "6",
      title: "Packed with Care",
      description:
        "We pack the jaggery hygienically so it reaches your home fresh.",
      image: "/Engaon-/images/step6_packing.jpg",
      alt: "Hygienically packed jaggery in kraft paper pouches",
      position: "center 20%",
    },
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <SectionLeaf />
              <span>Our Process</span>
            </h2>
            <p className="section-subtitle">
              From Sugarcane to Jaggery – A Journey of Purity
            </p>
          </div>
          <button
            onClick={() => (onOpenProcessModal ? onOpenProcessModal() : null)}
            className="btn btn-outline"
          >
            <span>Learn More</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Process Timeline Flow */}
        <div className="process-flow">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="process-step-card">
                <div className="process-circle-wrap">
                  <div className="process-circle-badge">{step.num}</div>
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="process-circle-img"
                    style={{ objectPosition: step.position }}
                    loading="lazy"
                  />
                </div>
                <h3 className="process-step-title font-serif">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>

              {/* Connecting arrow except last step */}
              {idx < steps.length - 1 && (
                <div className="process-arrow-indicator" aria-hidden="true">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
