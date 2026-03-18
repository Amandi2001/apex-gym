import React from 'react';

const Pricing = () => {
  const plans = [
    { name: 'Basic', price: '29', features: ['Gym Access (5am-5pm)', 'Locker Room', '1 Free Orientation'], popular: false },
    { name: 'Pro', price: '59', features: ['24/7 Gym Access', 'Group Classes', 'Monthly Progress Report'], popular: true },
    { name: 'Elite', price: '99', features: ['Personal Trainer', 'Nutrition Plans', 'Spa & Sauna Access'], popular: false },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-wrapper">
        <h2 className="section-title">Membership Plans</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular-plan' : ''}`}>
              {plan.popular && <span className="popular-badge">MOST POPULAR</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                ${plan.price}<span>/mo</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <button className="pricing-buy-btn">Join Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;