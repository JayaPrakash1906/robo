import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Vedio from "../Assets/Media.mp4"; // Placeholder for robotic arm image
import Img3 from "../Assets/cost_effective.png";
import Img4 from "../Assets/scalability.png";
import Img5 from "../Assets/design_flexibility.png";
import IndustryAerospace from "../Assets/Aerospace.jpg";
import IndustryAutomotive from "../Assets/Automotive.jpg";
import IndustryBiomedical from "../Assets/biomedical.png";
import IndustryArtArchitecture from "../Assets/art&architecture.jpg";
import Team1 from "../Assets/sahil_bharti.jpg";
import Team2 from "../Assets/Eldho_paul.jpg";


const Home = () => {
  return (
    <div className="w-full">
      {/* Navbar Over Video */}
      <div className="absolute top-0 left-0 w-full z-50 bg-black/50">
        <Navbar />
      </div>
      {/* Hero Section with Video */}
      <div id="home" className="relative w-full h-[800px] mt-16">
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
         {/* <a href="/services">
            <button className="px-6 py-3 bg-[#FFD56F] rounded-md text-black font-semibold mt-4 hover:bg-[#facc5c] hover:text-black">
              Explore Our Services
            </ button>
          </a> */}
        </div>
      
      </div>

      {/* About Us Section */}
      <div id="about-us" className="py-8 sm:py-12 md:py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 font-dmsans">Imagine transforming your innovative ideas into reality with just the touch of a button?</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed font-dmsans text-center sm:text-justify">
            At RoboInForm, we specialize in making your visions come to life using cutting-edge industrial robots, AI, and advanced machine learning. Whether you're dreaming of intricate sheet metal designs or unique components, our tailored solutions deliver unparalleled flexibility and customization just for you. <br className="hidden sm:block"/>
            Join us on a journey to the agile future of manufacturing, where we make prototyping a breeze, speed up production times, and help you get your products to market faster than ever. Let's turn your concepts into a stunning reality together!
          </p>
        </div>
      </div>

      {/* Industries We Serve */}
      <div id="industries" className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6">Industries We Serve</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 mb-6 sm:mb-8 px-4 text-sm sm:text-base">
            From aerospace to electronics, our solutions empower various industries to achieve precision, speed, and cost efficiency.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Aerospace */}
            <li className="bg-white shadow-md rounded-md p-3 sm:p-4 flex flex-col items-center">
              <div className="relative w-full h-48 sm:h-60 overflow-hidden rounded mb-2">
                <img src={IndustryAerospace} alt="Aerospace" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-center">Aerospace</span>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center sm:text-justify">
                Today's aerospace demands lightweight, fast, and cost-efficient parts. Roboforming cuts tooling costs and speeds production - perfect for agile, high-precision manufacturing that keeps you soaring ahead.
              </p>
            </li>
            {/* Automotive */}
            <li className="bg-white shadow-md rounded-md p-3 sm:p-4 flex flex-col items-center">
              <div className="relative w-full h-48 sm:h-60 overflow-hidden rounded mb-2">
                <img src={IndustryAutomotive} alt="Automotive" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-center">Automotive</span>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center sm:text-justify">
                With fast-changing designs and EV trends, flexibility is key. Roboforming delivers custom, complex parts on demand-saving time and money while driving innovation forward.
              </p>
            </li>
            {/* Biomedical */}
            <li className="bg-white shadow-md rounded-md p-3 sm:p-4 flex flex-col items-center">
              <div className="relative w-full h-48 sm:h-60 overflow-hidden rounded mb-2">
                <img src={IndustryBiomedical} alt="Biomedical" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-center">Biomedical</span>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center sm:text-justify">
                Personalized medical devices need precision and speed. Roboforming creates intricate, patient-specific parts quickly and cost-effectively-bringing healthcare innovation to life.
              </p>
            </li>
            {/* Art & Architecture */}
            <li className="bg-white shadow-md rounded-md p-3 sm:p-4 flex flex-col items-center">
              <div className="relative w-full h-48 sm:h-60 overflow-hidden rounded mb-2">
                <img src={IndustryArtArchitecture} alt="Art & Architecture" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-center">Art & Architecture</span>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center sm:text-justify">
                Bold, intricate designs require modern solutions. Roboforming transforms creative visions into stunning metal forms-fast, precise, and endlessly customizable.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-8 sm:py-10 bg-gray-800 text-white text-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Discover How Our Services Can Elevate Your Business
        </h2>
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#FFD56F] rounded-md text-black font-semibold hover:bg-[#facc5c] text-sm sm:text-base">
          Get Started
        </button>
      </div>

      {/* Meet Our Team */}
      <div id="team" className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10">Our Team</h2>
          <p className="text-sm sm:text-base px-2 sm:px-4">We're a dedicated group of metal forming and robotics researchers hailing from IIT Madras. Our passion lies in transforming cutting-edge research and technological innovations into real-world solutions that drive industrial progress. Committed to supporting the mission of indigenous manufacturing, we're excited to push the boundaries of what's possible in global manufacturing. Join us on this journey as we shape the future, one breakthrough at a time!</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-6">
            {/* Member 1 */}
            <li className="group bg-white rounded-2xl shadow-md p-3 sm:p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative mx-auto w-48 sm:w-56 md:w-64 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-gray-100">
                <img src={Team1} alt="Sahil Bharti" className="absolute inset-0 w-full h-full object-cover filter grayscale transition duration-300 group-hover:grayscale-0" />
                <a href="https://www.linkedin.com/in/sahilbharti1/" aria-label="LinkedIn profile" className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0A66C2] text-white shadow-md opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <i className="fa-brands fa-linkedin-in text-sm sm:text-lg"></i>
                </a>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4">Sahil Bharti</h3>
              <p className="text-sm sm:text-base text-gray-600">Manufacturing Expert</p>
            </li>
            {/* Member 2 */}
            <li className="group bg-white rounded-2xl shadow-md p-3 sm:p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative mx-auto w-48 sm:w-56 md:w-64 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-gray-100">
                <img src={Team2} alt="Eldho Paul" className="absolute inset-0 w-full h-full object-cover filter grayscale transition duration-300 group-hover:grayscale-0" />
                <a href="https://www.linkedin.com/in/eldho-paul-232ab944/" aria-label="LinkedIn profile" className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0A66C2] text-white shadow-md opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <i className="fa-brands fa-linkedin-in text-sm sm:text-lg"></i>
                </a>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4">Eldho Paul</h3>
              <p className="text-sm sm:text-base text-gray-600">Robotics Expert</p>
            </li>
          </ul>
        </div>
      </div>


      {/* Why Choose Us Section */}
      {/* <div className="py-16">
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
      </div> */}

      {/* Call to Action Section */}
      {/* <div className="bg-orange-400 text-white py-16 text-center font-dmsans">
        <h2 className="text-3xl font-semibold mb-4">Ready to Partner with Us?</h2>
        <p className="text-lg mb-6">
          Contact our team today and discover how we can elevate your business!
        </p>
        <a href="/contact">
          <button className="px-6 py-3 bg-white text-orange-400 rounded-md font-semibold hover:bg-gray-200">
            Get in Touch
          </button>
        </a>
      </div> */}
      {/* Join Us Section */}
      <div id="join-us" className="text-center mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Join Us</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">Help shape the future of manufacturing.</p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="https://www.linkedin.com/company/roboinform/">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-800 transition text-sm sm:text-base">
              Contact Us
            </button>
          </a>
          <a href="https://www.linkedin.com/groups/9890157" target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-[#0A66C2] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#084c93] transition inline-flex items-center gap-2 text-sm sm:text-base">
              <i className="fa-brands fa-linkedin-in"></i>
              Community
            </button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
