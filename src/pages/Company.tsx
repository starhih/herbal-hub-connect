
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Company = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-cream-100">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">About Our Company</h1>
            <p className="text-lg text-charcoal-700 max-w-3xl mb-6">
              Learn about Star Hi Herbs, our mission, values, and commitment to excellence in botanical extracts.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Story</h2>
                <p className="mb-4 text-charcoal-700">
                  Founded in 1997, Star Hi Herbs began as a small family-owned business dedicated to providing the highest quality botanical extracts to the nutraceutical industry. What started as a passion for natural products has grown into a global enterprise serving industries worldwide.
                </p>
                <p className="mb-4 text-charcoal-700">
                  Our journey has been guided by a simple principle: uncompromising quality. We've invested in cutting-edge facilities, expert teams, and rigorous quality control processes to ensure every product meets the highest standards.
                </p>
                <p className="text-charcoal-700">
                  Today, Star Hi Herbs stands as an industry leader, trusted by major brands and manufacturers for our commitment to excellence, innovation, and sustainability.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                  alt="Our facility" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-herb-50">
          <div className="container">
            <h2 className="section-title centered mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Quality</h3>
                <p className="text-charcoal-600">We are committed to excellence in every aspect of our business, from sourcing to delivery, ensuring our products meet the highest standards.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Innovation</h3>
                <p className="text-charcoal-600">We continuously invest in research and development to discover new extraction methods and product formulations that meet evolving market needs.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565M6 12.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm10 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Sustainability</h3>
                <p className="text-charcoal-600">We are dedicated to environmentally responsible practices throughout our supply chain, from ethical sourcing to eco-friendly manufacturing processes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80" 
                  alt="Our mission" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="section-title">Our Mission</h2>
                <p className="mb-4 text-charcoal-700">
                  Our mission is to be the global leader in botanical extracts and probiotics, delivering innovative, high-quality ingredients that enhance the health and well-being of people worldwide.
                </p>
                <p className="mb-4 text-charcoal-700">
                  We strive to combine traditional knowledge with modern science, respecting nature's wisdom while embracing technological advancement to create products that meet the highest standards of efficacy and safety.
                </p>
                <p className="text-charcoal-700">
                  Through ethical business practices, sustainable sourcing, and continuous improvement, we aim to create value for our customers, partners, employees, and communities while preserving the environment for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Company;
