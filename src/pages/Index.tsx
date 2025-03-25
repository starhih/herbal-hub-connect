
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import AboutSection from '../components/AboutSection';
import ProcessSteps from '../components/ProcessSteps';
import FeaturedProducts from '../components/FeaturedProducts';
import Certifications from '../components/Certifications';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Function to handle scroll animations
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Trigger once to check for elements already in view
    handleScroll();
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutSection />
        <ProcessSteps />
        <FeaturedProducts />
        <Certifications />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Index;
