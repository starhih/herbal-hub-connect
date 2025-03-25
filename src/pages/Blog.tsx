
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogCard = ({ title, date, excerpt, image, category }: { title: string; date: string; excerpt: string; image: string; category: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-terracotta-400 uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-serif mt-1 mb-2">{title}</h3>
        <p className="text-charcoal-600 text-sm line-clamp-3">{excerpt}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-charcoal-500">{date}</span>
          <button className="text-herb-600 font-medium flex items-center text-sm hover:text-herb-700">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Echinacea for Immune Support",
      date: "May 15, 2023",
      category: "Herbal Research",
      excerpt: "Discover the science behind Echinacea's immune-boosting properties and how our standardized extract delivers consistent benefits.",
      image: "https://images.unsplash.com/photo-1624848678000-0cb0a35c2fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Sustainable Sourcing: Our Commitment to the Planet",
      date: "April 28, 2023",
      category: "Sustainability",
      excerpt: "Learn about our sustainable sourcing practices and how we're working to minimize our environmental impact while supporting local communities.",
      image: "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id: 3,
      title: "The Growing Market for Probiotics in Functional Foods",
      date: "April 10, 2023",
      category: "Market Trends",
      excerpt: "Explore the expanding market for probiotic-enhanced functional foods and how our stable strains are revolutionizing product development.",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Advances in Extraction Technology: Maximizing Bioactive Compounds",
      date: "March 22, 2023",
      category: "Innovation",
      excerpt: "Delve into the latest extraction technologies we're employing to maximize the concentration and bioavailability of active compounds in our extracts.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    },
    {
      id: 5,
      title: "Quality Control in Botanical Extracts: Beyond Standardization",
      date: "March 5, 2023",
      category: "Quality Assurance",
      excerpt: "Understand our approach to quality control that goes beyond simple standardization to ensure the full spectrum of beneficial compounds in every extract.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      title: "The Science of Synergy: Combining Herbs for Enhanced Effects",
      date: "February 18, 2023",
      category: "Research & Development",
      excerpt: "Learn how our R&D team is researching optimal herb combinations to create extracts with enhanced therapeutic effects through natural synergies.",
      image: "https://images.unsplash.com/photo-1617440168937-c6497a7b2705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-cream-100">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Blog & Industry Insights</h1>
            <p className="text-lg text-charcoal-700 max-w-3xl mb-6">
              Stay updated with the latest research, industry trends, and company news from Star Hi Herbs.
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
                      <a href="#" className="text-charcoal-700 hover:text-herb-600">
                        Herbal Research
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-charcoal-700 hover:text-herb-600">
                        Sustainability
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-charcoal-700 hover:text-herb-600">
                        Market Trends
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-charcoal-700 hover:text-herb-600">
                        Innovation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-charcoal-700 hover:text-herb-600">
                        Quality Assurance
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-charcoal-700 hover:text-herb-600">
                        Research & Development
                      </a>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h3 className="font-medium text-lg mb-4">Recent Posts</h3>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map(post => (
                        <li key={post.id}>
                          <a href="#" className="flex items-center space-x-3 group">
                            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium group-hover:text-herb-600 line-clamp-2">{post.title}</h4>
                              <span className="text-xs text-charcoal-500">{post.date}</span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Blog Post Grid */}
              <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map(post => (
                    <BlogCard 
                      key={post.id}
                      title={post.title}
                      date={post.date}
                      excerpt={post.excerpt}
                      image={post.image}
                      category={post.category}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <a href="#" className="px-3 py-1 rounded border border-herb-300 text-herb-600 hover:bg-herb-50">
                      Previous
                    </a>
                    <a href="#" className="px-3 py-1 rounded bg-herb-500 text-white">
                      1
                    </a>
                    <a href="#" className="px-3 py-1 rounded border border-herb-300 text-herb-600 hover:bg-herb-50">
                      2
                    </a>
                    <a href="#" className="px-3 py-1 rounded border border-herb-300 text-herb-600 hover:bg-herb-50">
                      3
                    </a>
                    <a href="#" className="px-3 py-1 rounded border border-herb-300 text-herb-600 hover:bg-herb-50">
                      Next
                    </a>
                  </nav>
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

export default Blog;
