
import React from 'react';
import StatCounter from './StatCounter';

const Stats = () => {
  return (
    <section className="py-20 bg-cream-100">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title centered">Our Impact by the Numbers</h2>
          <p className="text-lg text-charcoal-700 mb-8">
            For over two decades, Star Hi Herbs has been delivering exceptional quality herbal products worldwide, earning the trust of leading companies in multiple industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter endValue={25} label="Years Experience" symbol="+" />
          <StatCounter endValue={350} label="Premium Products" symbol="+" />
          <StatCounter endValue={48} label="Countries Served" />
          <StatCounter endValue={2500} label="Happy Clients" symbol="+" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
