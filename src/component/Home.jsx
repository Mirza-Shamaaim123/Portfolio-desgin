import React from "react";
import heroImage from "../assets/01 image.png"; // <-- Replace with your actual path

const HeroSection = () => {
  return (
    <section className="bg-[#171d32] text-white py-16 px-6">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Text content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello i am <span className="text-white">aditi</span>
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam
            numquam illo? Omnis illum commodi molestias beatae laudantium laborum veniam
            assumenda quos ut minus consectetur
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-full">
            Contact Me
          </button>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center md:w-1/2 ">
          <img src={heroImage} alt="Aditi working" className="w-72 md:w-96 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

