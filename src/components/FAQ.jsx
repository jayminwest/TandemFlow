import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? <FaChevronUp className="text-teal-500" /> : <FaChevronDown className="text-teal-500" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-300">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What types of businesses can benefit from automation?",
      answer: "Automation can benefit businesses of all sizes and industries. Whether you're a small e-commerce store or a large manufacturing company, there are always processes that can be streamlined and improved through automation."
    },
    {
      question: "How long does it take to implement an automation solution?",
      answer: "The implementation time varies depending on the complexity of the project. Simple automations can be set up in a few days, while more complex systems might take a few weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Is my data safe with your automation solutions?",
      answer: "Absolutely. We take data security very seriously and follow industry standard security measures to protect your information. We also comply with relevant data protection regulations."
    },
    {
      question: "Can your solutions integrate with my existing software?",
      answer: "Yes, our automation solutions are designed to integrate seamlessly with a wide range of existing software and systems. We'll work with you to ensure smooth integration with your current tech stack."
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer: "Yes, we provide ongoing support and maintenance for all our automation solutions. Our team is always available to help with any issues, updates, or optimizations you might need."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="section-inner">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
