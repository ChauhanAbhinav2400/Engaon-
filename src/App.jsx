import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValueRibbon from './components/ValueRibbon';
import ProductsSection from './components/ProductsSection';
import ProcessSection from './components/ProcessSection';
import StorySection from './components/StorySection';
import Purity3DSection from './components/Purity3DSection';
import OrderAndWhySection from './components/OrderAndWhySection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import RecipeModal from './components/RecipeModal';
import ProcessModal from './components/ProcessModal';
import './App.css';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [recipeModalOpen, setRecipeModalOpen] = useState(false);
  const [processModalOpen, setProcessModalOpen] = useState(false);

  const handleOpenOrder = (product = null) => {
    setSelectedProduct(product);
    setOrderModalOpen(true);
  };

  return (
    <div className="engaon-app">
      {/* Navigation Bar */}
      <Navbar
        onOpenOrderModal={() => handleOpenOrder(null)}
        onOpenRecipeModal={() => setRecipeModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection onOpenOrderModal={() => handleOpenOrder(null)} />

        {/* 6 Value Badges Ribbon */}
        <ValueRibbon />

        {/* Products Section */}
        <ProductsSection onSelectProduct={(prod) => handleOpenOrder(prod)} />

        {/* Process Section */}
        <ProcessSection onOpenProcessModal={() => setProcessModalOpen(true)} />

        {/* Story Section */}
        <StorySection />

        {/* Interactive 3D Anatomy of Purity & Body Health Section */}
        <Purity3DSection />

        {/* How to Order & Why Choose Engaon */}
        <OrderAndWhySection
          onOpenOrderModal={() => handleOpenOrder(null)}
          onOpenRecipeModal={() => setRecipeModalOpen(true)}
        />

        {/* Customer Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenRecipeModal={() => setRecipeModalOpen(true)} />

      {/* Interactive Modals */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialProduct={selectedProduct}
      />

      <RecipeModal
        isOpen={recipeModalOpen}
        onClose={() => setRecipeModalOpen(false)}
      />

      <ProcessModal
        isOpen={processModalOpen}
        onClose={() => setProcessModalOpen(false)}
      />
    </div>
  );
}
