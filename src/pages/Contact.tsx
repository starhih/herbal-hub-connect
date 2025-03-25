
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-cream-100">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
            <p className="text-lg text-charcoal-700 max-w-3xl mb-6">
              We're here to answer your questions and help you find the right botanical solutions for your needs.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="section-title">Get in Touch</h2>
                <p className="mb-8 text-charcoal-700">
                  Whether you have questions about our products, want to request samples, or discuss a partnership opportunity, our team is ready to assist you.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-herb-100 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-charcoal-600">+1 (555) 123-4567</p>
                      <p className="text-charcoal-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-herb-100 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-charcoal-600">info@starhiherbs.com</p>
                      <p className="text-charcoal-600">sales@starhiherbs.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-herb-100 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-herb-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Headquarters</h3>
                      <p className="text-charcoal-600">123 Botanical Drive</p>
                      <p className="text-charcoal-600">Phoenix, AZ 85001</p>
                      <p className="text-charcoal-600">United States</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-serif mb-4">Global Offices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                      <h4 className="font-medium mb-2">Europe</h4>
                      <p className="text-charcoal-600 text-sm">
                        45 Herbal Lane<br />
                        Amsterdam, 1012 AB<br />
                        Netherlands
                      </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                      <h4 className="font-medium mb-2">Asia Pacific</h4>
                      <p className="text-charcoal-600 text-sm">
                        78 Natural Way<br />
                        Singapore, 238859<br />
                        Singapore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-charcoal-700 mb-1">First Name</label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-charcoal-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-herb-500 text-white py-3 px-4 rounded-md hover:bg-herb-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-cream-100">
          <div className="container">
            <h2 className="text-2xl font-serif text-center mb-8">Find Us</h2>
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <img 
                src="https://images.unsplash.com/photo-1543701835-a75233d2fb01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Map location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
