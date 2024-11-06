import React from 'react';
import { FaLightbulb, FaCogs, FaRocket, FaChartLine } from 'react-icons/fa';

const Step = ({ icon, title, description }) => (
  <div className="flex items-start mb-8 fade-in">
    <div className="text-3xl text-teal-500 mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-medium mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const HowWeWork = () => {
  const steps = [
    {
      icon: <FaLightbulb />,
      title: "Discovery",
      description: "We analyze your current processes and identify automation opportunities."
    },
    {
      icon: <FaCogs />,
      title: "Design & Development",
      description: "Our experts create custom automation solutions tailored to your needs."
    },
    {
      icon: <FaRocket />,
      title: "Implementation",
      description: "We seamlessly integrate the new systems into your existing workflow."
    },
    {
      icon: <FaChartLine />,
      title: "Optimization",
      description: "We continuously monitor and improve the performance of your automation."
    }
  ];

  return (
    <section id="how-we-work" className="section">
      <div className="section-inner">
        <h2 className="section-title">How We Work</h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
