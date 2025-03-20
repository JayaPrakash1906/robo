import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Img1 from '../Assets/contact.webp';

const Contact = () => {
  return (
    <div className="relative w-full font-dmsans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div>
        <img src={Img1} alt="Contact" className="w-full h-[150px] object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Headline and Subhead */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center">Let’s Collaborate to Bring Your Ideas to Life</h1>
        <p className="text-base md:text-lg text-center mt-2">Reach Out to RoboInform for Tailored Roboforming Solutions.</p>

        {/* Contact Form */}
        <form className="max-w-md mx-auto mt-8 space-y-4">
          <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-md p-2" />
          <input type="text" placeholder="Company Name" className="w-full border border-gray-300 rounded-md p-2" />
          <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md p-2" />
          <input type="tel" placeholder="Phone" className="w-full border border-gray-300 rounded-md p-2" />
          <textarea placeholder="Message" rows="4" className="w-full border border-gray-300 rounded-md p-2 resize-none" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send Message</button>
        </form>

        <h2 className="text-xl md:text-2xl font-semibold text-center mt-6">Our Location</h2>

        {/* Contact Details & Map Full View on Medium Screens */}
        <div className="mt-8 flex flex-col md:flex-row items-center md:justify-center gap-8 md:w-full">
          {/* Contact Info */}
          <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/2 max-w-md md:max-w-full">
            <h2 className="text-lg font-semibold text-gray-800">Email: <span className="text-blue-600">info@roboinform.com</span></h2>
            <h2 className="text-lg font-semibold text-gray-800 mt-2">Phone: <span className="text-blue-600">+91 70696 26118</span></h2>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Location:</h2>
              <p className="text-gray-700">Sudha & Shankar Innovation Hub</p>
              <p className="text-gray-700">IIT Madras, Chennai</p>
              <p className="text-gray-700">600036, India</p>
            </div>
          </div>

          {/* Map Section - Full Width on Medium Screens */}
          <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.9327117318!2d80.23087095601285!3d12.992060705933891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour%20Location!5e0!3m2!1sen!2sin!4v1697625012783!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
