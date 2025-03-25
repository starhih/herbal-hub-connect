
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-herb-800/70 via-herb-700/50 to-herb-900/50 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="https://youtu.be/vVd06RE0a3o" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container relative z-20 pt-20 pb-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block bg-terracotta-400/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm mb-6">
            Premium Botanical Products Since 1997
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-medium mb-6 leading-tight">
            Nature's Finest Herbs &amp; Botanical Extracts
          </h1>
          <p className="text-lg md:text-xl text-cream-100/90 mb-8 max-w-2xl leading-relaxed">
            Delivering exceptional quality herbal extracts, probiotics, and botanical ingredients to industries worldwide with uncompromising standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products" 
              className="btn-primary hover-scale"
            >
              Explore Products
            </Link>
            <Link 
              to="/company/about" 
              className="group flex items-center text-white border-b border-white/50 pb-1 transition-all hover:border-white"
            >
              Learn about Star Hi Herbs
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
