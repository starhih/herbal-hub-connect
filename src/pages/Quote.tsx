
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Quote = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-cream-100">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Request a Quote</h1>
            <p className="text-lg text-charcoal-700 max-w-3xl mb-6">
              Fill out the form below to receive a custom quote for our botanical products.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-serif mb-6">Quote Request Form</h2>
                  <form>
                    <h3 className="text-lg font-medium mb-4">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="company-name" className="block text-sm font-medium text-charcoal-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          id="company-name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-charcoal-700 mb-1">Industry</label>
                        <select
                          id="industry"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                          required
                        >
                          <option value="">Select Industry</option>
                          <option value="nutraceutical">Nutraceutical</option>
                          <option value="pharmaceutical">Pharmaceutical</option>
                          <option value="food-beverage">Food & Beverage</option>
                          <option value="cosmetic">Cosmetic</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-4">Product Information</h3>
                    <div className="space-y-6 mb-8">
                      <div>
                        <label htmlFor="product-category" className="block text-sm font-medium text-charcoal-700 mb-1">Product Category</label>
                        <select
                          id="product-category"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="herbal-extracts">Herbal Extracts</option>
                          <option value="botanical-extracts">Botanical Extracts</option>
                          <option value="probiotics">Probiotics</option>
                          <option value="custom-blends">Custom Blends</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="specific-products" className="block text-sm font-medium text-charcoal-700 mb-1">Specific Products of Interest</label>
                        <textarea
                          id="specific-products"
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                          placeholder="Please list the specific products you're interested in..."
                          required
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-charcoal-700 mb-1">Estimated Quantity</label>
                        <input
                          type="text"
                          id="quantity"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                          placeholder="e.g., 100 kg, 500 units, etc."
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="timeframe" className="block text-sm font-medium text-charcoal-700 mb-1">Expected Timeframe</label>
                        <select
                          id="timeframe"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                          required
                        >
                          <option value="">Select Timeframe</option>
                          <option value="immediate">Immediate (1-2 weeks)</option>
                          <option value="short-term">Short-term (1-3 months)</option>
                          <option value="medium-term">Medium-term (3-6 months)</option>
                          <option value="long-term">Long-term (6+ months)</option>
                        </select>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-4">Additional Information</h3>
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1">Special Requirements or Questions</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-herb-500 focus:border-herb-500"
                        placeholder="Please provide any additional details that would help us prepare an accurate quote..."
                      ></textarea>
                    </div>
                    
                    <div className="mb-8">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="mt-1 rounded text-herb-500 focus:ring-herb-500"
                          required
                        />
                        <span className="ml-2 text-sm text-charcoal-600">
                          I understand that by submitting this form, I agree to Star Hi Herbs' privacy policy and consent to being contacted regarding my quote request.
                        </span>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-herb-500 text-white py-3 px-4 rounded-md hover:bg-herb-600 transition-colors"
                    >
                      Submit Quote Request
                    </button>
                  </form>
                </div>
              </div>
              
              <div>
                <div className="bg-herb-50 rounded-xl p-8 sticky top-24">
                  <h3 className="text-xl font-serif mb-6">What Happens Next?</h3>
                  <ol className="space-y-6">
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-herb-500 rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Review</h4>
                        <p className="text-sm text-charcoal-600">Our team will review your request and requirements within 1-2 business days.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-herb-500 rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Consultation</h4>
                        <p className="text-sm text-charcoal-600">A member of our sales team will contact you to discuss your needs in detail.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-herb-500 rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Quotation</h4>
                        <p className="text-sm text-charcoal-600">We'll prepare a detailed quote based on your specific requirements.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-herb-500 rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Sample (Optional)</h4>
                        <p className="text-sm text-charcoal-600">We can arrange product samples for testing and evaluation.</p>
                      </div>
                    </li>
                  </ol>
                  
                  <div className="mt-10 p-6 bg-white rounded-lg">
                    <h4 className="font-medium mb-4">Need Immediate Assistance?</h4>
                    <p className="text-sm text-charcoal-600 mb-4">Contact our sales team directly:</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-herb-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-herb-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">sales@starhiherbs.com</span>
                      </div>
                    </div>
                  </div>
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

export default Quote;
