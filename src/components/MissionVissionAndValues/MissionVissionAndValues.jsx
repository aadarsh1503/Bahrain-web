import React from 'react'
import Bounce from '../Bounce/Bounce'
import Slide from '../Slide/Slide'
import ColorBar from '../Colorbar/Colorbar'
import Slide1 from '../Slide1/Slide1'

const MissionVissionAndValues = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-around max-w-6xl mx-auto lg:mb-20 items-stretch text-center lg:mt-32 text-GrayDark py-8 lg:py-16 gap-8 lg:gap-6">

        {/* Mission Section */}
        <div className="w-full lg:w-1/3 shadow-custom p-6 px-4 flex flex-col  h-[250px]">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-wider mb-2 lg:mb-0">MISSION</h2>
          <p className="text-sm mt-6 lg:text-base">
            Provision of logistics services with resources that combine personal attention for the best result in the
            completion of the operation, ensuring the customer peace of mind, comfort, and confidence in the care of their shipments.
          </p>
        </div>

        {/* Vision Section */}
        <div className="w-full lg:w-1/3 shadow-custom p-6 px-4 flex flex-col  h-[250px]">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-wider mb-2 lg:mb-">VISION</h2>
          <p className="text-sm mt-4 lg:text-base">
            To be recognized in the national and international market as a strong option for logistics services,
            using ethical values and achieving total customer satisfaction.
          </p>
        </div>

        {/* Values Section */}
        <div className="w-full lg:w-1/3 shadow-custom p-6 px-4 flex flex-col  h-[250px]">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-wider mb-2 ">VALUES</h2>
          <p className="text-sm mt-4 lg:text-base">
            Integrity, Responsibility, Excellence, Competence. We are committed to upholding integrity, taking responsibility, striving for excellence, and demonstrating competence in everything we do.
          </p>
        </div> 
      </div>

      <Bounce />
      <div className=' lg:mb-10 lg:ml-0 ml-10 w-56 lg:w-full lg:mt-10'>
        <Slide1 />
      </div>

      <ColorBar />

    </div>
  )
}

export default MissionVissionAndValues
