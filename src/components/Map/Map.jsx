import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook , FaTwitter } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faGlobe  } from '@fortawesome/free-solid-svg-icons';

function LocationSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10 mb-10 gap-8 p-4">
      {/* Location 1 */}
      <div className="bg-white top-0 w-full  max-w-[300px] shadow-custom rounded-lg overflow-hidden">
  <div className="relative z-10 bg-white p-6  rounded-t-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Bahrain Office</h2>
    <p className="text-gray-600 text-sm mb-4">
      <strong>Address:</strong> Office 22, Bldg 661, Rd 1208, Block 712 - Salmabad, Kingdom Of Bahrain
    </p>
    <div className="flex space-x-2">
    <a
              href="tel:+97317491444"
              className="bg-white p-2 rounded-full"
              title="Call Bahrain Office"
            >
              <FontAwesomeIcon icon={faPhone} className="text-DarkBlue text-3xl" />
            </a>
      <a
        href="https://www.linkedin.com/company/gvsbahrain/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
      >
        <FaLinkedin className="text-DarkBlue text-3xl" />
      </a>
      <a
        href="https://instagram.com/gvscargo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
      >
        <FaInstagram className="text-DarkBlue text-3xl" />
      </a>
      <a
        href="https://facebook.com/gvscargo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
      >
        <FaFacebook className="text-DarkBlue text-3xl" />
      </a>
      <a
        href="https://twitter.com/gvscargo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
      >
        <FontAwesomeIcon icon={faXTwitter} className="text-DarkBlue text-3xl" />
      </a>
    
    </div>
  </div>
  <div className="-mt-20">
  <a
    href="https://www.google.com/maps?q=26.1868843,50.5237206&hl=en"
    target="_blank"
    rel="noopener noreferrer"
    title="Open Map in Google Maps"
    className="block"
  >
    <iframe
      className="w-full rounded-b-lg pointer-events-none"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.236249565674!2d50.5237206!3d26.1868843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1731936574918!5m2!1sen!2sin"
      width="100%"
      height="270"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map Bahrain"
    ></iframe>
  </a>
</div>

</div>


      {/* Location 2 */}
      <div className="bg-white w-full max-w-[300px] shadow-custom rounded-lg overflow-hidden">
  <div className="relative z-10 bg-white p-6 shadow-lg rounded-t-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">UAE Office</h2>
    <p className="text-gray-600 text-sm mb-8">
      <strong>Address:</strong> 221 Salah Al Din St - Deira - Dubai - United Arab Emirates
    </p>
    <div className="flex space-x-2">
      <a
        href="https://www.linkedin.com/company/gvsbahrain/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
      >
        <FaLinkedin className="text-DarkBlue text-3xl" />
      </a>
      <a
        href="https://instagram.com/gvscargo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
      >
        <FaInstagram className="text-DarkBlue text-3xl" />
      </a>
      <a
        href="https://facebook.com/gvscargo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
      >
        <FaFacebook className="text-DarkBlue text-3xl" />
      </a>
      <a
        href="https://twitter.com/gvscargo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
      >
        <FontAwesomeIcon icon={faXTwitter} className="text-DarkBlue text-3xl" />
      </a>
      <a
        href="https://gvscargo.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full"
        title="Visit Website"
      >
        <FontAwesomeIcon icon={faGlobe} className="text-DarkBlue text-3xl" />
      </a>
    </div>
  </div>
  <div className="-mt-20">
  <a
    href="https://www.google.com/maps?q=25.270978777663522,55.329139175384235&hl=en"
    target="_blank"
    rel="noopener noreferrer"
    title="Open Map in Google Maps"
    className="block"
  >
    <iframe
      className="w-full rounded-b-lg pointer-events-none"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9883072023586!2d55.329139175384235!3d25.270978777663522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc12f2944b9%3A0xf9029a4ef1c7a79b!2s221%20Salah%20Al%20Din%20St%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1730708745804!5m2!1sen!2sin"
      width="100%"
      height="270"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map Dubai"
    ></iframe>
  </a>
</div>

</div>

    </div>
  );
}

export default LocationSection;
