import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudy = ({ title, description, result }) => (
  <div className="card hover-transform hover-border hover-glow group">
    <h3 className="text-xl md:text-2xl font-medium mb-2 md:mb-4 text-white transition-colors duration-300 group-hover:text-teal-400">{title}</h3>
    <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 transition-colors duration-300 group-hover:text-white">{description}</p>
    <p className="text-sm md:text-base font-semibold text-teal-500 mb-2 md:mb-4 transition-colors duration-300 group-hover:text-teal-300">{result}</p>
    <div className="flex items-center text-sm md:text-base text-gray-400 transition-colors duration-300 group-hover:text-white">
      <span className="mr-2">Read more</span>
      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
    </div>
  </div>
);

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Giant",
      description: "Implemented an AI-driven inventory management system.",
      result: "Reduced stockouts by 35% and increased sales by 20%"
    },
    {
      title: "Healthcare Provider",
      description: "Automated patient scheduling and follow-up processes.",
      result: "Improved patient satisfaction by 40% and reduced admin work by 60%"
    },
    {
      title: "Financial Services Firm",
      description: "Developed a custom risk assessment automation tool.",
      result: "Decreased processing time by 75% and improved accuracy by 30%"
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
