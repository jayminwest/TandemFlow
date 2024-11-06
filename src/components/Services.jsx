import React from 'react';
import { FaCog, FaChartLine, FaRobot } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, delay }) => (
  <div className="card hover-transform hover-border hover-glow group" style={{ animationDelay: delay }}>
    <div className="text-4xl md:text-5xl text-teal-500 mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110">{icon}</div>
    <h3 className="text-xl md:text-2xl font-medium mb-2 md:mb-4 text-white transition-colors duration-300 group-hover:text-teal-400">{title}</h3>
    <p className="text-sm md:text-base text-gray-300 transition-colors duration-300 group-hover:text-white">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <FaCog />,
      title: "Process Automation",
      description: "Streamline your workflows and increase efficiency with our custom automation solutions."
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      description: "Harness the power of your data with our advanced analytics and reporting tools."
    },
    {
      icon: <FaRobot />,
      title: "AI Integration",
      description: "Leverage artificial intelligence to make smarter decisions and predict future trends."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="section-inner">
        <h2 className="section-title slide-up">Our Services</h2>
        <div className="responsive-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={`${index * 0.2}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
