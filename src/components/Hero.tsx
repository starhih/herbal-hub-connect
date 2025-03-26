import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Function to handle video error and switch to YouTube fallback
    const handleVideoError = () => {
      if (videoRef.current) {
        videoRef.current.style.display = 'none';
      }
      if (iframeRef.current) {
        iframeRef.current.style.display = 'block';
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('error', handleVideoError);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('error', handleVideoError);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-herb-800/70 via-herb-700/50 to-herb-900/50 z-10"></div>
        
        {/* Local Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* YouTube Fallback */}
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/yxhI6xjhbws?autoplay=1&mute=1&loop=1&playlist=yxhI6xjhbws&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ display: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="container relative z-20">
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
          <div className="flex flex-col sm:flex-row gap-6">
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
