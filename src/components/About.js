
import React from "react";

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-6 py-12 md:flex-row lg:px-15 flex-col items-center text-center">
          <div className="lg:1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-center mb-16 md:mb-0 items-center text-center">
          <p className="font-sans text-xl mb-4 text-white md:text-center">
          Welcome to my Data Science portfolio. 
             </p>
             <p className="font-sans text-l mb-4 text-white text-center">
          I specialize in extracting meaningful 
          insights from data, blending analytics, and machine learning with a touch of
           storytelling. As you explore my projects, you'll find a commitment to ethical
            data modeling, ensuring that every analysis is not just insightful but responsible.
             </p>
             <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg transform transition-transform hover:scale-105">
                Contact Me
              </a>

              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transform transition-transform hover:scale-105">
                My Past Work
              </a>
            </div>

          </div>
          <div className="sm: w-1/2 lg:w-1/2 md:w-1/2 ">
            <img
              className="object-cover object-center rounded w-1/2"
              alt=""
              src="./self.png"
            />
          </div>
        </div>
      </section>
    );
  }
  