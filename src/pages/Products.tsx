
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductCard = ({ name, category, description, image }: { name: string; category: string; description: string; image: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-terracotta-400 uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-serif mt-1 mb-2">{name}</h3>
        <p className="text-charcoal-600 text-sm line-clamp-3">{description}</p>
        <button className="mt-4 text-herb-600 font-medium flex items-center text-sm hover:text-herb-700">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Organic Echinacea Extract",
      category: "Herbal Extract",
      description: "Our premium Echinacea extract is sourced from organically grown plants and processed to maintain maximum potency and effectiveness.",
      image: "https://images.unsplash.com/photo-1628963586092-2acd17be2961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Green Tea Extract",
      category: "Botanical Extract",
      description: "High in antioxidants, our Green Tea extract is carefully processed to preserve its natural properties and health benefits.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Probiotic Blend",
      category: "Probiotics",
      description: "Our specialized probiotic blend contains multiple strains of beneficial bacteria to support digestive health and immune function.",
      image: "https://images.unsplash.com/photo-1577460551100-d93c307b942c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 4,
      name: "Turmeric Extract",
      category: "Herbal Extract",
      description: "Our standardized Turmeric extract is rich in curcuminoids and processed to ensure maximum bioavailability and effectiveness.",
      image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      name: "Valerian Root Extract",
      category: "Herbal Extract",
      description: "Our premium Valerian extract is carefully processed to maintain its natural compounds and beneficial properties.",
      image: "https://images.unsplash.com/photo-1580651316320-a8fd7e199e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id: 6,
      name: "Lactobacillus Blend",
      category: "Probiotics",
      description: "Our specialized Lactobacillus blend contains multiple strains of beneficial bacteria with proven stability and efficacy.",
      image: "https://images.unsplash.com/photo-1588250318040-5a88c8c10d5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-cream-100">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Products</h1>
            <p className="text-lg text-charcoal-700 max-w-3xl mb-6">
              Discover our comprehensive range of premium herbal extracts, botanical ingredients, and probiotic formulations.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Filter Sidebar */}
              <div className="w-full md:w-1/4">
                <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                  <h3 className="font-medium text-lg mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-herb-500 focus:ring-herb-500" />
                        <span className="ml-2">Herbal Extracts</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-herb-500 focus:ring-herb-500" />
                        <span className="ml-2">Botanical Extracts</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-herb-500 focus:ring-herb-500" />
                        <span className="ml-2">Probiotics</span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-herb-500 focus:ring-herb-500" />
                        <span className="ml-2">Organic Certified</span>
                      </label>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h3 className="font-medium text-lg mb-4">Certifications</h3>
                    <ul className="space-y-2">
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-herb-500 focus:ring-herb-500" />
                          <span className="ml-2">USDA Organic</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-herb-500 focus:ring-herb-500" />
                          <span className="ml-2">Non-GMO</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-herb-500 focus:ring-herb-500" />
                          <span className="ml-2">Kosher</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-herb-500 focus:ring-herb-500" />
                          <span className="ml-2">Halal</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <ProductCard 
                      key={product.id}
                      name={product.name}
                      category={product.category}
                      description={product.description}
                      image={product.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
