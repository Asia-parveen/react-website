// Technology.jsx
import React from 'react';
// import Button from './Button';

const Technology = () => {
  
 
  return (
    <>
    <section className=" max-w-screen-2xl flex flex-col lg:flex-row items-center justify-between py-12 px-6">

        {/* Right Column: Content */}
        <div className="lg:w-2/3 text-center lg:text-left lg:pl-[90px]">
        <h2 className="text-3xl font-bold mb-4 text-[#050523]">Innovative Technology</h2>
        <h3 className="text-xl  mb-4 text-[#050523] font-bold">Powering the Future</h3>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
          Our innovative technologies are designed to revolutionize the way businesses operate.<br></br>
          From cutting-edge AI to machine learning, we provide the tools to transform industries<br></br> 
          and empower organizations to thrive in the digital age.
         
        </p>
        <button className='text-white px-[120px] py-[10px] bg-[#1c5732] font-bold mt-[30px] hover:bg-[#050523]'>information</button>
       
      </div>
      {/* Left Column: Images */}
      <div className="lg:w-1/3 flex flex-col lg:flex-row gap-4 mb-8 lg:mb-0 ">
        <div className="flex flex-col gap-4 ">
          <img
            src="/images/alin.jpg"
            alt="Tech 1"
            className="w-32 h-32 object-cover rounded-lg shadow-md hover:opacity-[0.7]"
          />
          <img
            src="/images/rbt.jpg"
            alt="Tech 2"
            className="w-32 h-32 object-cover rounded-lg shadow-md hover:opacity-[0.7]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <img
            src="/images/alin3.jpg"
            alt="Tech 3"
            className="w-32 h-32 object-cover rounded-lg shadow-md hover:opacity-[0.7]"
          />
          <img
            src="/images/alin2.jpg"
            alt="Tech 4"
            className="w-32 h-32 object-cover rounded-lg shadow-md hover:opacity-[0.7]"
          />
        </div>
      </div>

    
    
    </section>
    </>
  );
};

export default Technology;
