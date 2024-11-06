import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudy = ({ title, description, result }) => (
  <div className="card hover-transform hover-border hover-glow group">
    <h3 className="text-xl md:text-2xl font-medium mb-2 md:mb-4 text-white transition-colors duration-300 group-hover:text-teal-400">{title}</h3>
    <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 transition-colors duration-300 group-hover:text-white">{description}</p>
    <p className="text-sm md:text-base font-semibold text-teal-500 mb-2 md:mb-4 transition-colors duration-300 group-hover:text-teal-300">{result}</p>
    <div className="flex items-center text-sm md:text-base text-gray-400 transition-colors duration-300 group-hover:text-white">
    </div>
  </div>
);

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI Compliance for FAANG",
      description: "Trained and implemented cutting-edge Large Language Models (LLMs) to enhance AI compliance frameworks.",
      result: "Successfully deployed across multiple FAANG companies"
    },
    {
      title: "Niche Marketplace Platform",
      description: "Built a specialized e-commerce platform focusing on community engagement and seamless user experience.",
      result: "Enhanced user engagement and established thriving community marketplace"
    },
    {
      title: "Sports Prediction Engine",
      description: "Developed advanced predictive modeling system for sports outcomes using machine learning.",
      result: "Achieved 76.4% prediction accuracy, surpassing industry standards"
    }
  ];

  return (
    <section id="case-studies" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title slide-up">Case Studies</h2>
        <div className="responsive-grid">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
