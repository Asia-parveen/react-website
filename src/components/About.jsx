// Home.jsx
import React from "react";
import Card from "./Card";

const About = () => {
  // Sample data for cards
  const cardData = [
    {
      image: "/images/ai.jpg", // Example image
      title: "AI for Healthcare",
      description: "Transforming healthcare with AI-driven solutions.",
      buttonText: "Learn More",
    },
    {
      image: "/images/colfl.jpg",
      title: "AI in Finance",
      description: "Leveraging AI to optimize financial systems.",
      buttonText: "Discover",
    },
    {
      image: "/images/alin.jpg",
      title: "AI for Education",
      description: "Revolutionizing education through AI tools.",
      buttonText: "Explore",
    },
    {
      image: "/images/aigren.jpg",
      title: "AI in Marketing",
      description: "AI strategies to enhance digital marketing.",
      buttonText: "Get Started",
    },
    {
      image: "/images/alin2.jpg",
      title: "AI for Robotics",
      description: "Innovating robotics with AI-driven automation.",
      buttonText: "See More",
    },
    {
      image: "/images/aiblk.jpg",
      title: "AI for Manufacturing",
      description: "Improving manufacturing efficiency with AI.",
      buttonText: "Learn More",
    },
    {
      image: "/images/alin3.jpg",
      title: "AI in Retail",
      description: "AI solutions for enhancing retail experiences.",
      buttonText: "Explore Now",
    },
    {
      image: "/images/mbl.jpg",
      title: "AI in Agriculture",
      description: "Improving agricultural practices with AI.",
      buttonText: "Discover More",
    },
  ];

  return (
    <div className="container mx-auto p-8 lg:pt-[40px] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
