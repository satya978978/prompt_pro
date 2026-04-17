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

export default PricingSection