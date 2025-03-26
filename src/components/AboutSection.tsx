import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Beaker, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-cream-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-terracotta-400/10 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-herb-400/10 rounded-full"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Laboratory worker examining herbal extracts"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 right-6 bg-terracotta-400 text-white px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm">
                <p className="text-xl font-serif">Premium Quality Since 1997</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6 leading-tight">
              Committed to Purity and{' '}
              <span className="relative">
                Excellence
                <span className="absolute bottom-2 left-0 w-full h-1 bg-terracotta-400/30"></span>
              </span>
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
              At Star Hi Herbs, we're dedicated to sourcing the finest botanical ingredients from around the world. 
              Our state-of-the-art facilities and rigorous quality control ensure that every product meets the highest 
              industry standards.
            </p>
            <p className="text-lg text-charcoal-600 mb-12 leading-relaxed">
              From cultivation to delivery, we maintain complete transparency and traceability throughout our supply chain, 
              providing our clients with confidence in every ingredient they purchase.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-herb-600" />
                </div>
                <h3 className="text-xl font-medium text-charcoal-900 mb-2">Sustainable Sourcing</h3>
                <p className="text-charcoal-600">Ethically sourced ingredients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="w-8 h-8 text-herb-600" />
                </div>
                <h3 className="text-xl font-medium text-charcoal-900 mb-2">Advanced Processing</h3>
                <p className="text-charcoal-600">State-of-the-art technology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-herb-600" />
                </div>
                <h3 className="text-xl font-medium text-charcoal-900 mb-2">Certified Quality</h3>
                <p className="text-charcoal-600">Multiple global certifications</p>
              </div>
            </div>

            <Link 
              to="/company/about" 
              className="inline-flex items-center text-herb-600 font-medium hover:text-herb-700 transition-colors group"
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
