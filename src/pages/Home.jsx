import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import HowWeWork from '../components/HowWeWork';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <div className="section-divider" />
      <CaseStudies />
      <div className="section-divider" />
      <HowWeWork />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
