import React from "react";
import { SectionLeaf } from "./Icons";

export default function StorySection() {
  return (
    <section id="story" className="story-section">
      <div className="container">
        <div className="story-banner">
          {/* Left: Dhampur signboard over farm view */}
          <div className="story-left-visual">
            <div className="story-image-container">
              <img
                src="/Engaon-/images/story_farm.jpg"
                alt="Dhampur sugarcane fields"
                className="story-farm-img"
              />
              <div className="dhampur-signboard">
                <div className="signboard-wood">
                  <span className="signboard-title font-serif">Dhampur</span>
                  <span className="signboard-sub font-serif">Our Roots</span>
                  <span className="signboard-sub font-serif">Our Pride</span>
                </div>
                <div className="signboard-post left-post"></div>
                <div className="signboard-post right-post"></div>
              </div>
            </div>
          </div>

          {/* Center: Story copy */}
          <div className="story-content">
            <h2 className="story-heading font-serif">
              <SectionLeaf />
              <span>Our Story</span>
            </h2>
            <h3 className="story-subheading font-serif">
              A Little Village. A Lot of Sweetness.
            </h3>

            <p className="story-paragraph">
              Engaon is inspired by the simplicity, traditions and warmth of
              village life. Our roots are connected to Dhampur, a place where
              sugarcane is part of our culture and jaggery is a way of life.
            </p>
            <p className="story-paragraph">
              We started Engaon with a simple idea – to bring traditional,
              natural jaggery closer to modern families while keeping our
              village identity alive.
            </p>

            <div className="story-motto font-serif">
              Engaon – Switch to Gaon, Switch to Purity.
            </div>
          </div>

          {/* Right: Vintage sketch postcard */}
          <div className="story-right-card">
            <div className="vintage-quote-card kraft-tag">
              <div className="card-pin"></div>
              <div className="sketch-illustration">
                {/* Vintage cottage sketch */}
                <svg
                  viewBox="0 0 160 90"
                  className="cottage-svg"
                  fill="none"
                  stroke="#5a3d24"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Sun / hill */}
                  <path
                    d="M10 75 Q 40 45 80 75 Q 120 45 150 75"
                    stroke="#967756"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  {/* Cottage house */}
                  <polygon
                    points="90,40 120,20 150,40"
                    fill="#f5ede2"
                    stroke="#5a3d24"
                    strokeWidth="1.8"
                  />
                  <rect
                    x="96"
                    y="40"
                    width="48"
                    height="35"
                    fill="#fbf8f3"
                    stroke="#5a3d24"
                    strokeWidth="1.8"
                  />
                  <rect
                    x="114"
                    y="52"
                    width="12"
                    height="23"
                    fill="#ecd8bf"
                    stroke="#5a3d24"
                  />
                  <rect
                    x="100"
                    y="47"
                    width="10"
                    height="10"
                    stroke="#5a3d24"
                  />
                  {/* Trees */}
                  <path
                    d="M45 75 L 45 45 M 35 45 C 30 35 40 25 45 25 C 50 25 60 35 55 45 Z"
                    fill="#e2d6c3"
                    stroke="#5a3d24"
                  />
                  <path
                    d="M65 75 L 65 52 M 58 52 C 55 42 62 36 65 36 C 68 36 75 42 72 52 Z"
                    fill="#e2d6c3"
                    stroke="#5a3d24"
                  />
                  {/* Ground line */}
                  <line
                    x1="15"
                    y1="75"
                    x2="150"
                    y2="75"
                    stroke="#7a583a"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="vintage-quote-text font-serif">
                "Good food builds a healthier, happier tomorrow"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
