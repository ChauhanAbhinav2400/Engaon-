import React from "react";
import { SectionLeaf } from "./Icons";
import { ArrowRight } from "lucide-react";

export default function ProductsSection({ onSelectProduct }) {
  const products = [
    {
      id: "traditional-gud",
      title: "Traditional Jaggery (Gud)",
      description:
        "Rich taste, natural sweetness and full of traditional goodness.",
      price: "₹100 per kg",
      image: "/images/product_gud.jpg",
      alt: "Traditional Indian Jaggery blocks Gud",
    },
    {
      id: "gud-shakkar",
      title: "Jaggery Powder (Gud Shakkar)",
      description: "Easy to use. Perfect for daily cooking and beverages.",
      price: "₹100 per kg",
      image: "/images/product_powder.jpg",
      alt: "Fine organic Jaggery Powder Gud Shakkar",
    },
    {
      id: "jaggery-cubes",
      title: "Jaggery Cubes",
      description: "Convenient, natural and delicious.",
      price: "₹100 per kg",
      image: "/images/product_cubes.jpg",
      alt: "Natural pure Jaggery Cubes in rustic bowl",
    },
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <SectionLeaf />
              <span>Our Products</span>
            </h2>
            <p className="section-subtitle">Simple. Natural. Wholesome.</p>
          </div>
          <button
            onClick={() =>
              onSelectProduct ? onSelectProduct(products[0]) : null
            }
            className="btn btn-outline"
          >
            <span>View All Products</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3 className="product-title font-serif">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-price">{product.price}</div>
                <button
                  onClick={() =>
                    onSelectProduct
                      ? onSelectProduct(product)
                      : window.open(
                        `https://wa.me/919876543210?text=Hello%20Engaon,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.title)}`,
                        "_blank",
                      )
                  }
                  className="btn btn-whatsapp product-cta"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
