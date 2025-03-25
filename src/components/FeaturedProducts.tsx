
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

const products: ProductProps[] = [
  {
    id: 1,
    name: "Turmeric Extract",
    category: "Botanical Extract",
    description: "Premium turmeric extract with high curcumin content, perfect for supplements and functional foods.",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9e0dbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "turmeric-extract"
  },
  {
    id: 2,
    name: "Echinacea Powder",
    category: "Herbal Extract",
    description: "High-quality echinacea powder standardized for immune-supporting compounds.",
    image: "https://images.unsplash.com/photo-1628615597350-eda4ccdc7a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "echinacea-powder"
  },
  {
    id: 3,
    name: "Probiotic Blend",
    category: "Probiotics",
    description: "Multi-strain probiotic blend with prebiotic support for optimal gut health formulations.",
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "probiotic-blend"
  },
  {
    id: 4,
    name: "Ashwagandha Root",
    category: "Organic Herb",
    description: "USDA certified organic ashwagandha with standardized withanolide content.",
    image: "https://images.unsplash.com/photo-1646622571539-751da51d8605?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    slug: "ashwagandha-root"
  }
];

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover-scale transition-all duration-300">
      <div className="h-52 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-herb-50 text-herb-600 text-xs px-2 py-1 rounded-full mb-2">
          {product.category}
        </span>
        <h3 className="font-serif text-xl mb-2">{product.name}</h3>
        <p className="text-charcoal-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <Link 
          to={`/products/${product.slug}`} 
          className="group inline-flex items-center text-herb-600 text-sm font-medium transition-colors hover:text-herb-700"
        >
          Learn more
          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-herb-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="section-title">Featured Products</h2>
            <p className="text-lg text-charcoal-700 max-w-2xl">
              Discover our premium selection of herbal extracts, botanicals, and probiotics 
              designed to meet the highest standards of quality and purity.
            </p>
          </div>
          <Link 
            to="/products" 
            className="inline-flex items-center mt-4 md:mt-0 text-herb-600 font-medium transition-colors hover:text-herb-700"
          >
            View all products
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
