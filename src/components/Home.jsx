import React from 'react';
import Button from './Button'; // Import the reusable Button component
// import Image from next/Image;

const HomePage = () => {
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Right Column (Image) */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="public/images/rbt.jpg" // Replace with your image URL
            alt="Robot"
            className="w-450 h-400 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-90"
          />
        </div>
        {/* Left Column (Title and Description) */}
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-purple-900">Agentic AI: Autonomous Decision-Making at its Best





          </h1>
          <p className="text-lg text-gray-600 text-[14px]">
            Agentic AI refers to artificial intelligence systems designed to make decisions and take actions autonomously, based on specific goals and inputs. Unlike traditional AI models that require continuous human intervention, agentic AI operates independently to achieve its objectives. It uses complex algorithms, machine learning, and data-driven models to understand its environment and adapt its behavior accordingly. This capability allows Agentic AI to be applied in various fields, from robotics and virtual assistants to more advanced applications in autonomous vehicles and smart cities. As technology advances, the role of agentic AI is expected to expand, bringing more intelligent systems capable of operating with minimal human oversight.
          </p>
          <Button text="Learn More" onClick={handleButtonClick} className="hover:bg-[#1c5732]" />
        </div>


      </div>
    </div>
  );
};

export default HomePage;
