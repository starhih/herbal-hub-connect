
import React from 'react';
import { Sprout, Factory, TestTube, Truck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Ethical Sourcing",
    description: "We carefully select the highest quality raw materials from sustainable sources around the world.",
    icon: Sprout,
    color: "bg-herb-50",
    iconColor: "text-herb-600"
  },
  {
    id: 2,
    title: "Advanced Processing",
    description: "Our state-of-the-art facilities process materials using cutting-edge technologies to preserve active compounds.",
    icon: Factory,
    color: "bg-cream-100",
    iconColor: "text-terracotta-400"
  },
  {
    id: 3,
    title: "Rigorous Testing",
    description: "Every batch undergoes comprehensive testing to ensure potency, purity, and compliance with global standards.",
    icon: TestTube,
    color: "bg-herb-50",
    iconColor: "text-herb-600"
  },
  {
    id: 4,
    title: "Secure Delivery",
    description: "We ensure proper handling and temperature-controlled shipping to maintain product integrity.",
    icon: Truck,
    color: "bg-cream-100",
    iconColor: "text-terracotta-400"
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title centered">Our Process</h2>
          <p className="text-lg text-charcoal-700">
            From sourcing to delivery, we maintain complete control over every step of the process,
            ensuring uncompromising quality, transparency, and sustainability.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 w-full h-1 bg-herb-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="relative z-10 w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-herb-500 mb-6">
                  <span className="text-herb-700 font-bold text-xl">{index + 1}</span>
                </div>
                
                {/* Icon */}
                <div className={`${step.color} p-5 rounded-full mb-4`}>
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                <p className="text-charcoal-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
