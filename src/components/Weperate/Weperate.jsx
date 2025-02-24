import React, { useState, useEffect } from 'react';
import { FaMapMarkedAlt, FaGlobeAfrica } from 'react-icons/fa';
import newimage from "./newimage.png"

const Weperate = () => {
  const [modalContent, setModalContent] = useState(null); // State to track which modal is open

  const handleUAEButtonClick = () => {
    setModalContent('UAE'); // Set content to show UAE modal
  };

  const handleWorldButtonClick = () => {
    setModalContent('world'); // Set content to show World modal
  };

  const handleCloseModal = () => {
    setModalContent(null); // Close the modal
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (modalContent) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [modalContent]);

  return (
    <div className="flex flex-col lg:flex-row font-roboto justify-between max-w-5xl mx-auto items-center py-10 px-5 space-y-6 lg:space-y-0">
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start space-y-4 lg:ml-32">
        <h2 className="text-xl lg:text-3xl lg:-ml-10 font-bold text-Graytext">Where We Operate:</h2>

        <button 
          className="flex items-center justify-center lg:ml-3  hover:text-black bg-DarkYellow text-white py-2 px-4 lg:py-4 lg:px-8 rounded-full"
          onClick={handleUAEButtonClick}
        >
          <FaMapMarkedAlt className="text-lg mr-2 " />
          <span className='text-white'>IN BAHRAIN</span>
        </button>

        <button 
          className="flex items-center justify-center hover:text-black bg-DarkYellow text-white py-2 px-4 lg:py-4 lg:px-8 rounded-full"
          onClick={handleWorldButtonClick}
        >
          <FaGlobeAfrica className="text-sm mr-2" />
          <span className='text-white'>IN THE WORLD</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={newimage}
          alt="Map or relevant image"
          className="w-full h-auto max-w-xs lg:max-w-full lg:h-[400px]"
        />
      </div>

      {/* Modal for UAE */}
      {modalContent === 'UAE' && (
        <div className="fixed inset-0 flex lg:p-0 p-6 items-center justify-center font-roboto z-10 bg-black bg-opacity-50">
        <div className="bg-white p-6 mb-10 rounded-lg shadow-lg max-w-3xl w-full relative">
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
  
          {/* Modal Header */}
          <h3 className="lg:text-2xl text-xl font-semibold mb-4">IN BAHRAIN</h3>
  
          {/* Modal Description */}
          <p className="mb-4">
            We operate in several BAHRAIN capitals, offering services that meet your demands nationwide quickly, safely, and with the transparency you need.
          </p>
  
          {/* Google Map Embed */}
          <div className="w-full h-80 mb-6 rounded-lg overflow-hidden">
<iframe
  title="Central & Northern Bahrain Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28900.401362293366!2d50.5005!3d26.1905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.5!3m3!1m2!1s0x3e49a82a6e8f07ed%3A0x3c0c4f7a9a0a6b6b!2sIsa%20Town%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1695721234567!5m2!1sen!2sbh"
  width="100%"
  height="100%"
  style={{ border: "none" }}
  zoom="10"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>



          </div>
  
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute bottom-1 right-4 mt-10 flex items-center justify-center bg-black text-DarkYellow py-2 px-4"
          >
            To Close
          </button>
        </div>
      </div>
      )}

      {/* Modal for World */}
      {modalContent === 'world' && (
        <div className="fixed inset-0 flex items-center lg:p-0 p-6 justify-center font-roboto z-10 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <div className='mb-10 z-10'>
              <h3 className="text-2xl font-semibold mb-4">IN THE WORLD</h3>
              <p>
                We offer our customers a fast, safe and personalized service, whether for imports, exports or obtaining all solutions for customs clearance.
              </p>
            </div>
            <button 
              onClick={handleCloseModal} 
              className="absolute bottom-2 right-4 flex items-center justify-center bg-black text-DarkYellow py-2 px-4"
            >
              To Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weperate;
