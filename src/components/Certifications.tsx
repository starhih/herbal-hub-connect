
import React from 'react';

const certifications = [
  {
    id: 1,
    name: "ISO 9001",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/ISO_9001_logo.svg/1200px-ISO_9001_logo.svg.png",
  },
  {
    id: 2,
    name: "USDA Organic",
    icon: "https://www.usda.gov/sites/default/files/usda-organic-seal-color.png",
  },
  {
    id: 3,
    name: "GMP Certified",
    icon: "https://img.freepik.com/premium-vector/gmp-certified-icon-good-manufacturing-practice-certificate-concept-symbol-premium-quality-product-vector-illustration_657888-644.jpg",
  },
  {
    id: 4,
    name: "Non-GMO Project",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJsMhpvj_HORXKsOIJUJsYXiIWfRZV8K0ILyF4SlQp1g&s",
  },
  {
    id: 5,
    name: "Kosher Certified",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/OU_Kosher_certification_symbol.png/220px-OU_Kosher_certification_symbol.png",
  },
  {
    id: 6,
    name: "Halal Certified",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFx4bXa_QlRmCy4CKvdTM-gqlUx0VvUQW5mJqBFOWQbQ&s",
  }
];

const Certifications = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title centered">Our Certifications</h2>
          <p className="text-lg text-charcoal-700">
            We maintain the highest standards through rigorous testing and certification processes,
            ensuring our products meet global quality, safety, and sustainability requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map(cert => (
            <div 
              key={cert.id}
              className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <img 
                src={cert.icon} 
                alt={`${cert.name} Certification`} 
                className="h-16 w-auto object-contain mb-3"
              />
              <span className="text-charcoal-800 text-sm font-medium">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
