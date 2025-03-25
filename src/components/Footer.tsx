
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-herb-700 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif mb-4">Star Hi Herbs</h3>
            <p className="text-cream-100/80 leading-relaxed">
              Premium manufacturer of herbal extracts, botanical extracts, organic herbal extracts, and probiotics for the pharmaceutical, nutraceutical, food, and cosmetic industries.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a href="#" className="bg-herb-600 p-2 rounded-full hover:bg-herb-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-herb-600 p-2 rounded-full hover:bg-herb-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-herb-600 p-2 rounded-full hover:bg-herb-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-herb-600 p-2 rounded-full hover:bg-herb-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-cream-100/80 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/company/about" className="text-cream-100/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/quality" className="text-cream-100/80 hover:text-white transition-colors">Quality Assurance</Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-cream-100/80 hover:text-white transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link to="/blog" className="text-cream-100/80 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-cream-100/80 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-100/80 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/contract-manufacturing" className="text-cream-100/80 hover:text-white transition-colors">Contract Manufacturing</Link>
              </li>
              <li>
                <Link to="/services/custom-formulation" className="text-cream-100/80 hover:text-white transition-colors">Custom Formulation</Link>
              </li>
              <li>
                <Link to="/services/quality-testing" className="text-cream-100/80 hover:text-white transition-colors">Quality Testing</Link>
              </li>
              <li>
                <Link to="/services/research-development" className="text-cream-100/80 hover:text-white transition-colors">Research & Development</Link>
              </li>
              <li>
                <Link to="/request-sample" className="text-cream-100/80 hover:text-white transition-colors">Request a Sample</Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-cream-100/80 hover:text-white transition-colors">Request a Quote</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-cream-100/80">
                  123 Nature Way, Suite 100<br />
                  Botanical Gardens, CA 92123<br />
                  United States
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-cream-100/80">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-cream-100/80">info@starhiherbs.com</span>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-herb-600 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-cream-100/70 text-sm">
            &copy; {currentYear} Star Hi Herbs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-cream-100/70">
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
