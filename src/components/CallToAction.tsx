
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-herb-600 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Whether you're looking to order samples, request a custom quote, or learn more about our products, 
            our team is ready to assist you in finding the perfect botanical solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/request-sample" 
              className="btn bg-white text-herb-600 hover:bg-cream-100 px-8 py-3 rounded-full font-medium"
            >
              Order a Sample
            </Link>
            <Link 
              to="/request-quote" 
              className="btn bg-terracotta-400 text-white hover:bg-terracotta-500 px-8 py-3 rounded-full font-medium"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
