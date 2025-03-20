import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Vedio from "../Assets/Media.mp4"; // Placeholder for robotic arm image
import Img3 from "../Assets/cost_effective.png";
import Img4 from "../Assets/scalability.png";
import Img5 from "../Assets/design_flexibility.png";

const Home = () => {
  return (
    <div className="w-full">
      {/* Navbar Over Video */}
      <div className="absolute top-0 left-0 w-full z-50 bg-black/50">
        <Navbar />
      </div>
<div className="relative w-full h-[500px] mt-16">
        <video
          src={Vedio}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        
        {/* Centering Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 text-center px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Revolutionizing Sheet Metal Forming
          </h1>
          <h2 className="text-lg md:text-xl mb-3">
            Discover the Future of Manufacturing with Advanced Roboforming Solutions.
          </h2>
          <a href="/services">
            <button className="px-6 py-3 bg-[#FFD56F] rounded-md text-black font-semibold mt-4 hover:bg-[#facc5c] hover:text-black">
              Explore Our Services
            </button>
          </a>
        </div>
      
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 font-dmsans">About RoboInform</h2>
          <p className="text-lg text-gray-900 leading-relaxed font-dmsans">
            At RoboInform, we specialize in innovative roboforming techniques that redefine 
            design customization with efficiency and scalability in sheet metal forming. 
            With cutting-edge technology and industry expertise, we deliver unparalleled 
            solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto text-center font-dmsans">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <img src={Img3} alt="Cost Efficiency" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold">Cost Efficiency</h3>
              <p className="text-gray-600 mt-2">
                Our dieless forming process eliminates the need for custom tooling, significantly reducing production costs and lead times.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Img5} alt="Precision" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold">Design Flexibility</h3>
              <p className="text-gray-600 mt-2">
                Roboforming allows for the creation of complex geometries that were previously difficult or impossible to achieve, enabling mass customization without additional costs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Img4} alt="Scalability" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold">Scalability</h3>
              <p className="text-gray-600 mt-2">
                Seamlessly scale operations for any project size.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-orange-400 text-white py-16 text-center font-dmsans">
        <h2 className="text-3xl font-semibold mb-4">Ready to Partner with Us?</h2>
        <p className="text-lg mb-6">
          Contact our team today and discover how we can elevate your business!
        </p>
        <a href="/contact">
          <button className="px-6 py-3 bg-white text-orange-400 rounded-md font-semibold hover:bg-gray-200">
            Get in Touch
          </button>
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
