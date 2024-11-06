import React from 'react';
import { FaUserPlus, FaClipboardList, FaComments } from 'react-icons/fa';

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
      icon: <FaUserPlus />,
      title: "Quick Onboarding",
      description: "Begin with a streamlined 30-minute onboarding call - the only required meeting in our process. We can schedule your session as early as tomorrow."
    },
    {
      icon: <FaClipboardList />,
      title: "Project Management",
      description: "Utilize our intuitive ClickUp board for project tracking. Add tasks, track progress, and communicate updates - or let our team handle the project management for you."
    },
    {
      icon: <FaComments />,
      title: "Ongoing Support",
      description: "Benefit from optional 45-minute weekly consultation sessions where we can collaborate on strategy, brainstorm solutions, and refine processes."
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
