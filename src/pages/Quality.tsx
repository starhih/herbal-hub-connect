
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Quality = () => {
  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "International standard for quality management systems",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "USDA Organic",
      description: "Certification for organic agricultural products in the United States",
      image: "https://images.unsplash.com/photo-1522152553958-ccefbd7f0c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "HACCP",
      description: "Hazard Analysis Critical Control Point system for food safety management",
      image: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "Non-GMO Project Verified",
      description: "Verification for products produced according to best practices for GMO avoidance",
      image: "https://images.unsplash.com/photo-1634467524884-743462a1e7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-cream-100">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Quality Assurance</h1>
            <p className="text-lg text-charcoal-700 max-w-3xl mb-6">
              Our commitment to quality is the foundation of everything we do at Star Hi Herbs.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Quality Promise</h2>
                <p className="mb-4 text-charcoal-700">
                  At Star Hi Herbs, quality isn't just a goal—it's a commitment woven into every aspect of our operations. From the moment we select raw materials to the final delivery of our products, we maintain rigorous quality control protocols that exceed industry standards.
                </p>
                <p className="mb-4 text-charcoal-700">
                  Our state-of-the-art laboratory is equipped with advanced analytical instruments operated by skilled technicians who perform a comprehensive range of tests on every batch of our products.
                </p>
                <p className="text-charcoal-700">
                  We believe that quality is a continuous journey, not a destination. That's why we constantly review and improve our processes, invest in new technologies, and stay updated with the latest research and regulatory requirements.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Quality testing lab" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-herb-50">
          <div className="container">
            <h2 className="section-title centered mb-12">Our Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map(cert => (
                <div key={cert.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-2">{cert.name}</h3>
                    <p className="text-charcoal-600 text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="section-title centered mb-12">Our Quality Control Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Raw Material Testing</h3>
                <p className="text-charcoal-600">Every batch of raw materials undergoes rigorous testing for identity, purity, and potency before entering our production process.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">In-Process Controls</h3>
                <p className="text-charcoal-600">Throughout the manufacturing process, we conduct multiple checks to ensure consistency, quality, and compliance with our specifications.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-herb-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Final Product Testing</h3>
                <p className="text-charcoal-600">Each finished product undergoes comprehensive analysis for active compounds, microbial limits, heavy metals, and other quality parameters.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Quality;
