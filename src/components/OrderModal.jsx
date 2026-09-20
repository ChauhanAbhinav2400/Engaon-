import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './Icons';
import { X, Check } from 'lucide-react';

export default function OrderModal({ isOpen, onClose, initialProduct = null }) {
  const products = [
    { id: 'gud', name: 'Traditional Jaggery (Gud)', price: 100 },
    { id: 'powder', name: 'Jaggery Powder (Gud Shakkar)', price: 100 },
    { id: 'cubes', name: 'Jaggery Cubes', price: 100 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [quantity, setQuantity] = useState(2);
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (initialProduct) {
      if (initialProduct.id === 'traditional-gud') setSelectedProduct('gud');
      else if (initialProduct.id === 'gud-shakkar') setSelectedProduct('powder');
      else if (initialProduct.id === 'jaggery-cubes') setSelectedProduct('cubes');
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const currentProd = products.find((p) => p.id === selectedProduct) || products[0];
  const totalPrice = currentProd.price * quantity;

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phone = '919876543210';
    const message = `*New Order Inquiry - Engaon™*\n\n` +
      `*Product:* ${currentProd.name}\n` +
      `*Quantity:* ${quantity} kg\n` +
      `*Estimated Price:* ₹${totalPrice}\n` +
      (customerName ? `*Name:* ${customerName}\n` : '') +
      (city ? `*Delivery City:* ${city}\n` : '') +
      `\nPlease share payment and delivery details.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-badge font-serif">Engaon™ Farm Fresh</span>
          <h2 className="modal-title font-serif">Order Fresh Dhampur Jaggery</h2>
          <p className="modal-subtitle">Direct from our village hearths straight to your doorstep.</p>
        </div>

        <form onSubmit={handleWhatsAppSend} className="order-form">
          {/* Select Product */}
          <div className="form-group">
            <label className="form-label">Choose Variety:</label>
            <div className="modal-products-list">
              {products.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`modal-product-chip ${selectedProduct === p.id ? 'active' : ''}`}
                  onClick={() => setSelectedProduct(p.id)}
                >
                  <span className="chip-name">{p.name}</span>
                  <span className="chip-price">₹{p.price}/kg</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="form-group">
            <label className="form-label">Quantity (kg):</label>
            <div className="quantity-selector">
              <button
                type="button"
                className="qty-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="qty-value">{quantity} kg</span>
              <button
                type="button"
                className="qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              <div className="qty-presets">
                {[1, 2, 5, 10].map((kg) => (
                  <button
                    key={kg}
                    type="button"
                    className={`preset-btn ${quantity === kg ? 'preset-active' : ''}`}
                    onClick={() => setQuantity(kg)}
                  >
                    {kg}kg
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Name & City */}
          <div className="form-row">
            <div className="form-group half">
              <label className="form-label">Your Name (optional):</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Rohit Sharma"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="form-group half">
              <label className="form-label">Delivery City (optional):</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Noida / Delhi"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="order-summary-box">
            <div className="summary-line">
              <span>Selected:</span>
              <strong>{currentProd.name} ({quantity} kg)</strong>
            </div>
            <div className="summary-line total">
              <span>Total Amount:</span>
              <strong className="total-amount">₹{totalPrice}</strong>
            </div>
          </div>

          {/* Action button */}
          <button type="submit" className="btn btn-whatsapp modal-submit-btn">
            <WhatsAppIcon size={20} />
            <span>Proceed to Order on WhatsApp</span>
          </button>
          
          <p className="modal-footnote">
            No upfront payment needed online. Confirm details directly with our team on WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}
