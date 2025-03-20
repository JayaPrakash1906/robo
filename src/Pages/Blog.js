import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Video1 from '../Assets/Media.mp4';

const Blog = () => {
  return (
    <div className="w-full">
      {/* Navbar Over Video */}
      <div className="absolute top-0 left-0 w-full z-50 bg-black/50">
        <Navbar />
      </div>

      {/* Hero Section with Responsive Video */}
       {/* Hero Section */}
            <div className="relative w-full h-[500px] mt-16">
              <video
                src={Video1}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl lg:text-4xl font-semibold">Stay Ahead with Roboforming Insights</h1>
          <p className="text-lg lg:text-xl mt-4">
            Explore the Latest Trends, Techniques, and Innovations in Sheet Metal Forming.
          </p>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="bg-gray-50 py-16 px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Featured Articles</h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover the latest advancements in Roboforming and industry trends.
          </p>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[ 'Roboforming Basics', 'Industry Trends', 'Case Studies', 'Innovations' ].map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">{category}</h2>
              <p className="text-gray-600 mt-2 text-center">Explore articles related to {category.toLowerCase()}.</p>
              <div className="text-center mt-4">
                <button className="text-orange-600 hover:underline text-lg">View Articles</button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="text-center mt-16 bg-orange-400 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Subscribe to Our Blog</h3>
          <p className="mt-2">Get the latest updates delivered to your inbox.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 p-2 w-3/4 lg:w-1/4 rounded text-black"
          />
          <button className="mt-2 ml-2 bg-white text-orange-600 px-4 py-2 rounded hover:bg-gray-200">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
  