'use client'

import { useState } from 'react'

// Navbar Component
import './about/page'
import About from './about/page'

// Hero Component
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <img
            src="/bg.jpg"
            alt="AI Technology Background"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">
              <span className="highlight">Prompt Improver</span>

            </h1>
            <h1 className="text-10xl md:text-6xl hero2">
              <span className="highlight">a extension that Prompt Improver</span>

            </h1>
            
            <div className="hero-buttons ">
              <button className="btn-primary flex justify-center align-baseline gap-2">    <span> <img className='h-5 '
                src="/downloads.png"
                alt="AI Technology Background"
              /></span>Download </button>

              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Pricing Card Component
function PricingCard({ title, price, features, buttonText }) {
  return (
    <div className="pricing-card">
      <h3 className="card-title">{title}</h3>
      <div className="card-price">{price}</div>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn-card">{buttonText}</button>
    </div>
  )
}

// Pricing Section Component
function PricingSection() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$1.89/month",
      features: [
        "100 prompt improvements",
        "Basic AI assistance",
        "Email support",
        "Mobile app access"
      ],
      buttonText: "Get Started"
    },
    {
      title: "Professional",
      price: "$19/Year",
      features: [
        "Unlimited improvements",
        "Advanced AI features",
        "Priority support",
        "Custom templates",
        "Team collaboration"
      ],
      buttonText: "Start Free Trial"
    }
  ]

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Main App Component
export default function Home() {
  return (
    <div className="app">
      <Hero />
      <About  />
      <PricingSection />
    </div>
  )
}