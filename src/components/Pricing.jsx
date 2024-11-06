import React from 'react';
import { FaCheck } from 'react-icons/fa';
import TypeformButton from './TypeformButton';

const PricingTier = ({ name, price, features, isPopular }) => (
  <div className={`card hover-transform hover-border hover-glow group ${isPopular ? 'border-2 border-teal-500' : ''}`}>
    {isPopular && <div className="text-sm md:text-base text-teal-500 font-semibold mb-2 md:mb-4">Most Popular</div>}
    <h3 className="text-xl md:text-2xl font-medium mb-2 md:mb-4 text-white transition-colors duration-300 group-hover:text-teal-400">{name}</h3>
    <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-teal-500 transition-colors duration-300 group-hover:text-teal-300">
      ${price}<span className="text-lg md:text-xl text-gray-400 group-hover:text-gray-300">/mo</span>
    </div>
    <ul className="mb-6 md:mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2 text-sm md:text-base text-gray-300 transition-colors duration-300 group-hover:text-white">
          <FaCheck className="text-teal-500 mr-2 transition-transform duration-300 group-hover:scale-110" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <TypeformButton className={`w-full py-2 md:py-3 px-4 rounded text-sm md:text-base ${isPopular ? 'bg-teal-500 text-white' : 'bg-dark-200 text-gray-300'} hover:bg-opacity-90 transition-all duration-300 group-hover:shadow-lg group-hover:translate-y-1`}>
      Choose Plan
    </TypeformButton>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 449,
      features: [
        "3 Automation Processes",
        "Basic Analytics",
        "Email Support",
        "Bi-Weekly Consultation Calls",
        "Perfect for startups and small businesses"
      ]
    },
    {
      name: "Professional",
      price: 749,
      features: [
        "5 Automation Processes",
        "Detailed Analytics",
        "Priority Support",
        "Weekly Consultation Calls",
        "Enhanced Process Monitoring"
      ],
      isPopular: true
    },
    {
      name: "Custom Plan",
      price: null,
      features: [
        "Tailored Automation Solutions",
        "Custom Analytics Package",
        "Dedicated Support Team",
        "Flexible Consultation Schedule",
        "Scalable Process Integration",
        "Enterprise-Grade Solutions"
      ]
    }
  ];

  return (
    <section id="pricing" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title slide-up">Pricing Plans</h2>
        <div className="responsive-grid">
          {plans.map((plan, index) => (
            <PricingTier key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
