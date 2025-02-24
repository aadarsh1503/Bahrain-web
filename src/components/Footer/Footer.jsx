import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaChevronDown, FaEnvelope,FaMapMarkerAlt, FaPhoneAlt  } from 'react-icons/fa';
import g4 from './g4.png';
import white from './white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validate email
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
  
    // Show success message immediately
    setMessage('Thank you for subscribing!');
    setEmail(''); // Clear input field
  
    // Prepare email data for the user
    const userEmailData = {
      to: email, // Send email to the user
      from: "customercare@gvscargo.com", // Sender's email (your email)
      subject: "Welcome to the Newsletter!",
      message: `
        Welcome to Global Vision Solution!
        Thank you for subscribing to our newsletter. We’re excited to share our latest updates with you!
        Stay connected,
        Global Vision Solution Team
      `,
    };
  

    const adminEmailData = {
      to: "customercare@gvscargo.com", 
      from: "customercare@gvscargo.com", 
      subject: "New Subscriber Alert!",
      message: `
        A new user has subscribed to the newsletter!
        Email: ${email}
      `,
    };
  
    try {
      // Send the email data to the API to notify the admin
      const adminResponse = await fetch('https://gvscargo.com/send_to_a_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminEmailData), 
      });
  
      if (!adminResponse.ok) {
        setMessage('Failed to notify admin. Please try again.');
      }
  
      // Now send the email to the user
      const userResponse = await fetch('https://gvscargo.com/send_to_a_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userEmailData), // Send email data to user
      });
  
      if (!userResponse.ok) {
        setMessage('Failed to send subscription confirmation email. Please try again.');
      } else {
        setMessage('Thanks For Subscribing!');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error(error);
    }
  };
  
  return (
    <footer className="bg-DarkBlue lg:h-[450px] text-gray-200 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row max-w-7xl justify-between items-center px-4">
        
        {/* Left Section: Logo and Social Icons */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <img src={white} alt="GVS Cargo & Logistics" className="h-56 lg:-mb-8 mb-0 rounded-xl w-56" />

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/company/gvsbahrain/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
              <FaLinkedin className="text-DarkBlue text-3xl" />
            </a>
            <a href="https://instagram.com/gvscargo" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
              <FaInstagram className="text-DarkBlue text-3xl" />
            </a>
            <a href="https://facebook.com/gvscargo" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
              <FaFacebook className="text-DarkBlue text-3xl" />
            </a>
            <a href="https://twitter.com/gvscargo" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
            <FontAwesomeIcon icon={faXTwitter} className="text-DarkBlue text-3xl" />

            </a>
          </div>

          <p className="mt-4 text-sm text-center lg:text-left">© 2024 GVS Cargo & Logistics. All Rights Reserved.</p>
        </div>
        <div class="flex flex-col items-center lg:items-start space-y-4 mb-8 lg:mb-0">
        <div className="max-w-7xl mt-4 mx-auto">
  <h2 className="text-2xl font-semibold outline rounded-md outline-white text-center p-2 mb-">Get in Touch</h2>

  <div className="flex flex-col space-y-6 mt-6">

    <div className="flex items-start space-x-4">
      <FaMapMarkerAlt className="text-white mt-1" />
      <div>
        <h3 className="text-lg font-medium "></h3>
        <p>Office 22, Bldg 661, RD 1208,<br />
          Block 712 - Salmabad,<br />
          Kingdom Of Bahrain
        </p>
      </div>
    </div>


    <div className="flex items-start space-x-4">
      <FaPhoneAlt className="text-white mt-1" />
      <div>
        <h3 className="text-lg font-medium"></h3>
        <a href="tel:+1234567890" className="hover:underline">+973 17491444</a>
      </div>
    </div>


    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-4 hover:underline focus:outline-none"
      >
        <FaEnvelope className="text-white " />
        <span className='relative left-1'>Email</span>
        <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute -right-6 top-0 mt-2 bg-white text-black p-3 font-sans rounded-lg shadow-lg z-10">
          <ul className="space-y-2">
            <li>
              <a href="mailto:customercare@gvscargo.com" className="hover:text-[#243670]">
                Customer Care
              </a>
            </li>
            <li>
              <a href="mailto:sales@gvscargo.com" className="hover:text-[#243670]">
                Sales Team
              </a>
            </li>
            <li>
              <a href="mailto:info@gvscargo.com" className="hover:text-[#243670]">
                Business Enquiries
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>
</div>

  </div>

        {/* Right Section: Newsletter and Developer Credit */}
        <div className="flex flex-col items-center lg:items-end space-y-">
          {/* Newsletter Section */}
          <div className="flex flex-col items-center lg:items-center mb-8">
            <p className="text-lg mb-8">Follow the news:</p>
            <div className="flex flex-col w-70 lg:w-96">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 text-gray-800 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-DarkYellow mt-2 hover:text-white text-gray-800 p-2 w-full rounded-full"
                onClick={handleSubscribe}
              >
                Register
              </button>

              {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
            </div>
          </div>

          {/* Developer Credit */}
          <div className="flex flex-col items-center">
            <p className="text-sm mb-2 text-center">Developed and monitored by:</p>
            <a href="https://gvs-bh.com/" target="_blank" rel="noopener noreferrer">
  <img src={g4} alt="Alumiar Logo" className="h-32 w-46 rounded-xl lg:w-38" />
</a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
