import React, { useState, useEffect } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1 - scrollY * 0.0002;

  return (
    <section id="about" style={{ transform: `scale(${scale})` }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:items-start md:text-left py-12 px-6 lg:px-15">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0 flex flex-col justify-center">
          <p className="font-sans text-3xl font-bold mb-4 text-white md:text-center">
            Welcome to my Data Science portfolio.
          </p>
          <p className="font-sans text-l mb-4 text-white md:text-center">
            I specialize in extracting meaningful insights from data, blending analytics, and machine learning with a touch of storytelling. As you explore my projects, you'll find a commitment to ethical data modeling, ensuring that every analysis is not just insightful but responsible.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="inline-flex text-center text-white bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg transform transition-transform hover:scale-105">
              Contact Me
            </a>

            <a
              href="#projects"
              className="inline-flex text-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transform transition-transform hover:scale-105">
              My Past Work
            </a>
          </div>
          {/* paragraph below buttons */}
          <p className="font-sans text-l mt-4 text-white text-center">
            My current projects include web design and version control, exploring new libraries to enhance the user experience.
          </p>

          <p className="font-sans text-l mt-1 text-white text-center">
            My current interests lie in AI and data ethics, emphasizing responsible and transparent practices. I am particularly interested in contributing to discussions on ethical AI and ensuring its safe development and deployment.
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="max-w-sm mx-auto">
            <img
              className="object-cover object-center rounded-full w-full h-full"
              alt=""
              src="./linkedin.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
