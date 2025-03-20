import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Video1 from '../Assets/Media.mp4';

const About = () => {
  return (
    <div className="w-full">
      {/* Navbar Over Video */}
      <div className="absolute top-0 left-0 w-full z-50 bg-black/50">
        <Navbar />
      </div>
      
      {/* Hero Section with Responsive Video */}
      <div className="relative w-full h-[500px] mt-16">
              <video
                src={Video1}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-semibold">Welcome to RoboInform</h1>
          <p className="text-lg md:text-xl mt-4">
            Innovating the Future with Advanced Roboforming Technology
          </p>
        </div>
      </div>
      
      {/* About Content Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Story</h1>
          <p className="text-lg text-gray-600 mt-2">
            Transforming Ideas into Tangible Results with Precision.
          </p>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Our Mission', text: 'Revolutionizing manufacturing with robotics and precision engineering.', icon: '/icons/mission-icon.svg' },
            { title: 'Our Vision', text: 'To become a global leader in advanced sheet metal forming solutions.', icon: '/icons/vision-icon.svg' },
            { title: 'Our Journey', text: 'Achieving milestones through innovation, partnerships, and dedication.', icon: '/icons/journey-icon.svg' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 text-center">{item.title}</h2>
              <p className="text-gray-600 mt-2 text-center">{item.text}</p>
            </div>
          ))}
        </div>
      
        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">Join Us</h2>
          <p className="text-gray-600 mt-2">Help shape the future of manufacturing.</p>
          <a href="/contact">
            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-800 transition">
              Contact Us
            </button>
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
