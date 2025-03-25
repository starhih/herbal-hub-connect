
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, LeafIcon, Beaker } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581600140682-79c5dd248b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Laboratory worker examining herbal extracts" 
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-terracotta-400 text-white p-6 rounded-lg shadow-lg">
              <p className="text-xl font-serif">Premium Quality Since 1997</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="max-w-xl">
            <h2 className="section-title">Committed to Purity and Excellence</h2>
            <p className="text-lg text-charcoal-700 mb-6 leading-relaxed">
              At Star Hi Herbs, we're dedicated to sourcing the finest botanical ingredients from around the world. 
              Our state-of-the-art facilities and rigorous quality control ensure that every product meets the highest 
              industry standards.
            </p>
            <p className="text-lg text-charcoal-700 mb-8 leading-relaxed">
              From cultivation to delivery, we maintain complete transparency and traceability throughout our supply chain, 
              providing our clients with confidence in every ingredient they purchase.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-herb-50 p-3 rounded-full mb-3">
                  <LeafIcon className="h-6 w-6 text-herb-600" />
                </div>
                <h3 className="font-medium mb-1">Sustainable Sourcing</h3>
                <p className="text-sm text-charcoal-600">Ethically sourced ingredients</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-herb-50 p-3 rounded-full mb-3">
                  <Beaker className="h-6 w-6 text-herb-600" />
                </div>
                <h3 className="font-medium mb-1">Advanced Processing</h3>
                <p className="text-sm text-charcoal-600">State-of-the-art technology</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-herb-50 p-3 rounded-full mb-3">
                  <Award className="h-6 w-6 text-herb-600" />
                </div>
                <h3 className="font-medium mb-1">Certified Quality</h3>
                <p className="text-sm text-charcoal-600">Multiple global certifications</p>
              </div>
            </div>
            
            <Link 
              to="/company/about" 
              className="group inline-flex items-center text-herb-600 font-medium transition-colors hover:text-herb-700"
            >
              Learn more about our company
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
