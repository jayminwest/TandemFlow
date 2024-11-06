import React from 'react';
import TypeformButton from './TypeformButton';

const CTA = () => {
  return (
    <section className="bg-teal-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Success?</h2>
        <p className="text-xl mb-8">Let's discuss how TandemFlow can transform your business processes.</p>
        <TypeformButton className="bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
          Schedule a Consultation
        </TypeformButton>
      </div>
    </section>
  );
};

export default CTA;
